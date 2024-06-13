import { emptyArray } from "../../util/structure"
import { Reducer } from "react"
import { PrefixAction } from "../util"
import { State } from "../store"

interface HistoryEntry {
    expression: string
    date: string
}

export interface HistoryState {
    previousSearchExpressions: HistoryEntry[]
}

const initialState: HistoryState = {
    previousSearchExpressions: emptyArray
}

type HistoryAction<Type, Payload = undefined> = PrefixAction<
    "history",
    Type,
    Payload
>

export type AddToHistory = HistoryAction<"history/add", HistoryEntry>

export type ResetHistory = HistoryAction<"history/reset">

export type HistoryReducerAction = AddToHistory | ResetHistory

export const historyReducer: Reducer<HistoryState, HistoryReducerAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "history/add":
            return action.payload
                ? {
                      ...state,
                      previousSearchExpressions: [
                          action.payload,
                          ...state.previousSearchExpressions.slice(0, 4)
                      ]
                  }
                : state
        case "history/reset":
            return initialState
        default:
            return state
    }
}

export const selectHistory = (state: State) => state.history
