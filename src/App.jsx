import { useState, useEffect } from 'react'
import './App.css'
import { getVideos } from '../mockData'

export const App = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    setVideos(getVideos())
  }, [])

  return (
    videos.map(video =>
      <div>
        <h1>{video.title}</h1>
        <iframe
          width="853"
          height="480"
          src={video.url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    ))
}


//FOR YOUTUBE API, SAVE FOR LATER
{/* <iframe height="500" width="500" src="http://youtube.com/embed/{video.id?.videoId}"></iframe > */ }

// call to YouTube API to get top 25 results from Minecraft Channel
// useEffect(() => {
//   fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyC_-kVHu2RTEkMQCmwUePpgft98MNicPuU&channelId=UC1sELGmy5jp5fQUugmuYlXQ")
//     .then(res => res.json())
//     .then(convertedData => {
//       setVideo(convertedData.items[1])
//     })
// }, [])