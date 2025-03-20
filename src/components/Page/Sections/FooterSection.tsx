import styled from "@emotion/styled"

const Container = styled.div`
    label: FooterSection;

    color: ${(props) =>
        props.theme.colors.standard.secondary};
    background-color: ${(props) =>
        props.theme.colors.background.secondary};
`

export const FooterSection = () => (
    <Container>
        Portfolio project, Made with React & Typescript
    </Container>
)
