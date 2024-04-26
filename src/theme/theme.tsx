// Could come from a server
export const theme = {
    colors: {
        primary: "#000000",
        secondary: "#ffffff"
    },
    backgroundColors: {
        primary: "#ffffff",
        secondary: "#000000"
    },
    fonts: {
        main: {
            fontFamily: "sans-serif"
        }
    },
    page: {
        header: {
            height: "3rem"
        }
    }
}

type ThemeType = typeof theme

declare module "@emotion/react" {
    export interface Theme extends ThemeType {}
}
