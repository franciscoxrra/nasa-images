import styled from "@emotion/styled"

export const LinkButton = styled.button`
    label: LinkButton;

    background: none;
    color: ${(props) => props.theme.colors.standard.link};
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    &:hover {
        text-decoration: underline;
    }
`
