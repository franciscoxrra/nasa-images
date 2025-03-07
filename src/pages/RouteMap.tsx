import { Navigate, Route, Routes } from "react-router-dom"
import { Main } from "./Main"
import { SearchResults } from "./SearchResults"
import {
    aboutPath,
    getSearchPath,
    mainPath,
    makeParam,
    searchExpressionVar
} from "../util/paths"
import { NotFound } from "./NotFound"
import { About } from "./About"

export const RouteMap = () => (
    <Routes>
        {/*Main landing page*/}
        <Route path={mainPath} element={<Main />} />
        {/*About page*/}
        <Route path={aboutPath} element={<About />} />
        {/*Expression searching page*/}
        <Route
            path={getSearchPath(
                makeParam(searchExpressionVar)
            )}
            element={<SearchResults />}
        />
        {/*In case it is an empty search, redirect to main page*/}
        <Route
            path={getSearchPath("")}
            element={
                <Navigate to={mainPath} replace={true} />
            }
        />
        {/*If nothing else, page not found*/}
        <Route path="*" element={<NotFound />} />
    </Routes>
)
