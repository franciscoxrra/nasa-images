import { SearchForm } from "../components/Search/SearchForm"
import { ErrorMessage } from "../components/Search/ErrorMessage"
import { Loading } from "../components/Search/Loading"
import { ImageGallery } from "../components/Search/ImageGallery"
import { Page } from "../components/Page/Page"
import { useSearchImagesWithHistory } from "../hooks/searchImagesWithHistory"
import { useNavigate, useParams } from "react-router-dom"
import { mainPath, searchExpressionVar } from "../util/paths"
import { useEffect } from "react"
import { pageName } from "../util/constants"

type Params = {
    [searchExpressionVar]: string
}

export const SearchResults = () => {
    const navigate = useNavigate()
    const searchExpression = useParams<Params>()[searchExpressionVar]

    const { searchForExpression, imagesData, isLoading, error } =
        useSearchImagesWithHistory()

    useEffect(() => {
        if (typeof searchExpression === "string") {
            searchForExpression(searchExpression)
        } else {
            navigate(mainPath)
        }
    }, [searchExpression])

    return (
        <Page>
            <h1>{pageName}</h1>
            <SearchForm initialValue={searchExpression} />
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
