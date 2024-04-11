import * as Sentry from "@sentry/react"
import { useEffect } from "react"

// https://dev.to/flexdinesh/cache-busting-a-react-app-22lk
// https://github.com/flexdinesh/cache-busting-example/blob/master/src/App.js

// version from response - first param, local version second param
const semverGreaterThan = (latest: string, current: string) => {
    if (!latest || !current) {
        return false
    }
    const versionsA = latest.split(/\./g)
    const versionsB = current.split(/\./g)
    while (versionsA.length || versionsB.length) {
        const a = Number(versionsA.shift())
        const b = Number(versionsB.shift())
        // eslint-disable-next-line no-continue
        if (a === b) {
            continue
        }
        // eslint-disable-next-line no-restricted-globals
        return a > b || isNaN(b)
    }
    return false
}

const isObjectWithAppVersion = (obj: unknown): obj is { appVersion: string } =>
    typeof obj === "object" &&
    !!obj &&
    Object.entries(obj).some(
        ([key, value]) => key === "appVersion" && typeof value === "string"
    )

const maybeRefreshVersion = () => {
    fetch("/meta.json", { cache: "no-store" })
        .then((response) => response.json())
        .then((meta) => {
            const latest = meta.version
            const current = isObjectWithAppVersion(global)
                ? global.appVersion
                : ""
            const shouldForceRefresh = semverGreaterThan(latest, current)
            if (shouldForceRefresh) {
                window.location.href = window.location.href.split("#")[0]
            }
        })
        .catch((err) => Sentry.captureException(err))
}

export const useVersionCheckAndRefresh = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        maybeRefreshVersion()
    }, [])
}
