import { ReactNode, useCallback, useMemo } from "react"
import {
    itemParamName,
    pageParamName
} from "../../util/paths"
import { LinkButton } from "../buttons/LinkButton"
import styled from "@emotion/styled"

interface NavPageButtonProps {
    page: number
    children?: ReactNode
}

const PageButton = styled(LinkButton)`
    label: PageButton;

    display: grid;
    aspect-ratio: 1 / 1;
    height: ${(props) => props.theme.fonts.sizes.regular};
    align-items: center;
    align-content: center;
    outline: inherit;

    &:hover {
        background: ${(props) =>
            props.theme.colors.background.tertiary};
        border-radius: 50%;
    }
`

export const NavPageButton = ({
    page,
    children: buttonBody
}: NavPageButtonProps) => {
    const linkToString = useMemo(() => {
        const searchParams = new URLSearchParams(
            location.search
        )
        searchParams.set(pageParamName, `${page}`)
        searchParams.delete(itemParamName)
        return `?${searchParams.toString()}`
    }, [page])

    const onClick = useCallback(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return typeof buttonBody === "string" ||
        typeof buttonBody === "number" ? (
        <PageButton to={linkToString} onClick={onClick}>
            {buttonBody}
        </PageButton>
    ) : (
        <LinkButton to={linkToString} onClick={onClick}>
            {buttonBody}
        </LinkButton>
    )
}
