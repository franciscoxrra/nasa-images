import { Page } from "../components/Page/Page"
import { Link } from "react-router-dom"
import { homePath } from "../util/paths"

export const NotFound = () => (
    <Page>
        <h1>Page Not Found</h1>
        <Link to={homePath}>Go to home page</Link>
    </Page>
)
