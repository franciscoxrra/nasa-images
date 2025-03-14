import React, { useCallback } from "react"
import { IconButton } from "./IconButton"
import { FaBars } from "react-icons/fa6"
import styled from "@emotion/styled"

// TODO split this file into several

const Container = styled.div`
    label: MenuButton;

    position: relative;

    &:focus-within > div {
        display: flex;
    }
`

const HiddenMenu = styled.div`
    label: HiddenMenu;

    position: absolute;
    right: 0;
    margin-top: 0.2rem;
    padding: 0.2rem;
    display: none;
    background-color: ${(props) =>
        props.theme.colors.background.primary};
    border: 0.15rem solid
        ${(props) => props.theme.colors.standard.icon};
    border-radius: 0.5rem;
`

interface MenuButtonProps {
    children: React.ReactNode
}

export const MenuButton = ({
    children
}: MenuButtonProps) => {
    const [isMenuOpen, setIsMenuOpen] =
        React.useState(false)

    const onHamburgerClick = useCallback<
        React.MouseEventHandler<HTMLButtonElement>
    >(
        (event) => {
            if (isMenuOpen) {
                event.currentTarget.blur()
            }
            setIsMenuOpen(!isMenuOpen)
        },
        [isMenuOpen]
    )

    const onHamburgerBlur = useCallback<
        React.FocusEventHandler<HTMLButtonElement>
    >(() => {
        setIsMenuOpen(false)
    }, [])

    const onHiddenMenuMouseDown = useCallback<
        React.MouseEventHandler<HTMLDivElement>
    >((event) => {
        event.preventDefault()
    }, [])

    return (
        <Container>
            <IconButton
                onClick={onHamburgerClick}
                onBlur={onHamburgerBlur}
            >
                <FaBars />
            </IconButton>
            <HiddenMenu onMouseDown={onHiddenMenuMouseDown}>
                {children}
            </HiddenMenu>
        </Container>
    )
}
