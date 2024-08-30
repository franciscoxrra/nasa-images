export const pageName = "Space Images"

export const noDescriptionText = "(no description)"

export const isEnvProduction = process.env.NODE_ENV === "production"

export const nasaImagesApiUrl = process.env.REACT_APP_NASA_IMAGES_API || ""
export const nasaImagesSearchEndpoint =
    process.env.REACT_APP_NASA_IMAGES_SEARCH_ENDPOINT || ""
export const resultsPerPage =
    parseInt(process.env.REACT_APP_RESULTS_PER_PAGE || "") || 50
export const nasaApiPageCap = 100

export const nasaImagesSearchUrl = `${nasaImagesApiUrl}${nasaImagesSearchEndpoint}`
