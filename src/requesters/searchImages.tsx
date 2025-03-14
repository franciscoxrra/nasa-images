import React, { useCallback, useState } from "react"
import { nasaImagesSearchUrl } from "../util/constants"

interface Link {
    href: string
    rel: string
    render?: string
}

interface ImagesRaw {
    collection?: {
        href: string
        items: Array<{
            data: Array<{
                center: string
                date_created: string
                description: string
                keywords: Array<string>
                media_type: string
                nasa_id: string
                title: string
            }>
            href: string
            links?: Array<Link>
        }>
        links?: Array<Link>
        metadata?: {
            total_hits?: number
        }
        version: string
    }
}

interface ImagesError {
    reason: string
}

export interface Image {
    previewUrl: string
    originalUrl: string
    title: string
    description: string
    truncated_description: string
    id: string
    keywords: string[]
}

export interface ImagesData {
    images: Image[]
    totalResults: number | undefined
    page: number
    resultsPerPage: number
}

const checkResponse = async (response: Response) => {
    if (response.status < 200 || response.status >= 300) {
        const json: ImagesError = await response.json()
        throw new Error(json.reason)
    }
}

type ParameterKey = "query" | "id"

const previewImagePrefix = "~thumb."
const originalImagePrefix = "~orig."

const searchImages = async (
    parameterKey: ParameterKey,
    parameterValue: string,
    setImagesData: React.Dispatch<
        React.SetStateAction<ImagesData | null>
    >,
    setIsLoading: React.Dispatch<
        React.SetStateAction<boolean>
    >,
    setError: React.Dispatch<
        React.SetStateAction<Error | null>
    >,
    page: number,
    resultsPerPage: number,
    maxResults: number
) => {
    const maxPage = Math.ceil(maxResults / resultsPerPage)
    if (page > maxPage) {
        setImagesData(null)
        setIsLoading(false)
        setError(
            new Error("Search result page not available")
        )
    } else if (parameterValue === "") {
        setImagesData(null)
        setIsLoading(false)
        setError(null)
    } else {
        try {
            const url = new URL(nasaImagesSearchUrl)
            url.searchParams.set("media_type", "image")

            if (parameterKey === "id") {
                url.searchParams.set(
                    "nasa_id",
                    parameterValue
                )
            } else {
                url.searchParams.set(
                    "q",
                    encodeURI(parameterValue)
                )
            }

            url.searchParams.set("page", `${page}`)
            url.searchParams.set(
                "page_size",
                `${page === maxPage ? maxResults % resultsPerPage || resultsPerPage : resultsPerPage}`
            )

            setIsLoading(true)
            setError(null)
            const fetchResponse = await fetch(url.href, {
                cache: "no-cache"
            })
            await checkResponse(fetchResponse)
            const json: ImagesRaw =
                await fetchResponse.json()
            const images =
                json.collection?.items.reduce(
                    (acc: Image[], item) => {
                        const data = item.data[0]
                        const link = item.links?.find(
                            (link) =>
                                link?.render === "image" &&
                                link.href.includes(
                                    previewImagePrefix
                                )
                        )
                        if (
                            data?.media_type === "image" &&
                            link
                        ) {
                            return [
                                ...acc,
                                {
                                    previewUrl: link.href,
                                    originalUrl:
                                        link.href.replace(
                                            previewImagePrefix,
                                            originalImagePrefix
                                        ),
                                    title: data.title,
                                    description:
                                        data.description,
                                    truncated_description:
                                        data.description?.substring(
                                            0,
                                            80
                                        ),
                                    id: data.nasa_id,
                                    keywords: data.keywords
                                }
                            ]
                        }
                        return acc
                    },
                    []
                ) || null
            setImagesData(
                images
                    ? {
                          images,
                          totalResults: Math.min(
                              json.collection?.metadata
                                  ?.total_hits ||
                                  maxResults,
                              maxResults
                          ),
                          page,
                          resultsPerPage
                      }
                    : null
            )
            setIsLoading(false)
        } catch (e) {
            setImagesData(null)
            setIsLoading(false)
            if (e instanceof Error) {
                setError(e)
            } else {
                setError(
                    new Error("An unknown error occurred")
                )
            }
        }
    }
}

export const useSearchImages = () => {
    const [imagesData, setImagesData] =
        useState<ImagesData | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const searchForExpression = useCallback(
        (
            key: ParameterKey,
            expression: string,
            page: number = 1,
            resultsPerPage: number = 1,
            maxResults: number = 1
        ) => {
            setError(null)
            searchImages(
                key,
                expression,
                setImagesData,
                setIsLoading,
                setError,
                page,
                resultsPerPage,
                maxResults
            )
        },
        []
    )

    return {
        searchForExpression,
        imagesData,
        isLoading,
        error
    }
}
