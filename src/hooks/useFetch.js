import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url, query = "") => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetch = async () => {
            try {
                setIsLoading(true)
                const { data } = await axios.get(`${url}?${query}`)
                setData(data)
            } catch (error) {
                setData([])
                setError(error)
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }
        fetch()
    }, [url, query])

    return { data, error, isLoading }
}