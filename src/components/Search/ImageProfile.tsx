import styled from "@emotion/styled"
import {
    useContext,
    useEffect,
    useRef,
    useState
} from "react"
import { PageContext } from "../Page/Page"
import { useViewportDimensions } from "../../contexts/ViewportDimensions"

const Container = styled.div`
    label: ImageProfile;
`

const FloatingProfile = styled.div<{
    headerHeight: number
    floaterHeight: number
}>`
    label: FloatingProfile;

    position: sticky;
    top: ${(props) => props.headerHeight}px;
    height: ${(props) => props.floaterHeight}px;
    background-color: ${(props) =>
        props.theme.backgroundColors.tertiary};
`

export const ImageProfile = () => {
    const $container = useRef<HTMLDivElement>(null)
    const { windowHeight } = useViewportDimensions()
    const { headerHeight } = useContext(PageContext)
    const [floaterHeight, setFloaterHeight] = useState(0)

    useEffect(() => {
        const dimensionFloater = () => {
            if ($container.current) {
                const dims =
                    $container.current.getClientRects()[0]
                setFloaterHeight(
                    Math.min(dims.bottom, windowHeight) -
                        headerHeight
                )
            }
        }
        dimensionFloater()
        window.addEventListener("scroll", dimensionFloater)
        return () =>
            window.removeEventListener(
                "scroll",
                dimensionFloater
            )
    }, [headerHeight, windowHeight])

    return (
        <Container ref={$container}>
            <FloatingProfile
                headerHeight={headerHeight}
                floaterHeight={floaterHeight}
            >
                HERE
            </FloatingProfile>
        </Container>
    )
}
