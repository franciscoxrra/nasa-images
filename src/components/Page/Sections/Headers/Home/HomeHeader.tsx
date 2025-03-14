import styled from "@emotion/styled"
import { HeaderRightSide } from "../HeaderRightSide"

const Container = styled.div`
    label: HomeHeader;

    height: 100%;
    display: grid;
    gap: ${(props) =>
        props.theme.layout.spacing.margin.medium};
    margin: ${(props) =>
        props.theme.layout.spacing.margin.medium};
    grid-template-columns: auto max-content;
    align-items: start;
`

export const HomeHeader = () => (
    <Container>
        <div></div>
        <HeaderRightSide />
    </Container>
)
