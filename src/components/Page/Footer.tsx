import styled from "@emotion/styled"

const Container = styled.div`
    label: Footer;

    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.backgroundColors.secondary};
`

export const Footer = () => (
    <Container>Example project, Made with React & Typescript</Container>
)
