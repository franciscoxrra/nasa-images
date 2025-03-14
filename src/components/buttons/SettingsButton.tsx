import React, { useCallback } from "react"
import { IconButton } from "./IconButton"
import { useAddLastToModalPipeline } from "../../reducers/actions/modal"
import { FaGear } from "react-icons/fa6"
import { resetFocus } from "../../util/misc"

export const SettingsButton = () => {
    const addLastToModalPipeline =
        useAddLastToModalPipeline()

    const onClick = useCallback<
        React.MouseEventHandler<HTMLButtonElement>
    >(() => {
        resetFocus()
        addLastToModalPipeline("settings")
    }, [addLastToModalPipeline])

    return (
        <IconButton onClick={onClick}>
            <FaGear />
        </IconButton>
    )
}
