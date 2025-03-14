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
    children: filteredPart
}: BreakpointFilterProps) => {
    const theme = useTheme()
    return (
        <BreakpointFilter
            lowerLimit={theme.breakpoints.width.medium}
            className={className}
        >
            {filteredPart}
        </BreakpointFilter>
    )
}

export const IfNotLargeScreen = ({
    children: filteredPart
}: BreakpointFilterProps) => {
    const theme = useTheme()
    return (
        <BreakpointFilter
            upperLimit={theme.breakpoints.width.medium}
        >
            {filteredPart}
        </BreakpointFilter>
    )
}

export const IfMediumScreen = ({
    className,
    children: filteredPart
}: BreakpointFilterProps) => {
    const theme = useTheme()
    return (
        <BreakpointFilter
            lowerLimit={theme.breakpoints.width.small}
            upperLimit={theme.breakpoints.width.medium}
            className={className}
        >
            {filteredPart}
        </BreakpointFilter>
    )
}

export const IfSmallScreen = ({
    className,
    children: filteredPart
}: BreakpointFilterProps) => {
    const theme = useTheme()
    return (
        <BreakpointFilter
            upperLimit={theme.breakpoints.width.small}
            className={className}
        >
            {filteredPart}
        </BreakpointFilter>
    )
}
