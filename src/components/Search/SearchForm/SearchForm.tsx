import {
    ChangeEventHandler,
    FormEventHandler,
    MouseEventHandler,
    useCallback,
    useEffect,
    useRef,
    useState
} from "react"
import { useNavigate } from "react-router-dom"
import styled from "@emotion/styled"
import { SearchResultsLocationState } from "../../../pages/SearchResults"
import { useSelector } from "react-redux"
import { selectHistory } from "../../../reducers/history/historyReducer"
import { getSearchPath } from "../../../util/paths"
import { HistoryButton } from "./HistoryButton"
import { SearchSubmitButton } from "./SearchSubmitButton"
import { ButtonSeparator } from "./ButtonSeparator"
import { ClearButton } from "../../buttons/ClearButton"

const Container = styled.form`
    label: SearchForm;

    display: grid;
    grid-template-columns: max-content repeat(
            4,
            max-content
        );
    align-items: center;
    justify-content: center;
    height: ${(props) => props.theme.fields.primary.height};
    margin: auto;
    width: max-content;

    > input[type="text"] {
        width: 36vw;
        min-width: 18rem;
        max-width: 32rem;
        box-sizing: border-box;
        height: ${(props) =>
            props.theme.fields.primary.height};
        padding: ${(props) =>
            props.theme.fields.primary.padding};
        border-width: ${(props) =>
            `${props.theme.fields.primary.borderWidth} 0 
                ${props.theme.fields.primary.borderWidth} ${props.theme.fields.primary.borderWidth}`};
        border-radius: ${(props) =>
            `${props.theme.fields.primary.borderRadius} 0 
            0 ${props.theme.fields.primary.borderRadius}`};

        &:focus {
            outline: none;
        }

        @media (width < ${(props) =>
                props.theme.breakpoints.width.small}) {
            width: 100%;
            min-width: 5rem;
        }
    }

    > button {
        display: grid;
        align-items: center;
        height: ${(props) =>
            props.theme.fields.primary.height};
        padding: 0 1rem;
        background-color: ${(props) =>
            props.theme.colors.background.tertiary};

        &:hover {
            filter: brightness(95%);
        }
    }

    > input[type="text"],
    > button {
        border-color: ${(props) =>
            props.theme.colors.standard.primary};
        border-style: solid;
    }

    &:hover,
    &:focus-within {
        background: #fff;
        border-radius: ${(props) =>
            `${props.theme.fields.primary.borderRadius} 0 
            0 ${props.theme.fields.primary.borderRadius}`};
        box-shadow: 0 0 0.5rem 0.1rem #ccccccaa;
        border-color: transparent;
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
    const $input = useRef<HTMLInputElement>(null)

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

    const onClearClick = useCallback<
        MouseEventHandler<HTMLButtonElement>
    >(() => {
        setFieldValue("")
        $input.current?.focus()
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
                ref={$input}
            />
            <ClearButton
                isDisabled={!fieldValue}
                onClearClick={onClearClick}
            />
            {hasSearchHistory && (
                <>
                    <HistoryButton />
                    <ButtonSeparator />
                </>
            )}
            <SearchSubmitButton />
        </Container>
    )
}
