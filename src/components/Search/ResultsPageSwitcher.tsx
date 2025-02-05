import { PageSwitchButton } from "./PageSwitchButton"
import styled from "@emotion/styled"
import { DirectPageNumbers } from "./DirectPageNumbers"

const Container = styled.div`
    label: ResultsPageSwitcher;

    display: flex;
    justify-content: center;
    gap: 3rem;
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
                <PageSwitchButton page={page - 1}>
                    previous
                </PageSwitchButton>
            )}
            <DirectPageNumbers
                page={page}
                totalPages={totalPages}
            />
            {page < totalPages && (
                <PageSwitchButton page={page + 1}>
                    next
                </PageSwitchButton>
            )}
        </Container>
    )
}
