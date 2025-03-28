export const dontForwardProps =
    (attributes: string[]) => (propName: string) =>
        !attributes.includes(propName)
