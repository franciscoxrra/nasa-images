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
    gap: 15px;
    margin: 15px;
`

const ResultEntry = styled.div`
    label: ResultEntry;

    display: flex;
    flex-wrap: wrap;
    flex-basis: 120px; /* width: 350px; */
    flex-grow: 1;
    gap: 10px;
    max-width: 360px;
`

const ImageSection = styled.div`
    label: ImageSection;

    width: 100%;
    height: 180px;
    border-radius: 10px;
    align-content: center;
    background-color: #dddddd;
    overflow: hidden;

    > img {
        object-fit: cover;
        min-width: 100%;
        max-height: 100%;
        vertical-align: middle;
        max-width: 360px;
    }
`

const TextSection = styled.div`
    label: TextSection;

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-basis: 100%;
    flex-grow: 0;
    height: 40px;
    text-align: left;
    padding: 0 5px;

    > div {
        position: relative;
        width: 100%;
        font-size: 14px;
    }
`

const EntryTitle = styled.div`
    label: EntryTitle;

    color: #aaa;
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`

const EntryDescription = styled.div<{ isEmpty: boolean }>`
    label: EntryDescription;

    color: ${(props) => (props.isEmpty ? "#aaa" : "#000")};
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    font-size: 16px;
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
