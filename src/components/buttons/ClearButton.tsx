import styled from "@emotion/styled"
import { IconButton } from "./IconButton"
import { FaDeleteLeft } from "react-icons/fa6"
import { iconsClassName } from "../../theme/GlobalStyles"
import { MouseEventHandler } from "react"

const Container = styled.div`
    label: ClearButton;

    display: grid;
    align-content: center;

    height: ${(props) => props.theme.fields.primary.height};
    width: ${(props) => props.theme.fields.primary.height};

    box-sizing: border-box;
    border-width: ${(props) =>
        `${props.theme.fields.primary.borderWidth} 0 
                ${props.theme.fields.primary.borderWidth} 0`};
    border-color: ${(props) =>
        props.theme.colors.standard.primary};
    border-style: solid;

    & > button {
        height: 100%;
        width: 100%;

        &:hover {
            background-color: #fff3f3;
        }
    }

    & .${iconsClassName} {
        color: #990000;
    }
`

interface ClearButtonProps {
    isDisabled?: boolean
    onClearClick: MouseEventHandler<HTMLButtonElement>
}

export const ClearButton = ({
    isDisabled,
    onClearClick
}: ClearButtonProps) => (
    <Container>
        {!isDisabled && (
            <IconButton onClick={onClearClick}>
                <FaDeleteLeft />
            </IconButton>
        )}
    </Container>
)
