import { useNavigate } from "react-router-dom"
import { aboutPath } from "../../util/paths"
import { useCallback } from "react"
import { FaCircleInfo } from "react-icons/fa6"
import { IconButton } from "./IconButton"

export const AboutButton = () => {
    const navigate = useNavigate()

    const onClick = useCallback(() => {
        navigate(aboutPath)
    }, [navigate])

    return (
        <IconButton onClick={onClick}>
            <FaCircleInfo />
        </IconButton>
    )
}
