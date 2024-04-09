import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { isEnvProduction } from "../util/constants"
import { historyReducer } from "./history/historyReducer"

const rootReducer = combineReducers({
    history: historyReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: !isEnvProduction
    // middleware: ()=>void // TODO add saver and analytics
})
