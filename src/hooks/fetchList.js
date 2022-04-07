import { useState } from "react"
import http from "./http"

const useFetchList = (url) => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchList = async () => {
        setLoading(true)
        try {
            const response = await http.get(url)
            setList(response.data)
        } catch(e) {
            setError('Error fetch list')
        } finally {
            setLoading(false)
        }
        
    }

    const removeFromList = (id) => {
        setList(list.filter(item => item.id !== id))
    }

    return {loading, error, list, fetchList, removeFromList}
}

export default useFetchList