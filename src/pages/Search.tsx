import { SearchForm } from "../components/Search/SearchForm"
import { ErrorMessage } from "../components/Search/ErrorMessage"
import { Loading } from "../components/Search/Loading"
import { ImageGallery } from "../components/Search/ImageGallery"
import { Page } from "../components/Page/Page"
import { useSearchImagesWithHistory } from "../hooks/searchImagesWithHistory"

export const Search = () => {
    const { searchForExpression, imagesData, isLoading, error } =
        useSearchImagesWithHistory()

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
