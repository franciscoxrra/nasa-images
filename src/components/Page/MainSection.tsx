import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
    label: MainSection;
`

interface BodyProps {
    children: React.ReactNode
}

export const MainSection = ({ children }: BodyProps) => (
    <Container>{children}</Container>
)
