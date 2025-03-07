import { pageName } from "../../../util/constants"
import { SearchForm } from "../../Search/SearchForm"
import React from "react"
import styled from "@emotion/styled"

// TODO add css to theme

const Container = styled.div`
    label: SearchHeader;

    display: grid;
    grid-template-columns: max-content auto;
    gap: ${(props) => props.theme.layout.spacing.margin};
    margin: ${(props) => props.theme.layout.spacing.margin};
`

const Logo = styled.img`
    label: Logo;

    height: 5rem;
`

const HeaderSearchForm = styled(SearchForm)`
    label: HeaderSearchForm;

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
        <HeaderSearchForm initialValue={initialValue} />
    </Container>
)
