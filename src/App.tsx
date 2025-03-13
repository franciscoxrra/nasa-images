import { BrowserRouter } from "react-router-dom"
import { RouteMap } from "./pages/RouteMap"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme/theme"
import {
    GlobalStyles,
    iconsClassName
} from "./theme/GlobalStyles"
import ViewportDimensionsProvider from "./contexts/ViewportDimensions"
import PageScrollProvider from "./contexts/PageScroll"
import { ModalSystem } from "./components/ModalSystem/ModalSystem"
import { IconContext } from "react-icons"

const App = () => (
    <ThemeProvider theme={theme}>
        <IconContext.Provider
            value={{ className: iconsClassName }}
        >
            <GlobalStyles />
            <ViewportDimensionsProvider>
                <PageScrollProvider>
                    <BrowserRouter>
                        <ModalSystem>
                            <RouteMap />
                        </ModalSystem>
                    </BrowserRouter>
                </PageScrollProvider>
            </ViewportDimensionsProvider>
        </IconContext.Provider>
    </ThemeProvider>
)

export default App
