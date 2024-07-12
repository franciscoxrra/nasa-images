import { BrowserRouter } from "react-router-dom"
import { RouteMap } from "./RouteMap"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme/theme"
import { GlobalStyles } from "./theme/GlobalStyles"
import ViewportDimensionsProvider from "./contexts/ViewportDimensions"

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ViewportDimensionsProvider>
            <BrowserRouter>
                <RouteMap />
            </BrowserRouter>
        </ViewportDimensionsProvider>
    </ThemeProvider>
)

export default App
