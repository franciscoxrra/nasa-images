import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { AddToHistory, ResetHistory } from "../history/historyReducer"

const addToHistory = (expression: string, date: Date): AddToHistory => ({
    type: "history/add",
    payload: { expression, date: date.toISOString() }
})

const resetHistory = (): ResetHistory => ({
    type: "history/reset"
})

export const useAddToHistory = () => {
    const dispatch = useDispatch()

    return useCallback(
        (expression: string, date: Date) => {
            dispatch(addToHistory(expression, date))
        },
        [dispatch]
    )
}

export const useResetHistory = () => {
    const dispatch = useDispatch()

    return useCallback(() => {
        dispatch(resetHistory())
    }, [dispatch])
}
