import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { SearchResults } from "./SearchResults"
import {
    aboutPath,
    getSearchPath,
    homePath,
    makeParam,
    searchExpressionVar
} from "../util/paths"
import { NotFound } from "./NotFound"
import { About } from "./About"

export const RouteMap = () => (
    <Routes>
        {/*Home landing page*/}
        <Route path={homePath} element={<Home />} />
        {/*About page*/}
        <Route path={aboutPath} element={<About />} />
        {/*Expression searching page*/}
        <Route
            path={getSearchPath(
                makeParam(searchExpressionVar)
            )}
            element={<SearchResults />}
        />
        {/*In case it is an empty search, redirect to home page*/}
        <Route
            path={getSearchPath("")}
            element={
                <Navigate to={homePath} replace={true} />
            }
        />
        {/*If nothing else, page not found*/}
        <Route path="*" element={<NotFound />} />
    </Routes>
)
