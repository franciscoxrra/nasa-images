/* eslint-disable no-restricted-imports */
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import {
    AddLastToModalPipeline,
    ModalType,
    RemoveHeadFromModalPipeline
} from "../modal/modalReducer"

const addLastToModalPipeline = (
    modalType: ModalType
): AddLastToModalPipeline => ({
    type: "modal/addLast",
    payload: {
        type: modalType
    }
})

const removeHeadFromModalPipeline =
    (): RemoveHeadFromModalPipeline => ({
        type: "modal/removeHead"
    })

export const useAddLastToModalPipeline = () => {
    const dispatch = useDispatch()

    return useCallback(
        (modalType: ModalType) => {
            dispatch(addLastToModalPipeline(modalType))
        },
        [dispatch]
    )
}

export const useRemoveHeadFromModalPipeline = () => {
    const dispatch = useDispatch()

    return useCallback(() => {
        dispatch(removeHeadFromModalPipeline())
    }, [dispatch])
}
