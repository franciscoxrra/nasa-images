import { ErrorMessage } from "../components/search/ErrorMessage"
import { Loading } from "../components/search/Loading"
import { Page } from "../components/Page/Page"
import { useSearchImagesWithHistory } from "../hooks/searchImagesWithHistory"
import {
    useNavigate,
    useParams,
    useLocation,
    useSearchParams
} from "react-router-dom"
import {
    homePath,
    pageParamName,
    searchExpressionVar
} from "../util/paths"
import React, { useEffect, useMemo } from "react"
import { SearchHeader } from "../components/Page/Sections/Headers/SearchHeader/SearchHeader"
import { useSelector } from "react-redux"
import { selectSettings } from "../reducers/settings/settingsReducer"
import { SearchResultsBody } from "../components/search/SearchResultsBody"

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
    const [searchParams] = useSearchParams()
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
    const settings = useSelector(selectSettings)

    useEffect(() => {
        if (typeof expression === "string") {
            // This could cause history duplication in dev environment if react StrictMode is on
            searchForExpression(
                expression,
                page,
                settings.resultsPerPage,
                settings.maxResults
            )
        } else {
            navigate(homePath)
        }
    }, [
        navigate,
        expression,
        searchForExpression,
        page,
        locationState?.timestamp,
        settings
    ])

    const header = useMemo(
        () => <SearchHeader initialValue={expression} />,
        [expression]
    )

    return (
        <Page
            header={header}
            subTitle={`${expression} - Page ${page}`}
        >
            {error && <ErrorMessage error={error} />}
            {isLoading ? (
                <Loading />
            ) : imagesData ? (
                <SearchResultsBody
                    imagesData={imagesData}
                />
            ) : (
                "Type anything in the search field"
            )}
        </Page>
    )
}
