export const mainPath = "/"

export const searchExpressionVar = "searchExpression"
export const makeParam = (param: string) => `:${param}`

export const getSearchPath = (
    expression: string,
    page?: number
) =>
    `/search/${expression}${typeof page === "number" && page > 1 ? `?page=${page}` : ""}`

export const pageParamName = "page"
