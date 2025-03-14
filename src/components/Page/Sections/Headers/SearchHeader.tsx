import { SearchForm } from "../../../search/SearchForm/SearchForm"
import React from "react"
import styled from "@emotion/styled"
import { HomeButton } from "../../../buttons/HomeButton"
import { HeaderRightSide } from "./HeaderRightSide"

// TODO add css to theme
// TODO all different size formatting
// TODO all tests: e2e, visual, unit (?)
// TODO all refactor for better function and value names

const Container = styled.div`
    label: SearchHeader;

    display: grid;
    grid-template-columns: max-content auto max-content;
    gap: ${(props) =>
        props.theme.layout.spacing.margin.medium};
    margin: ${(props) =>
        props.theme.layout.spacing.margin.medium};

    @media (max-width: ${(props) =>
            props.theme.breakpoints.width.medium}) {
        gap: ${(props) =>
            props.theme.layout.spacing.margin.small};
        margin: ${(props) =>
            props.theme.layout.spacing.margin.small};
    }
`

const HeaderSearchFormSection = styled.div`
    label: HeaderSearchFormSection;

    display: grid;
    align-content: center;
    grid-template-columns: min-content;
    grid-template-rows: min-content;
`

interface SearchHeaderProps {
    initialValue?: string
}

export const SearchHeader = ({
    initialValue = ""
}: SearchHeaderProps) => (
    <Container>
        <HomeButton />
        <HeaderSearchFormSection>
            <SearchForm initialValue={initialValue} />
        </HeaderSearchFormSection>
        <HeaderRightSide />
    </Container>
)
