import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const LinkButton = styled(Link)`
    label: LinkButton;

    display: grid;
    background: none;
    color: ${(props) => props.theme.colors.standard.link};
    text-decoration: underline;
    border: none;
    padding: 0.3rem;
    margin: -0.3rem;
    font: inherit;
    cursor: pointer;
`
