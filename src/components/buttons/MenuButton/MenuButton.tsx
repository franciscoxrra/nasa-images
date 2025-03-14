import React from "react"
import styled from "@emotion/styled"
import { HamburgerButton } from "./HamburgerButton"
import { HiddenMenu } from "./HiddenMenu"

const Container = styled.div`
    label: MenuButton;

    position: relative;

    &:focus-within > button {
        background-color: ${(props) =>
            props.theme.colors.background.light};
    }

    &:focus-within > div {
        display: flex;
    }
`

interface MenuButtonProps {
    children: React.ReactNode
}

export const MenuButton = ({
    children: buttonsInMenu
}: MenuButtonProps) => (
    <Container>
        <HamburgerButton />
        <HiddenMenu>{buttonsInMenu}</HiddenMenu>
    </Container>
)
