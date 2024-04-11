import React from "react"
import { Helmet } from "react-helmet"
import { useVersionCheckAndRefresh } from "../hooks/versionCheckAndRefresh"

interface PageProps {
    subTitle?: string
    children: React.ReactNode
}

export const Page = ({ subTitle, children }: PageProps) => {
    useVersionCheckAndRefresh()

    return (
        <>
            <Helmet>
                <title>
                    NASA Image Search{subTitle ? ` | ${subTitle}` : ""}
                </title>
            </Helmet>
            <div className="App">{children}</div>
        </>
    )
}
