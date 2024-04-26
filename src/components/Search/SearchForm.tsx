import {
    ChangeEventHandler,
    FormEventHandler,
    useCallback,
    useState
} from "react"

interface SearchFormProps {
    searchForExpression: (expression: string) => void
}

export const SearchForm = ({ searchForExpression }: SearchFormProps) => {
    const [fieldValue, setFieldValue] = useState("")

    const fieldOnChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
        (event) => {
            setFieldValue(event.target.value)
        },
        []
    )

    const formOnSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
        (event) => {
            event.preventDefault()
            searchForExpression(fieldValue)
        },
        [fieldValue, searchForExpression]
    )

    return (
        <form onSubmit={formOnSubmit}>
            <label>search field:</label>
            <input
                type="text"
                placeholder="milkyway, moon, ..."
                value={fieldValue}
                onChange={fieldOnChange}
            />
            <button type="submit">search</button>
        </form>
    )
}
