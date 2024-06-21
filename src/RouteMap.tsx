import { Navigate, Route, Routes } from "react-router-dom"
import { Search } from "./pages/Search"
import {
    getSearchPath,
    mainPath,
    makeParam,
    searchExpressionVar
} from "./util/paths"
import { NotFound } from "./pages/NotFound"

export const RouteMap = () => (
    <Routes>
        {/*Main landing page*/}
        <Route path={mainPath} element={<Search />} />
        {/*Expression searching page*/}
        <Route
            path={getSearchPath(makeParam(searchExpressionVar))}
            element={<Search />}
        />
        {/*In case it is an empty search, redirect to main page*/}
        <Route
            path={getSearchPath("")}
            element={<Navigate to={mainPath} replace={true} />}
        />
        {/*If nothing else, page not found*/}
        <Route path="*" element={<NotFound />} />
    </Routes>
)
