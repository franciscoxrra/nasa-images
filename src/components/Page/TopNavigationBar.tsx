import styled from "@emotion/styled"

const Container = styled.div`
    label: TopNavigationBar;

    display: grid;
    grid-template-columns: auto max-content;
`

export const TopNavigationBar = () => (
    <Container>
        <div></div>
        <div>Menu here</div>
    </Container>
)
