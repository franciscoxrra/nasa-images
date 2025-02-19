import { useSearchParams } from "react-router-dom"
import { ReactNode, useCallback } from "react"
import { pageParamName } from "../../util/paths"
import styled from "@emotion/styled"

const Container = styled.button`
    label: NavPageButton;

    background: none;
    color: ${(props) => props.theme.colors.link};
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    &:hover {
        text-decoration: underline;
    }
`

interface NavPageButtonProps {
    page: number
    children?: ReactNode
}

export const NavPageButton = ({
    page,
    children
}: NavPageButtonProps) => {
    const [_, setSearchParams] = useSearchParams()
    const onClick = useCallback(() => {
        setSearchParams((prev) => {
            prev.set(pageParamName, `${page}`)
            return prev
        })
    }, [page, setSearchParams])
    return (
        <Container onClick={onClick}>{children}</Container>
    )
}
