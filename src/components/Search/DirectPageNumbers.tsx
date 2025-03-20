import { NavPageButton } from "./NavPageButton"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const totalDirectPageNumbers = 9
const defaultDirectPageNumbersBefore = 4
const defaultDirectPageNumbersAfter =
    totalDirectPageNumbers - defaultDirectPageNumbersBefore

interface SequentialPageNumberLinks {
    start: number
    totalLinks: number
}

const SequentialPageNumberLinks = ({
    start,
    totalLinks
}: SequentialPageNumberLinks) => (
    <>
        {[...Array(totalLinks)].map((_, index) => {
            const page = start + index
            return (
                <NavPageButton page={page} key={page}>
                    {page}
                </NavPageButton>
            )
        })}
    </>
)

const Container = styled.div<{
    filterForSmallBefore: number
    filterForSmallAfter: number
}>`
    label: DirectPageNumbers;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        gap: 0.75rem;
        ${(props) => css`
            > button:nth-child(
                    -n + ${props.filterForSmallBefore}
                ),
            > button:nth-last-child(
                    ${props.filterForSmallAfter}
                ),
            > button:nth-last-child(
                    ${props.filterForSmallAfter}
                )
                ~ button {
                display: none;
            }
        `}
    }
`

interface PageNumbersProps {
    page: number
    totalPages: number
}

export const DirectPageNumbers = ({
    page,
    totalPages
}: PageNumbersProps) => {
    const pageWithLimit =
        page > totalPages ? totalPages + 1 : page

    const pagesAvailableBefore = pageWithLimit - 1
    const pagesAvailableAfter = totalPages - pageWithLimit
    const pagesAvailable =
        pagesAvailableBefore + pagesAvailableAfter
    const shouldIncludeAll =
        pagesAvailable < totalDirectPageNumbers
    const pagesBefore =
        shouldIncludeAll ||
        pagesAvailableBefore <=
            defaultDirectPageNumbersBefore
            ? pagesAvailableBefore
            : pagesAvailableAfter <
                defaultDirectPageNumbersAfter
              ? defaultDirectPageNumbersBefore +
                defaultDirectPageNumbersAfter -
                pagesAvailableAfter
              : defaultDirectPageNumbersBefore

    const _pagesAfter = Math.min(
        pagesAvailableAfter,
        totalDirectPageNumbers - pagesBefore
    )
    const pagesAfter = _pagesAfter < 0 ? 0 : _pagesAfter

    return (
        <Container
            filterForSmallBefore={
                pagesBefore < 3
                    ? 0
                    : Math.floor(pagesBefore / 1.5)
            }
            filterForSmallAfter={
                pagesAfter < 3
                    ? 0
                    : Math.floor(pagesAfter / 1.5)
            }
        >
            <SequentialPageNumberLinks
                start={pageWithLimit - pagesBefore}
                totalLinks={pagesBefore}
            />
            {totalPages >= pageWithLimit && pageWithLimit}
            <SequentialPageNumberLinks
                start={pageWithLimit + 1}
                totalLinks={pagesAfter}
            />
        </Container>
    )
}
