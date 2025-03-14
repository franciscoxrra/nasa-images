export const resetFocus = () => {
    ;(document.activeElement as HTMLElement | null)?.blur()
}
