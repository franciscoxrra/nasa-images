import { Route, Routes } from "react-router-dom"
import { Search } from "./pages/Search"
import { mainPath } from "./util/paths"

export const RouteMap = () => (
    <Routes>
        <Route path={mainPath} element={<Search />} />
    </Routes>
)
