import React, { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet"
import { useVersionCheckAndRefresh } from "../../hooks/versionCheckAndRefresh"
import { DefaultHeader } from "./DefaultHeader"
import { FooterSection } from "./FooterSection"
import styled from "@emotion/styled"
import { pageName } from "../../util/constants"
import { useViewportDimensions } from "../../contexts/ViewportDimensions"

const Container = styled.div`
    label: Page;
`

const HeaderSection = styled.div`
    label: HeaderSection;

    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
`

const BodySection = styled.div<{ headerHeight: number }>`
    label: BodySection;

    margin-top: ${(props) => props.headerHeight}px;
    min-height: calc(100vh - ${(props) => props.headerHeight}px);
`

interface PageProps {
    subTitle?: string
    className?: string
    header?: React.ReactNode
    children: React.ReactNode
}

const defaultHeader = <DefaultHeader />

export const Page = ({
    subTitle,
    className,
    header = defaultHeader,
    children
}: PageProps) => {
    useVersionCheckAndRefresh()

    const [height, setHeight] = useState(0)
    const $header = useRef<HTMLDivElement>(null)
    const { windowWidth, windowHeight } = useViewportDimensions()

    useEffect(() => {
        if ($header.current) {
            setHeight($header.current.offsetHeight)
        }
    }, [header, windowWidth, windowHeight])

    return (
        <>
            <Helmet>
                <title>
                    {pageName}
                    {subTitle ? ` | ${subTitle}` : ""}
                </title>
            </Helmet>
            <Container className={className}>
                <HeaderSection ref={$header}>{header}</HeaderSection>
                <BodySection headerHeight={height}>{children}</BodySection>
                <FooterSection />
            </Container>
        </>
    )
}
