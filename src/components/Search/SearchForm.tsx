import {
    ChangeEventHandler,
    FormEventHandler,
    useCallback,
    useEffect,
    useState
} from "react"
import { useNavigate } from "react-router-dom"
import styled from "@emotion/styled"

const Container = styled.form`
    label: SearchForm;

    display: flex;
    justify-content: center;
    gap: 1rem;

    input[type="text"] {
        width: 40rem;
        line-height: ${(props) => props.theme.search.field.lineHeight};
        padding: ${(props) => props.theme.search.field.padding};
        border-width: ${(props) => props.theme.search.field.borderWidth};
        border-radius: ${(props) => props.theme.search.field.borderRadius};
    }

    button {
        height: ${(props) => props.theme.search.button.height};
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
        <Container onSubmit={formOnSubmit} className={className}>
            <input
                type="text"
                placeholder="milkyway, moon, ..."
                value={fieldValue}
                onChange={fieldOnChange}
            />
            <button type="submit">search</button>
        </Container>
    )
}
