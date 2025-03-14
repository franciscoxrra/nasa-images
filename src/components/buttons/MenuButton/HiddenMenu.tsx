import React, { useCallback } from "react"
import styled from "@emotion/styled"

const Container = styled.div`
    label: MenuDisplayer;

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

interface HiddenMenuProps {
    children: React.ReactNode
}

export const HiddenMenu = ({
    children: buttonsInMenu
}: HiddenMenuProps) => {
    const onHiddenMenuMouseDown = useCallback<
        React.MouseEventHandler<HTMLDivElement>
    >((event) => {
        event.preventDefault()
    }, [])
    return (
        <Container onMouseDown={onHiddenMenuMouseDown}>
            {buttonsInMenu}
        </Container>
    )
}
