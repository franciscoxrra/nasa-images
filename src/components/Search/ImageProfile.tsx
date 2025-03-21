import styled from "@emotion/styled"
import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react"
import { usePageDetails } from "../Page/Page"
import { useViewportDimensions } from "../../contexts/ViewportDimensions"
import { useSearchImages } from "../../requesters/searchImages"
import {
    useLocation,
    useSearchParams
} from "react-router-dom"
import { itemParamName } from "../../util/paths"
import { getLargestImageLink } from "./utils"
import { IconButton } from "../buttons/IconButton"

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
    padding: 0 2rem;
    background-color: ${(props) =>
        props.theme.colors.background.tertiary};
    overflow-y: auto;

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        padding: 0 1rem;
    }
`

const ProfileContainer = styled.div`
    label: ProfileContainer;

    width: 100%;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        padding: 0.5rem 0;
        gap: 0;
    }
`

const ProfileImageSection = styled.div`
    label: ProfileImageSection;

    & img {
        object-fit: cover;
        max-height: 60vh;
        height: 100%;
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
    const { headerHeight } = usePageDetails()
    const [floaterHeight, setFloaterHeight] = useState(0)
    const location = useLocation()
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
    const image = imagesData?.images[0]

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
            setSearchParams(
                (prev) => {
                    prev.delete(itemParamName)
                    return prev
                },
                { state: location.state }
            ),
        [location.state, setSearchParams]
    )

    return (
        <Container ref={$container}>
            <FloatingProfile
                headerHeight={headerHeight}
                floaterHeight={floaterHeight}
            >
                {image && !isLoading ? (
                    <ProfileContainer>
                        <TopSection>
                            <IconButton
                                onClick={CloseOnClick}
                            >
                                X
                            </IconButton>
                        </TopSection>
                        <ProfileImageSection>
                            <img
                                src={
                                    getLargestImageLink(
                                        image
                                    ).href
                                }
                                alt={
                                    image.truncated_description
                                }
                            />
                        </ProfileImageSection>
                        <h2>{image.title}</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: image.description
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
