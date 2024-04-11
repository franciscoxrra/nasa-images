import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { isEnvProduction } from "../util/constants"
import { historyReducer } from "./history/historyReducer"
import { throttle } from "throttle-debounce"

const localStorageStateKey = "state"

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(localStorageStateKey)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

const saveState = (state: State) => {
    try {
        const { /*config:_,*/ ...savableState } = state // TODO remove once unnecessary slices removed
        const serializedState = JSON.stringify(savableState)
        localStorage.setItem(localStorageStateKey, serializedState)
    } catch (err) {
        // Ignore write errors.
    }
}

export const store = configureStore({
    reducer: combineReducers({
        history: historyReducer
    }),
    devTools: !isEnvProduction,
    preloadedState: loadState()
    // middleware: ()=>void // TODO add analytics
})

store.subscribe(
    throttle(3000, () => {
        saveState(store.getState())
    })
)

export type State = ReturnType<typeof store.getState>
