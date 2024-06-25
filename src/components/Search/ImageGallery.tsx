import styled from "@emotion/styled"
import { Image } from "../../requesters/searchImages"
import { noDescriptionText } from "../../util/constants"

// TODO Optimise css with theme and restructure
// TODO Time response
// TODO Look at public folder's files
// TODO Stop last images stretching
// TODO Remove generic yarn html comment
// TODO Fix css in image gallery

const Container = styled.div`
    label: ImageGallery;

    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    gap: ${(props) => props.theme.gallery.gap.vertical};
    margin: ${(props) => props.theme.layout.spacing.margin};
`

const ResultEntry = styled.div`
    label: ResultEntry;

    display: flex;
    flex-wrap: wrap;
    flex-basis: ${(props) => props.theme.gallery.minWidth};
    flex-grow: 1;
    gap: ${(props) => props.theme.gallery.gap.horizontal};
    max-width: ${(props) => props.theme.gallery.maxWidth};
`

const ImageSection = styled.div`
    label: ImageSection;

    width: 100%;
    height: ${(props) => props.theme.gallery.image.height};
    border-radius: ${(props) => props.theme.gallery.image.borderRadius};
    align-content: center;
    background-color: ${(props) => props.theme.gallery.image.backgroundColor};
    overflow: hidden;

    > img {
        object-fit: cover;
        min-width: 100%;
        max-height: 100%;
        vertical-align: middle;
        max-width: ${(props) => props.theme.gallery.maxWidth};
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
        font-size: ${(props) => props.theme.fonts.searchEntry.title.size};
    }
`

const EntryTitle = styled.div`
    label: EntryTitle;

    color: ${(props) => props.theme.gallery.text.color.secondary};
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
    font-size: ${(props) => props.theme.fonts.searchEntry.description.size};
`

interface ImageGalleryProps {
    images: Image[]
}

export const ImageGallery = ({ images }: ImageGalleryProps) => (
    <Container>
        {images.length === 0
            ? "Nothing found... try something else"
            : images.map((image) => (
                  <ResultEntry key={image.id}>
                      <ImageSection>
                          <img src={image.previewUrl} alt={image.title} />
                      </ImageSection>
                      <TextSection>
                          <div>
                              <EntryTitle>{image.title}</EntryTitle>
                          </div>
                          <div>
                              <EntryDescription
                                  isEmpty={!image.truncated_description}
                              >
                                  {image.truncated_description ||
                                      noDescriptionText}
                              </EntryDescription>
                          </div>
                      </TextSection>
                  </ResultEntry>
              ))}
    </Container>
)
