import styled from "@emotion/styled"

const Container = styled.div`
    label: FooterSection;

    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) =>
        props.theme.backgroundColors.secondary};
`

export const FooterSection = () => (
    <Container>
        Example project, Made with React & Typescript
    </Container>
)
