import { Global, css, Theme, useTheme } from "@emotion/react"

const makeGlobalStyles = (theme: Theme) => css`
    body {
        margin: 0;
        font-family: ${theme.fonts.main.fontFamily};
        text-align: center;
        color: ${theme.colors.primary};
        background-color: ${theme.backgroundColors.primary};
    }
`

export const GlobalStyles = () => {
    const theme = useTheme()
    return <Global styles={makeGlobalStyles(theme)} />
}
