import { useState, useEffect } from 'react'


export const useFetch = (url, cb) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        const p = new Promise((res, rej) => {
            setTimeout(() => res(initialArticles), 600)
        })
        p.catch(x => console.log(x))
        
        const result = await p

        setData(result)
        setLoading(false)
    }

    useEffect(() => {
        const load = async () => {
            await fetchData()
            cb(data)
        }
        load()
    }, [])

    return [data, loading]
}