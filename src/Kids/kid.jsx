import { useState, useEffect } from "react"
import { getKids } from "../../mockData"

export const Kid = () => {
    const [kids, setKids] = useState([])

    useEffect(() => {
        setKids(getKids())
    }, [])

    return (
        kids.map(k => <div>{k.username}</div>)
    )
}   