import { Page } from "../components/Page/Page"
import { Link } from "react-router-dom"
import { mainPath } from "../util/paths"

export const NotFound = () => (
    <Page>
        <h1>Page Not Found</h1>
        <Link to={mainPath}>Go to main page</Link>
    </Page>
)
