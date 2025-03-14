import styled from "@emotion/styled"
import { Image } from "../../requesters/searchImages"
import { ImageItem } from "./ImageItem"

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
    gap: ${(props) =>
        props.theme.galleries.primary.gap.medium};
    margin: ${(props) =>
        props.theme.layout.spacing.margin.medium};

    @media (max-width: ${(props) =>
            props.theme.breakpoints.width.medium}) {
        gap: ${(props) =>
            props.theme.galleries.primary.gap.small};
        margin: ${(props) =>
            props.theme.layout.spacing.margin.small};
    }
`

interface ImageGalleryProps {
    images: Image[]
    selectedItem: string | null
}

export const ImageGallery = ({
    images
}: ImageGalleryProps) => (
    <Container>
        {images.length === 0
            ? "Nothing found... try something else"
            : images.map((image) => (
                  <ImageItem image={image} key={image.id} />
              ))}
    </Container>
)
