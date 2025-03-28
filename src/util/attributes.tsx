export const dontForwardProps =
    <ExtraProps extends object>(
        attributes: Array<keyof ExtraProps>
    ) =>
    (propName: string) =>
        attributes.every(
            (attribute) => attribute !== propName
        )

export const attributeFlag = (isFlagged: boolean) =>
    isFlagged ? "" : undefined
