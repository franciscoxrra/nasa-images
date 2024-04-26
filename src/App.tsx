import { BrowserRouter } from "react-router-dom"
import { RouteMap } from "./RouteMap"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme/theme"
import { GlobalStyles } from "./theme/GlobalStyles"

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
            <RouteMap />
        </BrowserRouter>
    </ThemeProvider>
)

export default App
