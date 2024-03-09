import { useEffect, useState } from "react"
import { getVideos } from "../../mockData"

export const Video = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        setVideos(getVideos())
    }, [])

    return (
        videos.map(video => {
            return <div>
                <h1>{video.title}</h1>
                <iframe
                    width="853"
                    height="480"
                    src={video.url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="embedded YouTube"
                />
            </div>
        })
    )
}