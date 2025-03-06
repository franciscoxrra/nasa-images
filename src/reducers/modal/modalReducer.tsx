import { emptyArray } from "../../util/structure"
import { PrefixAction } from "../util"
import { Reducer } from "react"
import { State } from "../store"

export type ModalType = "history" | "settings"

interface ModalEntry<Extra = undefined> {
    type: ModalType
    hasBlurClose?: boolean
    extra?: Extra
}

interface ModalState {
    pipeline: ModalEntry[]
}

const initialState: ModalState = {
    pipeline: emptyArray
}

type ModalAction<Type, Payload = undefined> = PrefixAction<
    "modal",
    Type,
    Payload
>

export type AddLastToModalPipeline = ModalAction<
    "modal/addLast",
    ModalEntry
>

export type RemoveHeadFromModalPipeline =
    ModalAction<"modal/removeHead">

export type ModalReducerAction =
    | AddLastToModalPipeline
    | RemoveHeadFromModalPipeline

const noBlurClose: ModalType[] = []

export const modalReducer: Reducer<
    ModalState,
    ModalReducerAction
> = (state = initialState, action) => {
    switch (action.type) {
        case "modal/addLast":
            const payload =
                typeof action.payload.hasBlurClose ===
                "boolean"
                    ? action.payload
                    : {
                          ...action.payload,
                          hasBlurClose:
                              !noBlurClose.includes(
                                  action.payload.type
                              )
                      }
            return {
                ...state,
                pipeline: [...state.pipeline, payload]
            }
        case "modal/removeHead":
            return {
                ...state,
                pipeline: state.pipeline.slice(1)
            }
        default:
            return state
    }
}

export const selectHeadModal = (state: State) =>
    state.modal.pipeline[0]
