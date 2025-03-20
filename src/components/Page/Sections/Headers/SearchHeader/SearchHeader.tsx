import { SearchForm } from "../../../../search/SearchForm/SearchForm"
import React from "react"
import styled from "@emotion/styled"
import { HeaderRightSide } from "../HeaderRightSide"
import { HeaderHomeButton } from "./HeaderHomeButton"
import { Header } from "../Header"

// TODO add css to theme
// TODO all different size formatting
// TODO all tests: e2e, visual, unit (?)
// TODO all refactor for better function and value names

const Container = styled(Header)`
    label: SearchHeader;

    grid-template-areas:
        "HeaderHomeButton HeaderSearchFormSection HeaderRightSide"
        "HeaderHomeButton HeaderSearchFormSection HeaderRightSide";
    grid-template-columns: max-content auto max-content;
    grid-template-rows: max-content max-content;

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        grid-template-areas:
            ".                          HeaderHomeButton            HeaderRightSide"
            "HeaderSearchFormSection    HeaderSearchFormSection     HeaderSearchFormSection";
        grid-template-columns: 1fr minmax(auto, 100%) 1fr;
    }
`

const HeaderSearchFormSection = styled.div`
    label: HeaderSearchFormSection;

    display: grid;
    grid-area: HeaderSearchFormSection;
    align-content: center;
    grid-template-columns: min-content;
    grid-template-rows: min-content;

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        grid-template-columns: 100%;
        & > form {
            width: 100%;
            grid-template-columns: 1fr repeat(
                    4,
                    max-content
                );
        }
    }
`

interface SearchHeaderProps {
    initialValue?: string
}

const SearchHeaderRightSide = styled(HeaderRightSide)`
    label: SearchHeaderRightSide;

    grid-area: HeaderRightSide;
`

export const SearchHeader = ({
    initialValue = ""
}: SearchHeaderProps) => (
    <Container>
        <HeaderHomeButton />
        <HeaderSearchFormSection>
            <SearchForm initialValue={initialValue} />
        </HeaderSearchFormSection>
        <SearchHeaderRightSide />
    </Container>
)
