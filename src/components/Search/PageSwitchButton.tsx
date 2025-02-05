import { NavLink } from "react-router-dom"
import { ReactNode } from "react"
import { pageParamName } from "../../util/paths"

interface PageSwitchButtonProps {
    page: number
    children?: ReactNode
}

export const PageSwitchButton = ({
    page,
    children
}: PageSwitchButtonProps) => {
    const searchParams = new URLSearchParams(
        location.search
    )
    searchParams.set(pageParamName, `${page}`)
    return (
        <NavLink to={`?${searchParams.toString()}`}>
            {children}
        </NavLink>
    )
}
