import { SearchForm } from "../../Search/SearchForm"
import React from "react"
import styled from "@emotion/styled"
import { LogoButton } from "../../Buttons/LogoButton"
import { DefaultHeaderRightSide } from "./DefaultHeaderRightSide"

// TODO add css to theme
// TODO all different size formatting
// TODO all tests: e2e, visual, unit (?)
// TODO all refactor for better function and value names

const Container = styled.div`
    label: SearchHeader;

    display: grid;
    grid-template-columns: max-content auto max-content;
    gap: ${(props) => props.theme.layout.spacing.margin};
    margin: ${(props) => props.theme.layout.spacing.margin};
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
        <LogoButton />
        <HeaderSearchForm initialValue={initialValue} />
        <DefaultHeaderRightSide />
    </Container>
)
