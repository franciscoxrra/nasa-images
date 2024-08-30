import { ErrorMessage } from "../components/Search/ErrorMessage"
import { Loading } from "../components/Search/Loading"
import { ImageGallery } from "../components/Search/ImageGallery"
import { Page } from "../components/Page/Page"
import { useSearchImagesWithHistory } from "../hooks/searchImagesWithHistory"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { mainPath, searchExpressionVar } from "../util/paths"
import React, { useEffect, useMemo } from "react"
import { SearchHeader } from "../components/Page/SearchHeader"
import { nasaApiPageCap, resultsPerPage } from "../util/constants"

type Params = {
    [searchExpressionVar]: string
}

export const SearchResults = () => {
    const navigate = useNavigate()
    const expression = useParams<Params>()[searchExpressionVar]

    // TODO clean mess below
    // TODO update page title (eg: "Space Images - moon - page 2")
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const pageParam = searchParams.get("page")
    const page = pageParam && /^\d+$/.test(pageParam) ? parseInt(pageParam) : 1

    const { searchForExpression, imagesData, isLoading, error } =
        useSearchImagesWithHistory()

    useEffect(() => {
        if (typeof expression === "string") {
            // This could cause history duplication in dev environment if react StrictMode is on
            searchForExpression(expression, page, resultsPerPage)
        } else {
            navigate(mainPath)
        }
    }, [navigate, expression, searchForExpression, page])

    const header = useMemo(
        () => <SearchHeader initialValue={expression} />,
        [expression]
    )

    return (
        <Page header={header}>
            {error && <ErrorMessage error={error} />}
            {isLoading ? (
                <Loading />
            ) : imagesData ? (
                <>
                    {" "}
                    {/* TODO Update this component and pagination*/}
                    <ImageGallery images={imagesData.images} />
                    {imagesData?.totalResults &&
                        Math.min(
                            Math.ceil(
                                imagesData?.totalResults / imagesData?.pageSize
                            ),
                            nasaApiPageCap
                        )}
                </>
            ) : (
                "Type anything in the search field"
            )}
        </Page>
    )
}
