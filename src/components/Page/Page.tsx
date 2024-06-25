import React from "react"
import { Helmet } from "react-helmet"
import { useVersionCheckAndRefresh } from "../../hooks/versionCheckAndRefresh"
import { TopNavigationBar } from "./TopNavigationBar"
import { FooterSection } from "./FooterSection"
import { MainSection } from "./MainSection"
import styled from "@emotion/styled"
import { pageName } from "../../util/constants"

const Container = styled.div`
    label: Page;

    display: grid;
    grid-template-rows:
        ${(props) => props.theme.layout.header.height}
        minmax(
            calc(100vh - ${(props) => props.theme.layout.header.height}),
            max-content
        )
        max-content;
`

interface PageProps {
    subTitle?: string
    children: React.ReactNode
}

export const Page = ({ subTitle, children }: PageProps) => {
    useVersionCheckAndRefresh()

    return (
        <>
            <Helmet>
                <title>
                    {pageName}
                    {subTitle ? ` | ${subTitle}` : ""}
                </title>
            </Helmet>
            <Container>
                <TopNavigationBar />
                <MainSection>{children}</MainSection>
                <FooterSection />
            </Container>
        </>
    )
}
