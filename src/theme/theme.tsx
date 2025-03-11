// Could come from a server

const searchButtonHeightRem = 2.5
const searchFieldPaddingRem = 0.5
const searchFieldBorderWidthRem = 0.1
const searchFieldLineHeightRem =
    searchButtonHeightRem -
    2 * searchFieldPaddingRem -
    2 * searchFieldBorderWidthRem

export const theme = {
    colors: {
        standard: {
            primary: "#000000",
            secondary: "#ffffff",
            tertiary: "#aaaaaa",
            link: "#5555ff"
        },
        background: {
            primary: "#ffffff",
            secondary: "#000000",
            tertiary: "#eeeeee",
            grayout: "#aaaaaaaa"
        }
    },
    fonts: {
        primary: {
            fontFamily: "sans-serif"
        },
        sizes: {
            regular: "1rem",
            big: "1.2rem",
            biggest: "2rem"
        }
    },
    buttons: {
        primary: {
            padding: "0 1.5rem",
            height: `${searchButtonHeightRem}rem`
        }
    },
    fields: {
        primary: {
            lineHeight: `${searchFieldLineHeightRem}rem`,
            padding: `${searchFieldPaddingRem}rem`,
            borderWidth: `${searchFieldBorderWidthRem}rem`,
            borderRadius: "0.3rem"
        }
    },
    layout: {
        spacing: {
            margin: "1.5rem"
        }
    },
    galleries: {
        primary: {
            header: {
                height: "3rem"
            },
            gap: {
                vertical: "0.7rem",
                horizontal: "1rem"
            },
            image: {
                height: "18rem",
                borderRadius: "1rem"
            },
            entry: {
                minWidth: "12rem",
                maxWidth: "36rem",
                padding: "0.3rem",
                borderWidth: "0.2rem"
            },
            textSection: {
                height: "3rem",
                padding: "0 0.5rem"
            }
        }
    }
}

type ThemeType = typeof theme

declare module "@emotion/react" {
    export interface Theme extends ThemeType {}
}
