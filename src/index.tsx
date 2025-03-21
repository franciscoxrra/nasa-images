import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { store } from "./reducers/store"

// TODO add header/footer to Page component
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
// TODO Sentry feedback form
// TODO mobile style
// TODO image loader
// TODO search loader
// TODO set search for images only
// TODO entry page (can it be done?)
// TODO look into webvitals and jest
// TODO add Next.js
// TODO re-read/remove comments (public too)
// TODO check usability labels, tabbing, text-to-speech, etc
// TODO e2e testing
// TODO Storybook
// TODO Update readme
// TODO Manage tab navigation, reaching behind modals
// TODO fix search header for small screens
// TODO change font

const root = ReactDOM.createRoot(
    document.getElementById("space-base") as HTMLElement
)

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
