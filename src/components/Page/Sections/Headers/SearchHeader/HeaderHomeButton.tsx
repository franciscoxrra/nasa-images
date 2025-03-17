import React from "react"
import styled from "@emotion/styled"
import {
    IfLargeScreen,
    IfMediumScreen,
    IfSmallScreen
} from "../../../../../util/breakpointFilters"
import { LogoButton } from "../../../../buttons/LogoButton"

const Container = styled.div`
    label: HeaderHomeButton;

    grid-area: HeaderHomeButton;
`

interface HomeButtonProps {
    className?: string
}

export const HeaderHomeButton = ({
    className
}: HomeButtonProps) => (
    <Container className={className}>
        <IfLargeScreen>
            <LogoButton />
        </IfLargeScreen>
        <IfMediumScreen>
            <LogoButton logoOnly={true} />
        </IfMediumScreen>
        <IfSmallScreen>
            <LogoButton />
        </IfSmallScreen>
    </Container>
)
