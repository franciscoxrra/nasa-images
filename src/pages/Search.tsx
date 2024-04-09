import { useSearchImages } from "../requesters/searchImages"
import { SearchForm } from "../components/SearchForm"
import { ErrorMessage } from "../components/ErrorMessage"
import { Loading } from "../components/Loading"
import { ImageGallery } from "../components/ImageGallery"

export const Search = () => {
    const { searchForExpression, images, isLoading, error } = useSearchImages()

    return (
        <div className="App">
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
        </div>
    )
}
