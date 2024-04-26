export const isEnvProduction = process.env.NODE_ENV === "production"

export const nasaImagesApiUrl = process.env.REACT_APP_NASA_IMAGES_API || ""
export const nasaImagesSearchEndpoint =
    process.env.REACT_APP_NASA_IMAGES_SEARCH_ENDPOINT || ""

export const nasaImagesSearchUrl = `${nasaImagesApiUrl}${nasaImagesSearchEndpoint}`
