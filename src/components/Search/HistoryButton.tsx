import React, { useCallback } from "react"
import { useAddLastToModalPipeline } from "../../reducers/actions/modal"

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
    return <button onClick={onClick}>history</button>
}
