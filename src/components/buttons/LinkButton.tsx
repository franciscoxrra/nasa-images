import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const LinkButton = styled(Link)`
    label: LinkButton;

    display: grid;
    background: none;
    color: ${(props) => props.theme.colors.standard.link};
    text-decoration: underline;
    padding: 0.2rem;
    border: transparent solid 0.1rem;
    border-radius: 25%;
    margin: -0.3rem;
    font: inherit;
    cursor: pointer;

    &:focus {
        padding: 0.2rem;
        border: #000000 solid 0.1rem;
    }
`
