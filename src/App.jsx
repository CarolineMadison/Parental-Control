import { useState, useEffect } from 'react'
import './App.css'



export const App = () => {
  const [video, setVideo] = useState({
    id: 1,
    title: "Minecraft",
    url: "https://www.youtube.com/embed/gzAIyXzEXoc"
  })
  // call to YouTube API to get top 25 results from Minecraft Channel
  // useEffect(() => {
  //   fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyC_-kVHu2RTEkMQCmwUePpgft98MNicPuU&channelId=UC1sELGmy5jp5fQUugmuYlXQ")
  //     .then(res => res.json())
  //     .then(convertedData => {
  //       setVideo(convertedData.items[1])
  //     })
  // }, [])



  return (
    <>
      <h1>{video.title}</h1>
      <iframe
      width="853"
      height="480"
      src={video.url}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
      {/* <iframe height="500" width="500" src="http://youtube.com/embed/{video.id?.videoId}"></iframe > */}
    </>
  )
}