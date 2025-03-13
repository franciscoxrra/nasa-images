import { pageName } from "../../util/constants"
import React, { useCallback } from "react"
import styled from "@emotion/styled"
import { LinkButton } from "./LinkButton"
import { homePath } from "../../util/paths"
import { useNavigate } from "react-router-dom"

const Container = styled(LinkButton)`
    label: HomeButton;

    & > img:nth-child(1) {
        display: none;
    }
    & > img:nth-child(2) {
        display: block;
    }

    @media (min-width: ${(props) =>
            props.theme.breakpoints.width.medium}) {
        & > img:nth-child(1) {
            display: block;
        }
        & > img:nth-child(2) {
            display: none;
        }
    }
`

const Logo = styled.img`
    label: Logo;

    height: 2.5rem;
`

export const HomeButton = () => {
    const navigate = useNavigate()
    const onLogoClick = useCallback<
        React.MouseEventHandler<HTMLButtonElement>
    >(() => {
        navigate(homePath)
    }, [navigate])
    return (
        <Container onClick={onLogoClick}>
            <Logo
                src="/logo512_horizontal.png"
                alt={pageName}
            />
            <Logo src="/logo512.png" alt={pageName} />
        </Container>
    )
}
