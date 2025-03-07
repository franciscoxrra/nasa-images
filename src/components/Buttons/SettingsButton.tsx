import { useCallback } from "react"
import { LinkButton } from "../common/LinkButton"
import { useAddLastToModalPipeline } from "../../reducers/actions/modal"

export const SettingsButton = () => {
    const addLastToModalPipeline =
        useAddLastToModalPipeline()

    const onClick = useCallback(() => {
        addLastToModalPipeline("settings")
    }, [addLastToModalPipeline])

    return (
        <LinkButton onClick={onClick}>Settings</LinkButton>
    )
}
