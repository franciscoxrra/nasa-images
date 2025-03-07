import styled from "@emotion/styled"
import { DefaultHeaderRightSide } from "./DefaultHeaderRightSide"

const Container = styled.div`
    label: DefaultHeader;

    height: 100%;
    display: grid;
    gap: ${(props) => props.theme.layout.spacing.margin};
    margin: ${(props) => props.theme.layout.spacing.margin};
    grid-template-columns: auto max-content;
    align-items: start;
`

export const DefaultHeader = () => (
    <Container>
        <div></div>
        <DefaultHeaderRightSide />
    </Container>
)
