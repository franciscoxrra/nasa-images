import styled from "@emotion/styled"

export const IconButton = styled.button`
    label: IconButton;

    aspect-ratio: 1 / 1;
    display: grid;
    align-content: center;
    background: none;
    border: none;
    padding: 0.5rem;
    font: inherit;
    font-size: ${(props) => props.theme.fonts.sizes.big};
    cursor: pointer;
    outline: inherit;
    border-radius: 50%;

    &:hover {
        text-decoration: underline;
        background-color: ${(props) =>
            props.theme.colors.background.light};
    }
`
