import { pageName } from "../../util/constants"
import React from "react"
import styled from "@emotion/styled"
import { LinkButton } from "./LinkButton"
import { homePath } from "../../util/paths"

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
}: LogoButtonProps) => (
    <Container to={homePath} className={className}>
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
