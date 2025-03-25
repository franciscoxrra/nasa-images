import { ImageGallery } from "./ImageGallery"
import { ImageProfile } from "./ImageProfile"
import { ResultsPageSwitcher } from "./ResultsPageSwitcher"
import React from "react"
import styled from "@emotion/styled"
import { useSearchParams } from "react-router-dom"
import {
    itemParamName,
    pageParamName
} from "../../util/paths"
import { useSelector } from "react-redux"
import { selectSettings } from "../../reducers/settings/settingsReducer"
import { css } from "@emotion/react"
import { ImagesData } from "../../requesters/searchImages"
import { usePageDetails } from "../Page/Page"

const imageGalleryClassName = "imageGalleryClassName"

const bottomMarginSmallScreen = "0.25rem"

const Container = styled.div<{
    hasItem: boolean
    headerHeight: number
}>`
    label: SearchResultsBody;

    display: grid;
    grid-template-rows: auto max-content;
    gap: 1rem;
    margin-bottom: 1rem;
    min-height: calc(
        100vh - ${(props) => props.headerHeight}px -
            ${bottomMarginSmallScreen}
    );

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        gap: 0.25rem;
        margin-bottom: ${bottomMarginSmallScreen};
    }

    ${(props) =>
        props.hasItem &&
        css`
            @media (width < ${props.theme.breakpoints.width
                    .small}) {
                height: calc(
                    100vh - ${props.headerHeight}px -
                        ${bottomMarginSmallScreen}
                );
                grid-template-rows: auto max-content;
            }
        `}
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
                      overflow: hidden;

                      & > .${imageGalleryClassName} {
                          visibility: hidden;
                          height: 0;
                      }
                  }
              `
            : css`
                  grid-template-columns: auto;
              `}
`

const NavPages = styled.div`
    label: NavPages;

    display: grid;
    row-gap: 0.5rem;
`

interface SearchResultsBodyProps {
    imagesData: ImagesData
}

export const SearchResultsBody = ({
    imagesData
}: SearchResultsBodyProps) => {
    const { headerHeight } = usePageDetails()

    // TODO clean mess below
    // TODO update page title (eg: "Space Images - moon - page 2")
    const [searchParams] = useSearchParams()
    const pageParam = searchParams.get(pageParamName)
    const page =
        (pageParam && /^\d+$/.test(pageParam)
            ? parseInt(pageParam)
            : 1) || 1
    const item = searchParams.get(itemParamName)
    const hasItem = item !== null

    const settings = useSelector(selectSettings)

    const totalNumberOfPages =
        imagesData?.totalResults &&
        Math.ceil(
            imagesData?.totalResults /
                settings.resultsPerPage
        )
    return (
        <Container
            hasItem={hasItem}
            headerHeight={headerHeight}
        >
            {" "}
            {/* TODO Update this component and pagination*/}
            <GalleryContainer hasItem={hasItem}>
                <ImageGallery
                    images={imagesData.images}
                    selectedItem={item}
                    className={imageGalleryClassName}
                />
                {hasItem && <ImageProfile />}
            </GalleryContainer>
            <NavPages>
                <ResultsPageSwitcher
                    page={page}
                    totalResults={imagesData?.totalResults}
                    pageSize={settings.resultsPerPage}
                />
                {totalNumberOfPages &&
                    `Total: ${totalNumberOfPages} pages`}
            </NavPages>
        </Container>
    )
}
