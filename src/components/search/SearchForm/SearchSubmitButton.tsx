import { FaMagnifyingGlass } from "react-icons/fa6"
import styled from "@emotion/styled"

const Container = styled.button`
    label: SearchSubmitButton;

    border-radius: ${(props) =>
        `0 ${props.theme.fields.primary.borderRadius} 
        ${props.theme.fields.primary.borderRadius} 0`};
    border-width: ${(props) =>
        `${props.theme.fields.primary.borderWidth} ${props.theme.fields.primary.borderWidth} 
            ${props.theme.fields.primary.borderWidth} 0`};
`

export const SearchSubmitButton = () => (
    <Container type="submit">
        <FaMagnifyingGlass />
    </Container>
)
