import { useCallback } from "react"
import { IconButton } from "./IconButton"
import { useAddLastToModalPipeline } from "../../reducers/actions/modal"
import { FaGear } from "react-icons/fa6"

export const SettingsButton = () => {
    const addLastToModalPipeline =
        useAddLastToModalPipeline()

    const onClick = useCallback(() => {
        addLastToModalPipeline("settings")
    }, [addLastToModalPipeline])

    return (
        <IconButton onClick={onClick}>
            <FaGear />
        </IconButton>
    )
}
