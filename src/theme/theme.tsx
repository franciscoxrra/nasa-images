// Could come from a server

const searchButtonHeightRem = 3
const searchFieldPaddingRem = 0.5
const searchFieldBorderWidthRem = 0.1
const searchFieldLineHeightRem =
    searchButtonHeightRem -
    2 * searchFieldPaddingRem -
    2 * searchFieldBorderWidthRem

export const theme = {
    colors: {
        primary: "#000000",
        secondary: "#ffffff",
        tertiary: "#aaaaaa",
        link: "#5555ff"
    },
    backgroundColors: {
        primary: "#ffffff",
        secondary: "#000000",
        grayout: "#aaaaaaaa"
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
        },
        sizes: {
            regular: "1.4rem",
            big: "1.8rem",
            biggest: "2.4rem"
        }
    },
    search: {
        button: {
            height: `${searchButtonHeightRem}rem`
        },
        field: {
            lineHeight: `${searchFieldLineHeightRem}rem`,
            padding: `${searchFieldPaddingRem}rem`,
            borderWidth: `${searchFieldBorderWidthRem}rem`,
            borderRadius: "0.3rem"
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
        header: {
            height: "3rem"
        },
        gap: {
            vertical: "0.7rem",
            horizontal: "1rem"
        },
        minWidth: "12rem",
        maxWidth: "36rem",
        image: {
            height: "18rem",
            borderRadius: "1rem",
            backgroundColor: "#dddddd"
        },
        entry: {
            padding: "0.3rem",
            borderWidth: "0.2rem"
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
