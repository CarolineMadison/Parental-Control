import './App.css'
import { Video } from './Videos/video'
import { Playlist } from './Playlists/playlist'
import { Kid } from './Kids/kid'

export const Parental_Control = () => {

  return (
    <>
      <Video />
      <Playlist />
      <Kid />
    </>
  )
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