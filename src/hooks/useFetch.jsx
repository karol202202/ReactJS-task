import { useEffect, useState } from "react"

export const FetchStatus = {
    idle: "idle",
    loading: 'loading',
    success: "success",
    error: "error",
}

export function isLoaded(status) {
    return (status !== FetchStatus.idle && status !== FetchStatus.loading)
}

export function useFetch(url) {

    const [data, setData] = useState(null)
    const [status, setStatus] = useState(FetchStatus.idle)

    useEffect(() => {
        (
            async function () {
                try {
                    setStatus(FetchStatus.loading)
                    const response = await fetch(url)
                    const data = await response.json()
                    setData(data)
                    setStatus(FetchStatus.success)
                } catch (err) {
                    setStatus(FetchStatus.error)
                }
            }
        )()
    }, [url])

    return { data, status }

}