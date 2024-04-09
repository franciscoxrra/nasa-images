import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { AddToHistory, ResetHistory } from "../history/historyReducer"

const addToHistory = (expression: string): AddToHistory => ({
    type: "history/add",
    payload: expression
})

const resetHistory = (): ResetHistory => ({
    type: "history/reset"
})

export const useDispatchAddToHistory = () => {
    const dispatch = useDispatch()

    return useCallback((expression: string) => {
        dispatch(addToHistory(expression))
    }, [])
}

export const useDispatchResetHistory = () => {
    const dispatch = useDispatch()

    return useCallback(() => {
        dispatch(resetHistory())
    }, [])
}
