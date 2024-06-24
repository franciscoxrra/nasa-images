import { SearchForm } from "../components/Search/SearchForm"
import { Page } from "../components/Page/Page"
import { pageName } from "../util/constants"

export const Main = () => (
    <Page>
        <h1>{pageName}</h1>
        <SearchForm />
    </Page>
)
