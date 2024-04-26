import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
    label: Body;
`

interface BodyProps {
    children: React.ReactNode
}

export const Body = ({ children }: BodyProps) => (
    <Container>{children}</Container>
)
