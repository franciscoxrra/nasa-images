import { SearchForm } from "../../../../search/SearchForm/SearchForm"
import React from "react"
import styled from "@emotion/styled"
import { HeaderRightSide } from "../HeaderRightSide"
import { HeaderHomeButton } from "./HeaderHomeButton"

// TODO add css to theme
// TODO all different size formatting
// TODO all tests: e2e, visual, unit (?)
// TODO all refactor for better function and value names

const Container = styled.div`
    label: SearchHeader;

    display: grid;
    grid-template-areas:
        "HeaderHomeButton HeaderSearchFormSection HeaderRightSide"
        "HeaderHomeButton HeaderSearchFormSection HeaderRightSide";
    grid-template-columns: max-content auto max-content;
    grid-template-rows: max-content max-content;
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

    @media (max-width: ${(props) =>
            props.theme.breakpoints.width.small}) {
        grid-template-areas:
            ".                          HeaderHomeButton            HeaderRightSide"
            "HeaderSearchFormSection    HeaderSearchFormSection     HeaderSearchFormSection";
        grid-template-columns: 1fr minmax(auto, 100%) 1fr;
        gap: ${(props) =>
            props.theme.layout.spacing.margin.xs};
    }
`

const HeaderSearchFormSection = styled.div`
    label: HeaderSearchFormSection;

    display: grid;
    grid-area: HeaderSearchFormSection;
    align-content: center;
    grid-template-columns: min-content;
    grid-template-rows: min-content;

    @media (max-width: ${(props) =>
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

export const SearchHeader = ({
    initialValue = ""
}: SearchHeaderProps) => (
    <Container>
        <HeaderHomeButton />
        <HeaderSearchFormSection>
            <SearchForm initialValue={initialValue} />
        </HeaderSearchFormSection>
        <HeaderRightSide />
    </Container>
)
