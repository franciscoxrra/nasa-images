import styled from "@emotion/styled"

const Container = styled.div`
    label: FooterSection;

    color: ${(props) =>
        props.theme.colors.standard.secondary};
    background-color: ${(props) =>
        props.theme.colors.background.secondary};
`

interface FooterSectionProps {
    className?: string
}

export const FooterSection = ({
    className
}: FooterSectionProps) => (
    <Container className={className}>
        Portfolio project, Made with React & TypeScript
    </Container>
)
