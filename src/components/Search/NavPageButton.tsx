import { useSearchParams } from "react-router-dom"
import { ReactNode, useCallback } from "react"
import { pageParamName } from "../../util/paths"
import { LinkButton } from "../buttons/LinkButton"

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
    return (
        <LinkButton onClick={onClick}>
            {buttonBody}
        </LinkButton>
    )
}
