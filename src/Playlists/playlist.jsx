//Renders the playlist of a single kid
//under construction

import { useEffect, useState } from "react"
import { getPlaylists, getVideos, getPlaylist_Videos } from "../../mockData"

export const Playlist = ({ parentId, kid }) => {
    const [playlists, setPlaylists] = useState([])
    const [playlist_videos, setPlaylist_videos] = useState([])
    const [filteredPlaylist, setFilteredPlaylist] = useState([])
    const [videos, setVideos] = useState([])

    useEffect(() => {
        setPlaylists(getPlaylists())
        setPlaylist_videos(getPlaylist_Videos())
        setVideos(getVideos())
    }, [])

    useEffect(() => {
        //get videos and kids from playlist_videos 
       
    }, [kid])

    //find kid's playlists and videos on those playlists
    //match kidId to kid.id
    //match videoId to video.id
     
    playlist_videos.map(pv => {
        if (kid.id === pv.kidId) {
            const kidsVideos = videos.filter(v => v.id === pv.videoId)
        }
    })


    //get title of playlist
    const findTitleOfPlaylist = (pv) => {
        let title = ""
        const playlist = playlists.find(p => p.id === pv.playlistId)
        title = playlist.title
        return title
    }



    return (
        playlist_videos.map(pv => {
            const title = findTitleOfPlaylist(pv)
            return (
                <div key={pv.id}>
                    <div>{title}</div>
                    {filteredPlaylist.map(video => (
                        <iframe
                            width="803"
                            height="430"
                            src={video.url}
                            allow="autoplay"
                            allowFullScreen
                            title="embedded YouTube"
                        />
                    ))}
                </div>
            );
        })
    );
}