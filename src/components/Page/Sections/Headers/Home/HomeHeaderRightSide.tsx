import { AboutButton } from "../../../../buttons/AboutButton"
import { SettingsButton } from "../../../../buttons/SettingsButton"
import styled from "@emotion/styled"

const Container = styled.div`
    label: HomeHeaderRightSide;

    display: flex;
    column-gap: 0.5rem;
    align-items: center;
`

export const HomeHeaderRightSide = () => (
    <Container>
        <AboutButton />
        <SettingsButton />
    </Container>
)
