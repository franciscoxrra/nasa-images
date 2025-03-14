import styled from "@emotion/styled"
import { useTheme } from "@emotion/react"
import React from "react"

const BreakpointFilter = styled.div<{
    lowerLimit?: string
    upperLimit?: string
}>`
    label: BreakpointFilter;

    @media (width < ${(props) =>
            props.lowerLimit}) or (width >= ${(props) =>
            props.upperLimit}) {
        display: none;
    }
`

interface BreakpointFilterProps {
    className?: string
    children: React.ReactNode
}

export const IfLargeScreen = ({
    className,
    children
}: BreakpointFilterProps) => {
    const theme = useTheme()
    return (
        <BreakpointFilter
            lowerLimit={theme.breakpoints.width.medium}
            className={className}
        >
            {children}
        </BreakpointFilter>
    )
}

export const IfNotLargeScreen = ({
    children
}: BreakpointFilterProps) => {
    const theme = useTheme()
    return (
        <BreakpointFilter
            upperLimit={theme.breakpoints.width.medium}
        >
            {children}
        </BreakpointFilter>
    )
}

export const IfMediumScreen = ({
    className,
    children
}: BreakpointFilterProps) => {
    const theme = useTheme()
    return (
        <BreakpointFilter
            lowerLimit={theme.breakpoints.width.small}
            upperLimit={theme.breakpoints.width.medium}
            className={className}
        >
            {children}
        </BreakpointFilter>
    )
}

export const IfSmallScreen = ({
    className,
    children
}: BreakpointFilterProps) => {
    const theme = useTheme()
    return (
        <BreakpointFilter
            upperLimit={theme.breakpoints.width.small}
            className={className}
        >
            {children}
        </BreakpointFilter>
    )
}
