import React, { createContext, useContext, useEffect, useState } from "react"

const initialState = {
    scrollX: 0,
    scrollY: 0
}

type PageScrollContextType = typeof initialState

const PageScrollContext = createContext<PageScrollContextType>(initialState)

export const usePageScroll = () => useContext(PageScrollContext)

interface PageScrollProviderProps {
    children: React.ReactNode
}

const PageScrollProvider = ({ children }: PageScrollProviderProps) => {
    const [pageScroll, setPageScroll] =
        useState<PageScrollContextType>(initialState)

    useEffect(() => {
        const scrollListener = () => {
            const scrollX = window.scrollX
            const scrollY = window.scrollY

            setPageScroll({
                scrollX,
                scrollY
            })
        }

        scrollListener()
        document.addEventListener("scroll", scrollListener)

        return () => window.removeEventListener("resize", scrollListener)
    }, [])

    return (
        <PageScrollContext.Provider value={pageScroll}>
            {children}
        </PageScrollContext.Provider>
    )
}

export default PageScrollProvider
