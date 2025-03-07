import { useNavigate } from "react-router-dom"
import { aboutPath } from "../../util/paths"
import { LinkButton } from "../common/LinkButton"
import { useCallback } from "react"

export const AboutButton = () => {
    const navigate = useNavigate()

    const onClick = useCallback(() => {
        navigate(aboutPath)
    }, [navigate])

    return <LinkButton onClick={onClick}>About</LinkButton>
}
