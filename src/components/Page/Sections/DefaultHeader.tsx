import styled from "@emotion/styled"
import { AboutButton } from "../../Buttons/About"
import { SettingsButton } from "../../Buttons/Settings"

const Container = styled.div`
    label: DefaultHeader;

    height: 100%;
    display: grid;
    gap: ${(props) => props.theme.layout.spacing.margin};
    margin: ${(props) => props.theme.layout.spacing.margin};
    grid-template-columns: auto max-content;
    align-items: left;
`

const RightSide = styled.div`
    label: RightSide;

    display: flex;
    column-gap: 1rem;
`

export const DefaultHeader = () => (
    <Container>
        <div></div>
        <RightSide>
            <AboutButton />
            <SettingsButton />
        </RightSide>
    </Container>
)
