import styled from "@emotion/styled"
import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState
} from "react"
import { PageContext } from "../Page/Page"
import { useViewportDimensions } from "../../contexts/ViewportDimensions"
import { useSearchImages } from "../../requesters/searchImages"
import { useSearchParams } from "react-router-dom"
import { itemParamName } from "../../util/paths"
import { LinkButton } from "../common/LinkButton"

const Container = styled.div`
    label: ImageProfile;
`

const FloatingProfile = styled.div<{
    headerHeight: number
    floaterHeight: number
}>`
    label: FloatingProfile;

    position: sticky;
    box-sizing: border-box;
    top: ${(props) => props.headerHeight}px;
    height: ${(props) => props.floaterHeight}px;
    padding: 0 3rem;
    background-color: ${(props) =>
        props.theme.colors.background.tertiary};
    overflow-y: auto;
`

const ProfileContainer = styled.div`
    label: ProfileContainer;

    width: 100%;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ImageSection = styled.div`
    label: ImageSection;

    & img {
        max-height: 60vh;
        min-height: 30vh;
        max-width: 100%;
    }
`

const TopSection = styled.div`
    label: TopSection;

    display: grid;
    justify-items: right;
`

export const ImageProfile = () => {
    const $container = useRef<HTMLDivElement>(null)
    const { windowHeight } = useViewportDimensions()
    const { headerHeight } = useContext(PageContext)
    const [floaterHeight, setFloaterHeight] = useState(0)
    const [searchParams, setSearchParams] =
        useSearchParams()

    useEffect(() => {
        const adaptFloaterHeight = () => {
            if ($container.current) {
                const dims =
                    $container.current.getClientRects()[0]
                setFloaterHeight(
                    Math.min(dims.bottom, windowHeight) -
                        headerHeight
                )
            }
        }
        adaptFloaterHeight()
        window.addEventListener(
            "scroll",
            adaptFloaterHeight
        )
        return () =>
            window.removeEventListener(
                "scroll",
                adaptFloaterHeight
            )
    }, [headerHeight, windowHeight])

    const { searchForExpression, imagesData, isLoading } =
        useSearchImages()
    const imageData = imagesData?.images[0]

    useEffect(() => {
        searchForExpression(
            "id",
            searchParams.get(itemParamName) || ""
        )
    }, [searchForExpression, searchParams])

    const CloseOnClick = useCallback<
        React.MouseEventHandler<HTMLButtonElement>
    >(
        () =>
            setSearchParams((prev) => {
                prev.delete(itemParamName)
                return prev
            }),
        [setSearchParams]
    )

    return (
        <Container ref={$container}>
            <FloatingProfile
                headerHeight={headerHeight}
                floaterHeight={floaterHeight}
            >
                {imageData && !isLoading ? (
                    <ProfileContainer>
                        <TopSection>
                            <LinkButton
                                onClick={CloseOnClick}
                            >
                                [close]
                            </LinkButton>
                        </TopSection>
                        <ImageSection>
                            <img
                                src={imageData.originalUrl}
                                alt={
                                    imageData.truncated_description
                                }
                            />
                        </ImageSection>
                        <h2>{imageData.title}</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: imageData.description
                            }}
                        />
                    </ProfileContainer>
                ) : (
                    <div>Loading...</div>
                )}
            </FloatingProfile>
        </Container>
    )
}
