// Could come from a server

export const smallWidthBreakpoint = 640
export const mediumWidthBreakpoint = 1008

export const theme = {
    colors: {
        standard: {
            primary: "#000000",
            secondary: "#ffffff",
            tertiary: "#aaaaaa",
            icon: "#777777",
            link: "#5555ff"
        },
        background: {
            primary: "#ffffff",
            secondary: "#000000",
            tertiary: "#eeeeee",
            grayout: "#aaaaaaaa",
            light: "#efefef"
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
            height: "2.5rem"
        }
    },
    icons: {
        primary: {
            size: "1.25rem"
        }
    },
    fields: {
        primary: {
            height: "2.5rem",
            padding: "0.5rem",
            borderWidth: "0.1rem",
            borderRadius: "0.3rem"
        }
    },
    layout: {
        spacing: {
            margin: {
                xs: "0.5rem",
                small: "1rem",
                medium: "1.5rem",
                large: "2rem"
            }
        }
    },
    breakpoints: {
        width: {
            small: `${smallWidthBreakpoint}px`,
            medium: `${mediumWidthBreakpoint}px`
        }
    },
    galleries: {
        primary: {
            header: {
                height: "3rem"
            },
            gap: {
                small: "0.2rem",
                medium: "0.7rem"
            },
            image: {
                height: {
                    small: "10rem",
                    medium: "10rem",
                    large: "14rem"
                },
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
