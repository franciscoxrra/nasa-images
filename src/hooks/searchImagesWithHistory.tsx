import { useSearchImages } from "../requesters/searchImages"
import { useAddToHistory } from "../reducers/actions/history"
import { useCallback } from "react"
import { resultsPerPage } from "../util/constants"

export const useSearchImagesWithHistory = () => {
    const { searchForExpression: _searchForExpression, ...response } =
        useSearchImages()
    const addToHistory = useAddToHistory()
    const searchForExpression = useCallback(
        (
            expression: string,
            page: number = 1,
            pageSize: number = resultsPerPage
        ) => {
            addToHistory(expression, new Date())
            _searchForExpression("query", expression, page, pageSize)
        },
        [_searchForExpression, addToHistory]
    )
    return { searchForExpression, ...response }
}
