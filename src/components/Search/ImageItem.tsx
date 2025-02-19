import { Image } from "../../requesters/searchImages"
import { noDescriptionText } from "../../util/constants"
import styled from "@emotion/styled"
import { useSearchParams } from "react-router-dom"
import { itemParamName } from "../../util/paths"
import { css } from "@emotion/react"
import React, { useCallback } from "react"

const ResultEntry = styled.button<{ isSelected: boolean }>`
    label: ResultEntry;

    display: flex;
    flex-wrap: wrap;
    flex-basis: ${(props) => props.theme.gallery.minWidth};
    flex-grow: 1;
    gap: ${(props) => props.theme.gallery.gap.horizontal};
    max-width: ${(props) => props.theme.gallery.maxWidth};
    border: ${(props) =>
            props.theme.gallery.entry.borderWidth}
        solid
        ${(props) => props.theme.backgroundColors.primary};
    border-radius: 1.5rem; // TODO add to theme
    padding: ${(props) =>
        props.theme.gallery.entry.padding};
    ${(props) =>
        props.isSelected
            ? css`
                  border: ${props.theme.gallery.entry
                          .borderWidth}
                      solid ${props.theme.colors.tertiary};
              `
            : css`
                  background-color: ${props.theme
                      .backgroundColors.primary};
              `}

    &:hover {
        border: ${(props) =>
                props.theme.gallery.entry.borderWidth}
            solid ${(props) => props.theme.colors.tertiary};
    }
`

const ImageSection = styled.div`
    label: ImageSection;

    width: 100%;
    height: ${(props) => props.theme.gallery.image.height};
    border-radius: ${(props) =>
        props.theme.gallery.image.borderRadius};
    align-content: center;
    background-color: ${(props) =>
        props.theme.gallery.image.backgroundColor};
    overflow: hidden;

    > img {
        object-fit: cover;
        min-width: 100%;
        max-height: 100%;
        vertical-align: middle;
        max-width: ${(props) =>
            props.theme.gallery.maxWidth};
    }
`

const TextSection = styled.div`
    label: TextSection;

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-basis: 100%;
    flex-grow: 0;
    height: ${(props) => props.theme.gallery.text.height};
    text-align: left;
    padding: ${(props) => props.theme.gallery.text.padding};

    > div {
        position: relative;
        width: 100%;
        font-size: ${(props) =>
            props.theme.fonts.searchEntry.title.size};
    }
`

const EntryTitle = styled.div`
    label: EntryTitle;

    color: ${(props) =>
        props.theme.gallery.text.color.secondary};
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
            ? props.theme.gallery.text.color.secondary
            : props.theme.gallery.text.color.primary};
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    font-size: ${(props) =>
        props.theme.fonts.searchEntry.description.size};
`

interface ImageItemProps {
    image: Image
}

export const ImageItem = ({ image }: ImageItemProps) => {
    const [searchParams, setSearchParams] =
        useSearchParams()
    const isSelected =
        image.id === searchParams.get(itemParamName)

    const itemOnClick: React.MouseEventHandler<HTMLButtonElement> =
        useCallback(() => {
            setSearchParams((prev) => {
                prev.set(itemParamName, `${image.id}`)
                return prev
            })
        }, [image.id, setSearchParams])

    return (
        <ResultEntry
            onClick={itemOnClick}
            isSelected={isSelected}
        >
            <ImageSection>
                <img
                    src={image.previewUrl}
                    alt={image.title}
                />
            </ImageSection>
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
