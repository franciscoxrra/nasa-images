import { BrowserRouter } from "react-router-dom"
import { RouteMap } from "./pages/RouteMap"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme/theme"
import { GlobalStyles } from "./theme/GlobalStyles"
import ViewportDimensionsProvider from "./contexts/ViewportDimensions"
import PageScrollProvider from "./contexts/PageScroll"
import { ModalSystem } from "./components/ModalSystem/ModalSystem"

const App = () => (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
)

export default App
