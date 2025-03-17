import styled from "@emotion/styled"
import { HeaderRightSide } from "../HeaderRightSide"
import { Header } from "../Header"

const Container = styled(Header)`
    label: HomeHeader;

    height: 100%;
    grid-template-columns: auto max-content;
    align-items: start;
`

export const HomeHeader = () => (
    <Container>
        <div></div>
        <HeaderRightSide />
    </Container>
)
