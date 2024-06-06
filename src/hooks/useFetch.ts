import { useEffect, useState } from 'react'

export const UseFetch = <T>(url: string) => {
  const [response, setResponse] = useState<T>()
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setResponse(data)
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
  }, [url])

  return { response, error }
}