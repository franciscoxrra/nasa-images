import { SearchForm } from "../components/search/SearchForm/SearchForm"
import { Page } from "../components/Page/Page"
import { pageName } from "../util/constants"
import styled from "@emotion/styled"

// TODO add css to theme

export const HomeBody = styled.div`
    label: HomeBody;

    height: 100%;

    > div {
        padding: 1rem 0;
    }
`

const WelcomeImageSection = styled.div`
    label: WelcomeImageSection;

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

const HomeSearchForm = styled(SearchForm)`
    label: HomeSearchForm;

    max-width: 32rem;
`

export const Home = () => (
    <Page>
        <HomeBody>
            <WelcomeImageSection>
                <img src="/logo1024.png" alt={pageName} />
            </WelcomeImageSection>
            <HomeSearchForm />
        </HomeBody>
    </Page>
)
