import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { store } from "./reducers/store"

// TODO add saver and analytics to redux
// TODO (redux) look into enhancers,
// TODO add router
// TODO modal system
// TODO pagination
// TODO grid layout
// TODO Helmet
// TODO GlobalStyles, ThemeProvider
// TODO ErrorBoundary, ErrorFatal
// TODO Sentry setup

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
