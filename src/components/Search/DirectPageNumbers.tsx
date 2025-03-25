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

const CurrentPage = styled.div`
    label: CurrentPage;

    display: grid;
    align-content: center;
    height: ${(props) => props.theme.fonts.sizes.regular};
    aspect-ratio: 1 / 1;
    padding: 0.3rem;
    margin: -0.3rem;
    background-color: ${(props) =>
        props.theme.colors.background.light};
    font-weight: bold;
    border-radius: 50%;
`

const Container = styled.div<{
    filterForSmallBefore: number
    filterForSmallAfter: number
}>`
    label: DirectPageNumbers;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: ${(props) =>
        props.theme.fonts.sizes.regular};

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        gap: 0.5rem;
        ${(props) => css`
            > a:nth-child(
                    -n + ${props.filterForSmallBefore}
                ),
            > a:nth-last-child(
                    ${props.filterForSmallAfter}
                ),
            > a:nth-last-child(${props.filterForSmallAfter})
                ~ a {
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
                pagesBefore < 4
                    ? 0
                    : Math.floor(pagesBefore / 1.6)
            }
            filterForSmallAfter={
                pagesAfter < 4
                    ? 0
                    : Math.floor(pagesAfter / 1.6)
            }
        >
            <SequentialPageNumberLinks
                start={pageWithLimit - pagesBefore}
                totalLinks={pagesBefore}
            />
            {totalPages >= pageWithLimit && (
                <CurrentPage>{pageWithLimit}</CurrentPage>
            )}
            <SequentialPageNumberLinks
                start={pageWithLimit + 1}
                totalLinks={pagesAfter}
            />
        </Container>
    )
}
