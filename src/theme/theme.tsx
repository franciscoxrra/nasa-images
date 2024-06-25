// Could come from a server
export const theme = {
    colors: {
        primary: "#000000",
        secondary: "#ffffff",
        tertiary: "#aaaaaa"
    },
    backgroundColors: {
        primary: "#ffffff",
        secondary: "#000000"
    },
    fonts: {
        remRatio: "10px",
        main: {
            fontFamily: "sans-serif"
        },
        searchEntry: {
            title: {
                size: "1.4rem"
            },
            description: {
                size: "1.6rem"
            }
        }
    },
    layout: {
        header: {
            height: "3rem"
        },
        spacing: {
            margin: "1.5rem"
        }
    },
    gallery: {
        gap: {
            vertical: "1.5rem",
            horizontal: "1rem"
        },
        minWidth: "12rem",
        maxWidth: "36rem",
        image: {
            height: "18rem",
            borderRadius: "1rem",
            backgroundColor: "#dddddd"
        },
        text: {
            height: "4rem",
            padding: "0 0.5rem",
            color: {
                primary: "#000000",
                secondary: "#aaaaaa"
            }
        }
    }
}

type ThemeType = typeof theme

declare module "@emotion/react" {
    export interface Theme extends ThemeType {}
}
