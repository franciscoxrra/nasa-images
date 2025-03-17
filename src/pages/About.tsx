import { Page } from "../components/Page/Page"
import { SearchHeader } from "../components/Page/Sections/Headers/SearchHeader/SearchHeader"
import {
    githubProfileUrl,
    githubRepoUrl,
    linkedinProfileUrl,
    nasaImagesApiUrl
} from "../util/constants"
import styled from "@emotion/styled"

const TextSection = styled.div`
    label: TextSection;
`

const ImageSection = styled.div`
    label: ImageSection;

    img {
        height: 25rem;
        border-radius: 50%;
        border: 0.5rem solid black;
    }
`

const LinksSection = styled.div`
    label: LinksSection;

    display: flex;
    column-gap: 2rem;
    justify-content: center;

    img {
        height: 5rem;
    }
`

// TODO all remove NASA mentions

export const About = () => (
    <Page header={<SearchHeader />}>
        <TextSection>
            <p>
                React & Typescript project housed{" "}
                <a href={githubRepoUrl} target="_blank">
                    here
                </a>
                ,
            </p>
            <p>
                developed using the{" "}
                <a href={nasaImagesApiUrl} target="_blank">
                    NASA Images API
                </a>
            </p>
            <p>
                by Francisco (Richardson) Rebello de Andrade
            </p>
        </TextSection>
        <ImageSection>
            <img src="/headshot.500.jpg" alt="headshot" />
            <p>Full-Stack Software Engineer</p>
        </ImageSection>
        <LinksSection>
            <a href={linkedinProfileUrl} target="_blank">
                <img
                    src="/linkedin.icon.png"
                    alt="linkedin profile"
                />
            </a>
            <a href={githubProfileUrl} target="_blank">
                <img
                    src="/github.icon.png"
                    alt="github profile"
                />
            </a>
        </LinksSection>
    </Page>
)
