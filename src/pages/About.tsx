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

const HeadshotSection = styled.div`
    label: HeadshotSection;

    img {
        height: 25rem;
        width: 25rem;
        border-radius: 50%;
        border: 0.5rem solid black;
    }

    @media (width < ${(props) =>
            props.theme.breakpoints.width.medium}) {
        img {
            height: 18rem;
            width: 18rem;
            border: 0.35rem solid black;
        }
    }

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        img {
            height: 12rem;
            width: 12rem;
            border: 0.25rem solid black;
        }
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

    @media (width < ${(props) =>
            props.theme.breakpoints.width.medium}) {
        img {
            height: 3rem;
        }
    }

    @media (width < ${(props) =>
            props.theme.breakpoints.width.small}) {
        img {
            height: 2rem;
        }
    }
`

// TODO all remove NASA mentions

export const About = () => (
    <Page header={<SearchHeader />}>
        <TextSection>
            <p>
                React & TypeScript project housed{" "}
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
        <HeadshotSection>
            <img src="/headshot.500.jpg" alt="headshot" />
            <p>Full-Stack Software Engineer</p>
        </HeadshotSection>
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
