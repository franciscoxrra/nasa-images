import styled from "@emotion/styled"

export const Header = styled.div`
    label: Header;

    display: grid;
    gap: ${(props) =>
        props.theme.layout.spacing.margin.medium};
    margin: ${(props) =>
        props.theme.layout.spacing.margin.medium};

    @media (max-width: ${(props) =>
            props.theme.breakpoints.width.medium}) {
        gap: ${(props) =>
            props.theme.layout.spacing.margin.small};
        margin: ${(props) =>
            props.theme.layout.spacing.margin.small};
    }

    @media (max-width: ${(props) =>
            props.theme.breakpoints.width.small}) {
        gap: ${(props) =>
            props.theme.layout.spacing.margin.xs};
    }
`
