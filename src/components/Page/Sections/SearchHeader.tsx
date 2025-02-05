import { pageName } from "../../../util/constants"
import { SearchForm } from "../../Search/SearchForm"
import React from "react"
import styled from "@emotion/styled"

// TODO add css to theme

const Container = styled.div`
    label: SearchHeader;

    display: grid;
    grid-template-columns: min-content auto;
    gap: ${(props) => props.theme.layout.spacing.margin};
    margin: ${(props) => props.theme.layout.spacing.margin};
`

const Logo = styled.img`
    label: Logo;

    height: 5rem;
`

const ResultSearchForm = styled(SearchForm)`
    label: ResultSearchForm;

    justify-content: left;
    align-items: center;
`

interface SearchHeaderProps {
    initialValue?: string
}

export const SearchHeader = ({
    initialValue = ""
}: SearchHeaderProps) => (
    <Container>
        <Logo
            src="/logo512_horizontal.png"
            alt={pageName}
        />
        <ResultSearchForm initialValue={initialValue} />
    </Container>
)
