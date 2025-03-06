import { Reducer } from "react"
import { PrefixAction } from "../util"
import { State } from "../store"

interface SettingsState {
    resultsPerPage: number
    maxResults: number
}

const initialState: SettingsState = {
    resultsPerPage: 50,
    maxResults: 5000
}

type SettingsAction<
    Type,
    Payload = undefined
> = PrefixAction<"settings", Type, Payload>

export type SetResultsPerPage = SettingsAction<
    "settings/setResultsPerPage",
    { value: number }
>

export type ResetSettings = SettingsAction<"settings/reset">

export type SettingsReducerAction =
    | SetResultsPerPage
    | ResetSettings

export const settingsReducer: Reducer<
    SettingsState,
    SettingsReducerAction
> = (state = initialState, action) => {
    switch (action.type) {
        case "settings/setResultsPerPage":
            return {
                ...state,
                resultsPerPage: action.payload.value
            }
        case "settings/reset":
            return initialState
        default:
            return state
    }
}

export const selectSettings = (state: State) =>
    state.settings
