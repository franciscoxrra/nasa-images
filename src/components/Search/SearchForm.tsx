import {
    ChangeEventHandler,
    FormEventHandler,
    useCallback,
    useEffect,
    useState
} from "react"
import { useNavigate } from "react-router-dom"
import styled from "@emotion/styled"
import { SearchResultsLocationState } from "../../pages/SearchResults"
import { useSelector } from "react-redux"
import { selectHistory } from "../../reducers/history/historyReducer"
import { HistoryButton } from "./HistoryButton"
import { getSearchPath } from "../../util/paths"

const Container = styled.form`
    label: SearchForm;

    display: flex;
    justify-content: center;
    gap: 1rem;

    input[type="text"] {
        min-width: 15rem;
        max-width: 42rem;
        width: 40vw;
        line-height: ${(props) =>
            props.theme.fields.primary.lineHeight};
        padding: ${(props) =>
            props.theme.fields.primary.padding};
        border-width: ${(props) =>
            props.theme.fields.primary.borderWidth};
        border-radius: ${(props) =>
            props.theme.fields.primary.borderRadius};
    }

    button {
        height: ${(props) =>
            props.theme.buttons.primary.height};
    }
`

interface SearchFormProps {
    initialValue?: string
    className?: string
}

export const SearchForm = ({
    initialValue = "",
    className
}: SearchFormProps) => {
    const navigate = useNavigate()
    const [fieldValue, setFieldValue] =
        useState(initialValue)
    const searchHistory = useSelector(selectHistory)
    const hasSearchHistory =
        searchHistory.previousSearchExpressions.length > 0

    useEffect(() => {
        setFieldValue(initialValue)
    }, [initialValue])

    const fieldOnChange = useCallback<
        ChangeEventHandler<HTMLInputElement>
    >((event) => {
        setFieldValue(event.target.value)
    }, [])

    const formOnSubmit = useCallback<
        FormEventHandler<HTMLFormElement>
    >(
        (event) => {
            event.preventDefault()
            const state: SearchResultsLocationState = {
                timestamp: Date.now()
            }
            if (fieldValue !== "") {
                navigate(getSearchPath(fieldValue), {
                    state
                })
            }
        },
        [fieldValue, navigate]
    )

    return (
        <Container
            onSubmit={formOnSubmit}
            className={className}
        >
            <input
                type="text"
                placeholder="milkyway, moon, ..."
                value={fieldValue}
                onChange={fieldOnChange}
            />
            <button type="submit">search</button>
            {hasSearchHistory && <HistoryButton />}
        </Container>
    )
}
