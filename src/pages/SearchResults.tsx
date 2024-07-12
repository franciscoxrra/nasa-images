import { SearchForm } from "../components/Search/SearchForm"
import { ErrorMessage } from "../components/Search/ErrorMessage"
import { Loading } from "../components/Search/Loading"
import { ImageGallery } from "../components/Search/ImageGallery"
import { Page } from "../components/Page/Page"
import { useSearchImagesWithHistory } from "../hooks/searchImagesWithHistory"
import { useNavigate, useParams } from "react-router-dom"
import { mainPath, searchExpressionVar } from "../util/paths"
import React, { useEffect } from "react"
import { pageName } from "../util/constants"
import styled from "@emotion/styled"

// TODO add css to theme

const Logo = styled.img`
    label: Logo;

    height: 5rem;
`

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
    }, [navigate, searchExpression, searchForExpression])

    return (
        <Page>
            <Logo src="/logo512_horizontal.png" alt={pageName} />
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
