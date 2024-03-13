import styled from '@emotion/styled'
import { Image } from "../requesters/searchImages";

const Container = styled.div`
    label: ImageGallery;


    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    > div {
        flex-basis: 350px; /* width: 350px; */
    }

    div img {
        object-fit: cover;
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        border-radius: 5px;
    }
`

interface ImageGalleryProps {
    images: Image[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
    return (
        <Container>
            {images.length === 0
                ? "Nothing found... try something else"
                : images.map((image) => (
                    <div key={image.id}>
                        <img src={image.href}  alt={image.title}/>
                    </div>
                ))}
        </Container>
    );
};
