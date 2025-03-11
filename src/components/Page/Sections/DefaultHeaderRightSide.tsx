import { AboutButton } from "../../Buttons/AboutButton"
import { SettingsButton } from "../../Buttons/SettingsButton"
import styled from "@emotion/styled"

const Container = styled.div`
    label: DefaultHeaderRightSide;

    display: flex;
    column-gap: 1rem;
    align-items: center;
`

export const DefaultHeaderRightSide = () => (
    <Container>
        <AboutButton />
        <SettingsButton />
    </Container>
)
