import { useSearchImages } from "../requesters/searchImages"
import { useAddToHistory } from "../reducers/actions/history"
import { useCallback } from "react"

export const useSearchImagesWithHistory = () => {
    const {
        searchForExpression: _searchForExpression,
        ...response
    } = useSearchImages()
    const addToHistory = useAddToHistory()
    const searchForExpression = useCallback(
        (
            expression: string,
            page: number,
            resultsPerPage: number,
            maxResults: number
        ) => {
            addToHistory(expression, page, new Date())
            _searchForExpression(
                "query",
                expression,
                page,
                resultsPerPage,
                maxResults
            )
        },
        [_searchForExpression, addToHistory]
    )
    return { searchForExpression, ...response }
}
