import { AboutButton } from "../../Buttons/AboutButton"
import { SettingsButton } from "../../Buttons/SettingsButton"
import styled from "@emotion/styled"

const RightSide = styled.div`
    label: RightSide;

    display: flex;
    column-gap: 1rem;
`

export const DefaultHeaderRightSide = () => (
    <RightSide>
        <AboutButton />
        <SettingsButton />
    </RightSide>
)
