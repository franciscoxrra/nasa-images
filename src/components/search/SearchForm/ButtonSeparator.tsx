import styled from "@emotion/styled"

const Container = styled.div`
    label: ButtonSeparator;

    height: calc(
        ${(props) => props.theme.fields.primary.height} *
            0.6
    );
    width: 0;
    margin-left: -1px;
    border-left: ${(props) =>
            props.theme.colors.standard.tertiary}
        solid 1px;
    z-index: 1;
`

export const ButtonSeparator = () => <Container />
