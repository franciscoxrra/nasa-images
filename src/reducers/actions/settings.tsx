/* eslint-disable no-restricted-imports */
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import {
    ResetSettings,
    SetResultsPerPage
} from "../settings/settingsReducer"

const setResultsPerPage = (
    value: number
): SetResultsPerPage => ({
    type: "settings/setResultsPerPage",
    payload: {
        value
    }
})

const resetSettings = (): ResetSettings => ({
    type: "settings/reset"
})

export const useSetResultsPerPage = () => {
    const dispatch = useDispatch()

    return useCallback(
        (value: number) => {
            dispatch(setResultsPerPage(value))
        },
        [dispatch]
    )
}

export const useResetSettings = () => {
    const dispatch = useDispatch()

    return useCallback(() => {
        dispatch(resetSettings())
    }, [dispatch])
}
