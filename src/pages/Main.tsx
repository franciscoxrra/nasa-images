import { SearchForm } from "../components/Search/SearchForm"
import { Page } from "../components/Page/Page"
import { pageName } from "../util/constants"
import styled from "@emotion/styled"

// TODO add css to theme

export const MainSection = styled.div`
    label: MainSection;

    height: 100%;

    > div {
        padding: 1rem 0;
    }
`

const ImageSection = styled.div`
    label: ImageSection;

    min-height: 15rem;
    max-height: 30rem;
    height: calc(100% - 35rem);
    display: grid;
    align-content: end;
    justify-items: center;

    > img {
        height: 15rem;
        padding: 1rem;
    }
`

export const Main = () => (
    <Page>
        <MainSection>
            <ImageSection>
                <img src="/logo1024.png" alt={pageName} />
            </ImageSection>
            <SearchForm />
        </MainSection>
    </Page>
)
