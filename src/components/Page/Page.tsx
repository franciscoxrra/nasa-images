import React from "react"
import { Helmet } from "react-helmet"
import { useVersionCheckAndRefresh } from "../../hooks/versionCheckAndRefresh"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Body } from "./Body"
import styled from "@emotion/styled"

const Container = styled.div`
    label: Page;

    display: grid;
    grid-template-rows:
        ${(props) => props.theme.page.header.height}
        minmax(
            calc(100vh - ${(props) => props.theme.page.header.height}),
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
                <title>NASA Images{subTitle ? ` | ${subTitle}` : ""}</title>
            </Helmet>
            <Container>
                <Header />
                <Body>{children}</Body>
                <Footer />
            </Container>
        </>
    )
}
