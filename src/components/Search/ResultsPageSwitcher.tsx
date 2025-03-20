import { NavPageButton } from "./NavPageButton"
import styled from "@emotion/styled"
import { DirectPageNumbers } from "./DirectPageNumbers"
import {
    FaCircleArrowLeft,
    FaCircleArrowRight
} from "react-icons/fa6"

const Container = styled.div`
    label: ResultsPageSwitcher;

    display: flex;
    justify-content: center;
    gap: 1rem;

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        gap: 0.25rem;
    }
`

interface ResultsPageSwitcherProps {
    page: number
    totalResults?: number
    pageSize: number
}

export const ResultsPageSwitcher = ({
    page,
    totalResults,
    pageSize
}: ResultsPageSwitcherProps) => {
    const totalPages =
        totalResults && Math.ceil(totalResults / pageSize)

    if (!totalPages) {
        return <></>
    }

    return (
        <Container>
            {page > 1 && (
                <NavPageButton page={page - 1}>
                    <FaCircleArrowLeft />
                </NavPageButton>
            )}
            <DirectPageNumbers
                page={page}
                totalPages={totalPages}
            />
            {page < totalPages && (
                <NavPageButton page={page + 1}>
                    <FaCircleArrowRight />
                </NavPageButton>
            )}
        </Container>
    )
}
