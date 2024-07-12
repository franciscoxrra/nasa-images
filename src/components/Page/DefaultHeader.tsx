import styled from "@emotion/styled"

const Container = styled.div`
    label: DefaultHeader;

    height: 100%;
    display: grid;
    grid-template-columns: auto max-content;
    align-items: center;
`

export const DefaultHeader = () => (
    <Container>
        <div></div>
        <div>Menu here</div>
    </Container>
)
