import { emptyArray } from "../../util/structure"
import { Reducer } from "react"
import { PrefixAction } from "../util"

interface HistoryState {
    previousSearchTerms: string[]
}

const initialState: HistoryState = {
    previousSearchTerms: emptyArray
}

type HistoryAction<Type, Payload = undefined> = PrefixAction<
    "history",
    Type,
    Payload
>

export type AddToHistory = HistoryAction<"history/add", string>

export type ResetHistory = HistoryAction<"history/reset">

export type HistoryReducerAction = AddToHistory | ResetHistory

export const historyReducer: Reducer<HistoryState, HistoryReducerAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "history/add":
            return {
                ...state,
                previousSearchTerms: [
                    action.payload,
                    ...state.previousSearchTerms.slice(0, 4)
                ]
            }
        case "history/reset":
            return initialState
        default:
            return state
    }
}
