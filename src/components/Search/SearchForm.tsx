import {
    ChangeEventHandler,
    FormEventHandler,
    useCallback,
    useEffect,
    useState
} from "react"
import { useNavigate } from "react-router-dom"

interface SearchFormProps {
    initialValue?: string
}

export const SearchForm = ({ initialValue = "" }: SearchFormProps) => {
    const navigate = useNavigate()
    const [fieldValue, setFieldValue] = useState(initialValue)

    useEffect(() => {
        setFieldValue(initialValue)
    }, [initialValue])

    const fieldOnChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
        (event) => {
            setFieldValue(event.target.value)
        },
        []
    )

    const formOnSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
        (event) => {
            event.preventDefault()
            if (fieldValue !== "") {
                navigate(`/search/${fieldValue}`)
            }
        },
        [fieldValue, navigate]
    )

    return (
        <form onSubmit={formOnSubmit}>
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
