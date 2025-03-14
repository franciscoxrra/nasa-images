import { AboutButton } from "../../../buttons/AboutButton"
import { SettingsButton } from "../../../buttons/SettingsButton"
import styled from "@emotion/styled"
import { MenuButton } from "../../../buttons/MenuButton/MenuButton"
import {
    IfLargeScreen,
    IfNotLargeScreen
} from "../../../../util/breakpointFilters"

const Container = styled.div`
    label: HeaderRightSide;
`
const ButtonsContainer = styled.div`
    label: Buttons;

    display: flex;
    column-gap: 0.5rem;
    align-items: center;
`

const Buttons = () => (
    <ButtonsContainer>
        <AboutButton />
        <SettingsButton />
    </ButtonsContainer>
)

export const HeaderRightSide = () => (
    <Container>
        <IfLargeScreen>
            <Buttons />
        </IfLargeScreen>
        <IfNotLargeScreen>
            <MenuButton>
                <Buttons />
            </MenuButton>
        </IfNotLargeScreen>
    </Container>
)
