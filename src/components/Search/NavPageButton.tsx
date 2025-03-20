import { useSearchParams } from "react-router-dom"
import { ReactNode, useCallback } from "react"
import { pageParamName } from "../../util/paths"
import { LinkButton } from "../buttons/LinkButton"
import { IconButton } from "../buttons/IconButton"

interface NavPageButtonProps {
    page: number
    children?: ReactNode
}

export const NavPageButton = ({
    page,
    children: buttonBody
}: NavPageButtonProps) => {
    const [_, setSearchParams] = useSearchParams()
    const onClick = useCallback(() => {
        setSearchParams((prev) => {
            prev.set(pageParamName, `${page}`)
            return prev
        })
    }, [page, setSearchParams])
    return typeof buttonBody === "string" ||
        typeof buttonBody === "number" ? (
        <LinkButton onClick={onClick}>
            {buttonBody}
        </LinkButton>
    ) : (
        <IconButton onClick={onClick}>
            {buttonBody}
        </IconButton>
    )
}
