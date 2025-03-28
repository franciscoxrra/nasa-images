export const dontForwardProps =
    <ExtraProps extends object>(
        attributes: Array<keyof ExtraProps>
    ) =>
    (propName: string) =>
        !attributes.includes(propName as keyof ExtraProps)

export const attributeFlag = (isFlagged: boolean) =>
    isFlagged ? "" : undefined
