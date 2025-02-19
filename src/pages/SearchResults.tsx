import { ErrorMessage } from "../components/Search/ErrorMessage"
import { Loading } from "../components/Search/Loading"
import { ImageGallery } from "../components/Search/ImageGallery"
import { Page } from "../components/Page/Page"
import { useSearchImagesWithHistory } from "../hooks/searchImagesWithHistory"
import {
    useNavigate,
    useParams,
    useLocation,
    useSearchParams
} from "react-router-dom"
import {
    itemParamName,
    mainPath,
    pageParamName,
    searchExpressionVar
} from "../util/paths"
import React, { useEffect, useMemo } from "react"
import { SearchHeader } from "../components/Page/Sections/SearchHeader"
import {
    apiPageCap,
    resultsPerPage
} from "../util/constants"
import { ResultsPageSwitcher } from "../components/Search/ResultsPageSwitcher"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { ImageProfile } from "../components/Search/ImageProfile"

type Params = {
    [searchExpressionVar]: string
}

const SearchResultsBody = styled.div`
    label: SearchResultsBody;

    display: grid;
    gap: 1rem;
    margin-bottom: 1rem;
`

const GalleryContainer = styled.div<{
    hasItem: boolean
}>`
    label: GalleryContainer;

    display: grid;
    ${(props) =>
        props.hasItem
            ? css`
                  grid-template-columns: auto minmax(
                          55%,
                          max-content
                      );
              `
            : css`
                  grid-template-columns: auto;
              `}
`

const NavPages = styled.div`
    label: NavPages;
`

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
    const item = searchParams.get(itemParamName)
    const hasItem = item !== null

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
                <SearchResultsBody>
                    {" "}
                    {/* TODO Update this component and pagination*/}
                    <GalleryContainer hasItem={hasItem}>
                        <ImageGallery
                            images={imagesData.images}
                            selectedItem={item}
                        />
                        {hasItem && <ImageProfile />}
                    </GalleryContainer>
                    <NavPages>
                        <ResultsPageSwitcher
                            page={page}
                            totalResults={
                                imagesData?.totalResults
                            }
                            pageSize={imagesData.pageSize}
                        />
                        {totalNumberOfPages &&
                            `Total numbers of pages: ${totalNumberOfPages}`}
                    </NavPages>
                </SearchResultsBody>
            ) : (
                "Type anything in the search field"
            )}
        </Page>
    )
}
