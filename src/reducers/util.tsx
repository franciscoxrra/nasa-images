export type PrefixAction<
    Name extends string,
    Type,
    Payload = undefined
> = Type extends `${Name}/${infer _SubType}`
    ? Payload extends undefined
        ? { type: Type }
        : { type: Type; payload: Payload }
    : never
