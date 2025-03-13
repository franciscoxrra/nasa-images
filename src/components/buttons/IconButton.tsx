import styled from "@emotion/styled"

export const IconButton = styled.button`
    label: IconButton;

    display: grid;
    background: none;
    border: none;
    padding: 0.5rem;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    border-radius: 50%;

    &:hover {
        text-decoration: underline;
        background-color: ${(props) =>
            props.theme.colors.background.light};
    }
`
