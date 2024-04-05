import React, { useCallback, useState } from "react"
import { nasaImagesQueryParam, nasaImagesSearchUrl } from "../util/constants"

interface ImagesRaw {
    collection?: {
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
            links?: Array<{
                href: string
                rel: string
                render?: string
            }>
        }>
    }
}

export interface Image {
    href: string
    title: string
    description: string
    id: string
}

const searchImages = async (
    fieldValue: string,
    setImages: React.Dispatch<React.SetStateAction<Image[] | null>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<Error | null>>
) => {
    if (fieldValue === "") {
        setImages(null)
    } else {
        try {
            const url = new URL(nasaImagesSearchUrl)
            url.searchParams.set(nasaImagesQueryParam, encodeURI(fieldValue))
            setIsLoading(true)
            const fetchResponse = await fetch(url.href)
            const json: ImagesRaw = await fetchResponse.json()
            const images =
                json.collection?.items.reduce((acc: Image[], item) => {
                    const data = item.data[0]
                    const link = item.links?.find(
                        (link) => link?.render === "image"
                    )
                    if (data?.media_type === "image" && link) {
                        return [
                            ...acc,
                            {
                                href: link.href,
                                title: data.title,
                                description: data.description,
                                id: data.nasa_id
                            }
                        ]
                    }
                    return acc
                }, []) || null
            setImages(images)
            setIsLoading(false)
        } catch (e) {
            if (e instanceof Error) {
                setError(e)
            } else {
                setError(new Error("An unknown error occurred"))
                console.error(e)
            }
        }
    }
}

export const useSearchImages = () => {
    const [images, setImages] = useState<Image[] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const setSearchTerm = useCallback((term: string) => {
        setError(null)
        searchImages(term, setImages, setIsLoading, setError)
    }, [])

    return {
        searchForExpression: setSearchTerm,
        images,
        isLoading,
        error
    }
}
