import { pageName } from "../../util/constants"
import { SearchForm } from "../Search/SearchForm"
import React from "react"
import styled from "@emotion/styled"

// TODO add css to theme

const Logo = styled.img`
    label: Logo;

    height: 5rem;
`

interface SearchHeaderProps {
    initialValue?: string
}

export const SearchHeader = ({ initialValue = "" }: SearchHeaderProps) => (
    <>
        <Logo src="/logo512_horizontal.png" alt={pageName} />
        <SearchForm initialValue={initialValue} />
    </>
)
