import { pageName } from "../../util/constants"
import React, { useCallback } from "react"
import styled from "@emotion/styled"
import { LinkButton } from "./LinkButton"
import { homePath } from "../../util/paths"
import { useNavigate } from "react-router-dom"
import {
    IfLargeScreen,
    IfNotLargeScreen
} from "../../util/breakpointFilters"

const Container = styled(LinkButton)`
    label: HomeButton;
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
            <IfLargeScreen>
                <Logo
                    src="/logo512_horizontal.png"
                    alt={pageName}
                />
            </IfLargeScreen>
            <IfNotLargeScreen>
                <Logo src="/logo512.png" alt={pageName} />
            </IfNotLargeScreen>
        </Container>
    )
}
