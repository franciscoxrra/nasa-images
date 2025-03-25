import styled from "@emotion/styled"
import React from "react"
import { PropsOf } from "@emotion/react"

const Container = styled.button`
    label: IconButton;

    padding: 0;
    background: none;
    border: none;
    font: inherit;
    font-size: ${(props) => props.theme.fonts.sizes.big};
    cursor: pointer;
    outline: inherit;
    border-radius: 50%;

    > div {
        display: grid;
        align-content: center;
        padding: 0.5rem;
    }

    &:hover {
        text-decoration: underline;
        background-color: ${(props) =>
            props.theme.colors.background.light};
    }
`

interface IconButtonProps
    extends PropsOf<typeof Container> {
    children?: React.ReactNode
}

export const IconButton = ({
    children,
    ...props
}: IconButtonProps) => (
    <Container {...props}>
        <div>{children}</div>
    </Container>
)
