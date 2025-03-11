import {
    Global,
    css,
    Theme,
    useTheme
} from "@emotion/react"

const makeGlobalStyles = (theme: Theme) => css`
    html {
        background-color: ${theme.colors.background
            .primary};
    }

    body {
        margin: 0;
        font-family: ${theme.fonts.primary.fontFamily};
        font-size: ${theme.fonts.sizes.regular};
        text-align: center;
        color: ${theme.colors.standard.primary};
    }

    input {
        font-size: ${theme.fonts.sizes.regular};
    }

    button {
        font-size: ${theme.fonts.sizes.regular};
        padding: ${theme.buttons.primary.padding};
    }
`

export const GlobalStyles = () => {
    const theme = useTheme()
    return <Global styles={makeGlobalStyles(theme)} />
}
