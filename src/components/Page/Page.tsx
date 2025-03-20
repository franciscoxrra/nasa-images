import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState
} from "react"
import { Helmet } from "react-helmet"
import { useVersionCheckAndRefresh } from "../../hooks/versionCheckAndRefresh"
import { HomeHeader } from "./Sections/Headers/Home/HomeHeader"
import { FooterSection } from "./Sections/FooterSection"
import styled from "@emotion/styled"
import { pageName } from "../../util/constants"
import { useViewportDimensions } from "../../contexts/ViewportDimensions"
import { usePageScroll } from "../../contexts/PageScroll"

// TODO add to theme

const PageContext = createContext<{
    headerHeight: number
}>({ headerHeight: 0 })

export const usePageDetails = () => useContext(PageContext)

const Container = styled.div`
    label: Page;

    min-width: min-content;
`

const HeaderSection = styled.div<{ atPageTop: boolean }>`
    label: HeaderSection;

    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: white;
    box-shadow: ${(props) =>
        props.atPageTop ? "none" : "0 2px 2px 0 #777777"};
`

const BodySection = styled.div<{ headerHeight: number }>`
    label: BodySection;

    margin-top: ${(props) => props.headerHeight}px;
    min-height: calc(
        100vh - ${(props) => props.headerHeight}px
    );
`

interface PageProps {
    subTitle?: string
    className?: string
    header?: React.ReactNode
    children: React.ReactNode
}

const defaultHeader = <HomeHeader />

// TODO check hook useVersionCheckAndRefresh works

export const Page = ({
    subTitle,
    className,
    header = defaultHeader,
    children: body
}: PageProps) => {
    useVersionCheckAndRefresh()

    const [height, setHeight] = useState(0)
    const $header = useRef<HTMLDivElement>(null)
    const { windowWidth, windowHeight } =
        useViewportDimensions()
    const { scrollY } = usePageScroll()

    useEffect(() => {
        if ($header.current) {
            setHeight($header.current.offsetHeight)
        }
    }, [header, windowWidth, windowHeight])

    return (
        <>
            <Helmet>
                <title>
                    {subTitle
                        ? `${subTitle} - ${pageName}`
                        : pageName}
                </title>
            </Helmet>
            <PageContext.Provider
                value={{ headerHeight: height }}
            >
                <Container className={className}>
                    <HeaderSection
                        ref={$header}
                        atPageTop={scrollY === 0}
                    >
                        {header}
                    </HeaderSection>
                    <BodySection headerHeight={height}>
                        {body}
                    </BodySection>
                    <FooterSection />
                </Container>
            </PageContext.Provider>
        </>
    )
}
