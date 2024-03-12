import './App.css'
import { Video } from './Videos/video'
import { Playlist } from './Playlists/playlist'
import { Kid } from './Kids/kid'
import { getUsers, getKids } from '../mockData.js'
import { useEffect, useState } from 'react'

export const Parental_Control = () => {

  let kid = {}

  localStorage.setItem("parentId", 1)
  const item = parseInt(localStorage.getItem("parentId"))
  const users = getUsers()
  const kids = getKids()
  
  let parentsKids = []
  let parent = {}


  for (const user of users) {
    if (user.id === item) {
      parent = user
      for (const k of kids) {
        if (parent.id === k.userId) {
          parentsKids.push(k)
        }
      }
    }
  }

  kid = parentsKids[0]

  return (
    <>
      <Video />
      <Playlist parentId={item} kid={kid}/>
      <Kid kid={kid}/>
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