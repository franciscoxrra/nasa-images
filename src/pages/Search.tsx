import { useSearchImages } from "../requesters/searchImages"
import { SearchForm } from "../components/Search/SearchForm"
import { ErrorMessage } from "../components/Search/ErrorMessage"
import { Loading } from "../components/Search/Loading"
import { ImageGallery } from "../components/Search/ImageGallery"
import { useDispatchAddToHistory } from "../reducers/actions/history"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { selectHistory } from "../reducers/history/historyReducer"
import { Page } from "../components/Page/Page"

// TODO reposition useSearchImagesWithReducer

const useSearchImagesWithReducer = () => {
    const { searchForExpression: _searchForExpression, ...response } =
        useSearchImages()
    const dispatchAddToHistory = useDispatchAddToHistory()
    const searchForExpression = useCallback((expression: string) => {
        dispatchAddToHistory(expression)
        _searchForExpression("query", expression)
    }, [])
    return { searchForExpression, ...response }
}

export const Search = () => {
    const { searchForExpression, imagesData, isLoading, error } =
        useSearchImagesWithReducer()
    const { previousSearchExpressions } = useSelector(selectHistory)
    console.log(imagesData?.images)
    console.log(previousSearchExpressions)

    return (
        <Page>
            <h1>NASA Images</h1>
            <SearchForm searchForExpression={searchForExpression} />
            {error && <ErrorMessage error={error} />}
            {isLoading ? (
                <Loading />
            ) : imagesData ? (
                <ImageGallery images={imagesData.images} />
            ) : (
                "Type anything in the search field"
            )}
        </Page>
    )
}
