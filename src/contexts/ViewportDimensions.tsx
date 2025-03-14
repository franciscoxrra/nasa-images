import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react"

const initialState = {
    windowWidth: 0,
    windowHeight: 0
}

type ViewportDimensionsContextType = typeof initialState

const ViewportDimensionsContext =
    createContext<ViewportDimensionsContextType>(
        initialState
    )

export const useViewportDimensions = () =>
    useContext(ViewportDimensionsContext)

interface ViewportDimensionsProviderProps {
    children: React.ReactNode
}

const ViewportDimensionsProvider = ({
    children: body
}: ViewportDimensionsProviderProps) => {
    const [deviceDimensions, setViewportDimensions] =
        useState<ViewportDimensionsContextType>(
            initialState
        )

    useEffect(() => {
        const resizeListener = () => {
            const windowWidth = window.innerWidth
            const windowHeight = window.innerHeight

            setViewportDimensions({
                windowWidth,
                windowHeight
            })
        }

        resizeListener()
        window.addEventListener("resize", resizeListener)

        return () =>
            window.removeEventListener(
                "resize",
                resizeListener
            )
    }, [])

    return (
        <ViewportDimensionsContext.Provider
            value={deviceDimensions}
        >
            {body}
        </ViewportDimensionsContext.Provider>
    )
}

export default ViewportDimensionsProvider
