import { useSearchImages } from "../requesters/searchImages"
import { SearchForm } from "../components/SearchForm"
import { ErrorMessage } from "../components/ErrorMessage"
import { Loading } from "../components/Loading"
import { ImageGallery } from "../components/ImageGallery"
import { useDispatchAddToHistory } from "../reducers/actions/history"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { selectHistory } from "../reducers/history/historyReducer"
import { Page } from "./Page"

const useSearchImagesWithReducer = () => {
    const { searchForExpression: _searchForExpression, ...response } =
        useSearchImages()
    const dispatchAddToHistory = useDispatchAddToHistory()
    const searchForExpression = useCallback((expression: string) => {
        dispatchAddToHistory(expression)
        _searchForExpression(expression)
    }, [])
    return { searchForExpression, ...response }
}

export const Search = () => {
    const { searchForExpression, images, isLoading, error } =
        useSearchImagesWithReducer()
    const { previousSearchExpressions } = useSelector(selectHistory)
    console.log(previousSearchExpressions)

    return (
        <Page>
            <h1>NASA Images</h1>
            <SearchForm searchForExpression={searchForExpression} />
            {error && <ErrorMessage error={error} />}
            {isLoading ? (
                <Loading />
            ) : images ? (
                <ImageGallery images={images} />
            ) : (
                "Type anything in the search field"
            )}
        </Page>
    )
}
