export const homePath = "/"
export const aboutPath = "/about"

export const searchExpressionVar = "searchExpression"
export const makeParam = (param: string) => `:${param}`

export const getSearchPath = (
    expression: string,
    page?: number
) =>
    `/search/${expression}${typeof page === "number" && page > 1 ? `?page=${page}` : ""}`

export const pageParamName = "page"

export const itemParamName = "item"
