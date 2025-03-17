import { pageName } from "../../util/constants"
import React, { useCallback } from "react"
import styled from "@emotion/styled"
import { LinkButton } from "./LinkButton"
import { homePath } from "../../util/paths"
import { useNavigate } from "react-router-dom"

const Container = styled(LinkButton)`
    label: LogoButton;
`

const Logo = styled.img`
    label: Logo;

    height: 2.5rem;
`

interface LogoButtonProps {
    logoOnly?: boolean
    className?: string
}

export const LogoButton = ({
    logoOnly = false,
    className
}: LogoButtonProps) => {
    const navigate = useNavigate()
    const onLogoClick = useCallback<
        React.MouseEventHandler<HTMLButtonElement>
    >(() => {
        navigate(homePath)
    }, [navigate])
    return (
        <Container
            onClick={onLogoClick}
            className={className}
        >
            {logoOnly ? (
                <Logo src="/logo512.png" alt={pageName} />
            ) : (
                <Logo
                    src="/logo512_horizontal.png"
                    alt={pageName}
                />
            )}
        </Container>
    )
}
