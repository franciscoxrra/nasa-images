import { Image } from "../../requesters/searchImages"
import { noDescriptionText } from "../../util/constants"
import styled from "@emotion/styled"
import {
    useLocation,
    useSearchParams
} from "react-router-dom"
import { itemParamName } from "../../util/paths"
import { css } from "@emotion/react"
import React, { useCallback } from "react"
import { getSmallestImageLink } from "./utils"

const ResultEntry = styled.button<{ isSelected: boolean }>`
    label: ResultEntry;

    display: flex;
    flex-wrap: wrap;
    flex-basis: ${(props) =>
        props.theme.galleries.primary.entry.minWidth};
    flex-grow: 1;
    gap: 0.5rem;
    max-width: 100%;
    border: ${(props) =>
            props.theme.galleries.primary.entry.borderWidth}
        solid
        ${(props) => props.theme.colors.background.primary};
    border-radius: 1.5rem; // TODO add to theme
    padding: ${(props) =>
        props.theme.galleries.primary.entry.padding};
    ${(props) =>
        props.isSelected
            ? css`
                  border: ${props.theme.galleries.primary
                          .entry.borderWidth}
                      solid
                      ${props.theme.colors.standard
                          .tertiary};
              `
            : css`
                  background-color: ${props.theme.colors
                      .background.primary};
              `}

    &:hover {
        border: ${(props) =>
                props.theme.galleries.primary.entry
                    .borderWidth}
            solid
            ${(props) =>
                props.theme.colors.standard.tertiary};
    }
`

const ItemImageSection = styled.div`
    label: ItemImageSection;

    display: flex;
    width: 100%;
    height: ${(props) =>
        props.theme.galleries.primary.image.height.large};
    border-radius: ${(props) =>
        props.theme.galleries.primary.image.borderRadius};
    align-content: center;
    background-color: ${(props) =>
        props.theme.colors.background.tertiary};
    overflow: hidden;

    > img {
        object-fit: cover;
        min-width: 100%;
        max-height: 100%;
        vertical-align: middle;
        max-width: ${(props) =>
            props.theme.galleries.primary.entry.maxWidth};
    }

    @media (width < ${(props) =>
            props.theme.breakpoints.width.medium}) {
        height: ${(props) =>
            props.theme.galleries.primary.image.height
                .medium};
    }

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        height: ${(props) =>
            props.theme.galleries.primary.image.height
                .small};
    }
`

const TextSection = styled.div`
    label: TextSection;

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-basis: 100%;
    flex-grow: 0;
    height: ${(props) =>
        props.theme.galleries.primary.textSection.height};
    text-align: left;
    padding: ${(props) =>
        props.theme.galleries.primary.textSection.padding};

    > div {
        position: relative;
        width: 100%;
        font-size: ${(props) =>
            props.theme.fonts.sizes.big};
    }
`

const EntryTitle = styled.div`
    label: EntryTitle;

    color: ${(props) =>
        props.theme.colors.standard.tertiary};
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`

const EntryDescription = styled.div<{ isEmpty: boolean }>`
    label: EntryDescription;

    color: ${(props) =>
        props.isEmpty
            ? props.theme.colors.standard.tertiary
            : props.theme.colors.standard.primary};
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    font-size: ${(props) =>
        props.theme.fonts.sizes.regular};
`

interface ImageItemProps {
    image: Image
}

export const ImageItem = ({ image }: ImageItemProps) => {
    const location = useLocation()
    const [searchParams, setSearchParams] =
        useSearchParams()
    const isSelected =
        image.id === searchParams.get(itemParamName)

    const itemOnClick: React.MouseEventHandler<HTMLButtonElement> =
        useCallback(() => {
            setSearchParams(
                (prev) => {
                    prev.set(itemParamName, `${image.id}`)
                    return prev
                },
                { state: location.state }
            )
        }, [image.id, location.state, setSearchParams])

    return (
        <ResultEntry
            onClick={itemOnClick}
            isSelected={isSelected}
        >
            <ItemImageSection>
                <img
                    src={getSmallestImageLink(image).href}
                    alt={image.title}
                />
            </ItemImageSection>
            <TextSection>
                <div>
                    <EntryTitle>{image.title}</EntryTitle>
                </div>
                <div>
                    <EntryDescription
                        isEmpty={
                            !image.truncated_description
                        }
                    >
                        {image.truncated_description ||
                            noDescriptionText}
                    </EntryDescription>
                </div>
            </TextSection>
        </ResultEntry>
    )
}
