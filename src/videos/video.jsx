import { useEffect, useState } from "react"
import { getVideos, getTopics } from "../../mockData"

export const Video = () => {
    const [videos, setVideos] = useState([])
    const [topics, setTopics] = useState([])

    useEffect(() => {
        setVideos(getVideos())
        setTopics(getTopics())
    }, [])

    const filterTopicByVideo = (v) => {
        const filteredTopic = topics.find((topic) => topic.id === v.topicId)
        return filteredTopic
    }

    return (
        videos.map(video => {
            const topic = filterTopicByVideo(video)
            return <div>
                <h1>{video.title}</h1>
                <div>{topic.topic}</div>
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