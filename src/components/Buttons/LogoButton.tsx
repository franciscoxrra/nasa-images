import { pageName } from "../../util/constants"
import React, { useCallback } from "react"
import styled from "@emotion/styled"
import { LinkButton } from "../common/LinkButton"
import { mainPath } from "../../util/paths"
import { useNavigate } from "react-router-dom"

const Container = styled(LinkButton)`
    label: LogoButton;
`

const Logo = styled.img`
    label: Logo;

    height: 5rem;
`

export const LogoButton = () => {
    const navigate = useNavigate()
    const onLogoClick = useCallback<
        React.MouseEventHandler<HTMLButtonElement>
    >(() => {
        navigate(mainPath)
    }, [navigate])
    return (
        <Container onClick={onLogoClick}>
            <Logo
                src="/logo512_horizontal.png"
                alt={pageName}
            />
        </Container>
    )
}
