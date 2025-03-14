import { IconButton } from "../IconButton"
import { FaBars } from "react-icons/fa6"
import React, { useCallback } from "react"

export const HamburgerButton = () => {
    const [isMenuOpen, setIsMenuOpen] =
        React.useState(false)

    const onHamburgerClick = useCallback<
        React.MouseEventHandler<HTMLButtonElement>
    >(
        (event) => {
            if (isMenuOpen) {
                event.currentTarget.blur()
            }
            setIsMenuOpen(!isMenuOpen)
        },
        [isMenuOpen]
    )

    const onHamburgerBlur = useCallback<
        React.FocusEventHandler<HTMLButtonElement>
    >(() => {
        setIsMenuOpen(false)
    }, [])

    return (
        <IconButton
            onClick={onHamburgerClick}
            onBlur={onHamburgerBlur}
        >
            <FaBars />
        </IconButton>
    )
}
