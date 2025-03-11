export const pageName = "Space Images"

export const noDescriptionText = "(no description)"

export const isEnvProduction =
    process.env.NODE_ENV === "production"

export const nasaImagesApiUrl =
    process.env.REACT_APP_NASA_IMAGES_API || ""
export const nasaImagesSearchEndpoint =
    process.env.REACT_APP_NASA_IMAGES_SEARCH_ENDPOINT || ""

export const linkedinProfileUrl =
    process.env.REACT_APP_LINKEDIN_PROFILE || ""
export const githubProfileUrl =
    process.env.REACT_APP_GITHUB_PROFILE || ""
export const githubRepoUrl =
    process.env.REACT_APP_GITHUB_REPO || ""

export const nasaImagesSearchUrl = `${nasaImagesApiUrl}${nasaImagesSearchEndpoint}`
