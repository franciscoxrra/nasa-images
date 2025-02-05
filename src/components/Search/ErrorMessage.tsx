import styled from "@emotion/styled"

interface ErrorMessageProps {
    error: Error
}

const Container = styled.div`
    label: ErrorMessage;
`

export const ErrorMessage = ({
    error
}: ErrorMessageProps) => (
    <Container>{error.message}</Container>
)
