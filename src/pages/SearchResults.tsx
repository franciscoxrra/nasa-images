import { ErrorMessage } from "../components/Search/ErrorMessage"
import { Loading } from "../components/Search/Loading"
import { ImageGallery } from "../components/Search/ImageGallery"
import { Page } from "../components/Page/Page"
import { useSearchImagesWithHistory } from "../hooks/searchImagesWithHistory"
import {
    useNavigate,
    useParams,
    useLocation
} from "react-router-dom"
import {
    mainPath,
    pageParamName,
    searchExpressionVar
} from "../util/paths"
import React, { useEffect, useMemo } from "react"
import { SearchHeader } from "../components/Page/SearchHeader"
import {
    apiPageCap,
    resultsPerPage
} from "../util/constants"
import { ResultsPageSwitcher } from "../components/Search/ResultsPageSwitcher"

type Params = {
    [searchExpressionVar]: string
}

// TODO make maxPage/apiPageCap and other cases uniform

export interface SearchResultsLocationState {
    timestamp?: number
}

export const SearchResults = () => {
    const navigate = useNavigate()
    const expression =
        useParams<Params>()[searchExpressionVar]

    // TODO clean mess below
    // TODO update page title (eg: "Space Images - moon - page 2")
    const location = useLocation()
    const locationState: SearchResultsLocationState | null =
        location.state
    const searchParams = new URLSearchParams(
        location.search
    )
    const pageParam = searchParams.get(pageParamName)
    const page =
        (pageParam && /^\d+$/.test(pageParam)
            ? parseInt(pageParam)
            : 1) || 1

    const {
        searchForExpression,
        imagesData,
        isLoading,
        error
    } = useSearchImagesWithHistory()

    useEffect(() => {
        if (typeof expression === "string") {
            // This could cause history duplication in dev environment if react StrictMode is on
            searchForExpression(
                expression,
                page,
                resultsPerPage,
                apiPageCap
            )
        } else {
            navigate(mainPath)
        }
    }, [
        navigate,
        expression,
        searchForExpression,
        page,
        locationState?.timestamp
    ])

    const header = useMemo(
        () => <SearchHeader initialValue={expression} />,
        [expression]
    )

    const totalNumberOfPages =
        imagesData?.totalResults &&
        Math.ceil(
            imagesData?.totalResults / imagesData.pageSize
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
                    <ImageGallery
                        images={imagesData.images}
                    />
                    <ResultsPageSwitcher
                        page={page}
                        totalResults={
                            imagesData?.totalResults
                        }
                        pageSize={imagesData.pageSize}
                    />
                    {totalNumberOfPages &&
                        `Total numbers of pages: ${totalNumberOfPages}`}
                </>
            ) : (
                "Type anything in the search field"
            )}
        </Page>
    )
}
