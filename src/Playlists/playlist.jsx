import { useEffect, useState } from "react"
import { getPlaylists, getVideos, getPlaylist_Videos } from "../../mockData"

export const Playlist = () => {
    const [playlists, setPlaylists] = useState([])
    const [playlist_videos, setPlaylist_videos] = useState([])
    const [videos, setVideos] = useState([])

    useEffect(() => {
        setPlaylists(getPlaylists())
        setPlaylist_videos(getPlaylist_Videos())
        setVideos(getVideos())
    }, [])

    const findTitleOfPlaylist = (pv) => {
        let title = ""
        const playlist = playlists.find(p => p.id === pv.playlistId)
        title = playlist.title
        return title
    }

    const filterVideosByPlaylist = (pv) => {
        const filtered = videos.filter((v) => v.id === pv.videoId)
        return filtered
    }

    return (
        playlist_videos.map(pv => {
            const title = findTitleOfPlaylist(pv);
            const videosOnPlaylist = filterVideosByPlaylist(pv);
            return (
                <div key={pv.id}>
                    <div>{title}</div>
                    {videosOnPlaylist.map(video => (
                        <iframe
                            width="853"
                            height="480"
                            src={video.url}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="embedded YouTube"
                        />
                    ))}
                </div>
            );
        })
    );
}