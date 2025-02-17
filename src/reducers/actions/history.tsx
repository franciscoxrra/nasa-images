/* eslint-disable no-restricted-imports */
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import {
    AddToHistory,
    ResetHistory
} from "../history/historyReducer"

const addToHistory = (
    expression: string,
    lastViewedPage: number,
    date: Date
): AddToHistory => ({
    type: "history/add",
    payload: {
        expression,
        lastViewPage: lastViewedPage,
        lastViewDate: date.toISOString()
    }
})

const resetHistory = (): ResetHistory => ({
    type: "history/reset"
})

export const useAddToHistory = () => {
    const dispatch = useDispatch()

    return useCallback(
        (
            expression: string,
            lastViewedPage: number,
            date: Date
        ) => {
            dispatch(
                addToHistory(
                    expression,
                    lastViewedPage,
                    date
                )
            )
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
