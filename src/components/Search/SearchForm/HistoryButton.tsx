import React, { useCallback } from "react"
import { useAddLastToModalPipeline } from "../../../reducers/actions/modal"
import { FaClockRotateLeft } from "react-icons/fa6"
import styled from "@emotion/styled"

const Container = styled.button`
    label: HistoryButton;

    border-radius: 0;
    border-width: ${(props) =>
        `${props.theme.fields.primary.borderWidth} 0`};
`

export const HistoryButton = () => {
    const addLastToModalPipeline =
        useAddLastToModalPipeline()
    const onClick = useCallback<
        React.MouseEventHandler<HTMLButtonElement>
    >(
        (event) => {
            event.preventDefault()
            addLastToModalPipeline("history")
        },
        [addLastToModalPipeline]
    )
    return (
        <Container onClick={onClick} type="button">
            <FaClockRotateLeft />
        </Container>
    )
}
