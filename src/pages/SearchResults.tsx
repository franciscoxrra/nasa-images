import { ErrorMessage } from "../components/search/ErrorMessage"
import { Loading } from "../components/search/Loading"
import { ImageGallery } from "../components/search/ImageGallery"
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
    homePath,
    pageParamName,
    searchExpressionVar
} from "../util/paths"
import React, { useEffect, useMemo } from "react"
import { SearchHeader } from "../components/Page/Sections/Headers/SearchHeader/SearchHeader"
import { ResultsPageSwitcher } from "../components/search/ResultsPageSwitcher"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { ImageProfile } from "../components/search/ImageProfile"
import { useSelector } from "react-redux"
import { selectSettings } from "../reducers/settings/settingsReducer"

type Params = {
    [searchExpressionVar]: string
}

const imageGalleryClassName = "imageGalleryClassName"

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
                          32rem,
                          55%
                      );

                  @media (width < ${props.theme.breakpoints
                          .width.small}) {
                      grid-template-columns: 0 100%;

                      & > .${imageGalleryClassName} {
                          visibility: hidden;
                          height: 100%;
                      }
                  }
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

    const totalNumberOfPages =
        imagesData?.totalResults &&
        Math.ceil(
            imagesData?.totalResults /
                settings.resultsPerPage
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
                            className={
                                imageGalleryClassName
                            }
                        />
                        {hasItem && <ImageProfile />}
                    </GalleryContainer>
                    <NavPages>
                        <ResultsPageSwitcher
                            page={page}
                            totalResults={
                                imagesData?.totalResults
                            }
                            pageSize={
                                settings.resultsPerPage
                            }
                        />
                        {totalNumberOfPages &&
                            `Total: ${totalNumberOfPages} pages`}
                    </NavPages>
                </SearchResultsBody>
            ) : (
                "Type anything in the search field"
            )}
        </Page>
    )
}
