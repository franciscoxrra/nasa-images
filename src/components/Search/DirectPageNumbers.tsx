import { PageSwitchButton } from "./PageSwitchButton"
import styled from "@emotion/styled"

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
                <PageSwitchButton page={page} key={page}>
                    {page}
                </PageSwitchButton>
            )
        })}
    </>
)

const Container = styled.div`
    label: DirectPageNumbers;

    display: flex;
    justify-content: center;
    gap: 1rem;
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
        <Container>
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
