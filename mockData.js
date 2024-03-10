const database = {
    users: [
        {
            id: 1,
            first_name: "Caroline",
            last_name: "Madison",
            password: null,
            email: "password@gmail.com",
        },
    ],
    kids: [
        {
            id: 1,
            username: "JoeTV",
            birthdate: "03-10-2017",
            avatar: null,
            userId: 1
        }
    ],
    videos: [
        {
            id: 1,
            url: "https://youtube.com/embed/bXlalGvxkaY?si=3M3uit9K",
            title: "Investigating the Titanic",
            channel: "National Geographic",
            time: "44:24",
            upload_date: "2023-01-28",
            topicId: 1,
            userId: 1
        },
        {
            id: 2,
            url: "https://www.youtube.com/embed/C4-ue5xAIIw?si=D53_K23raCLCRBRg",
            title: "What's the Best Survival Strategy in Minecraft?",
            channel: "Beef and Cheese",
            time: "8:51",
            upload_date: "2023-10-21",
            topicId: 2,
            userId: 1
        }
    ],
    topics: [
        {
            id: 1,
            topic: "History"
        },
        {
            id: 2,
            topic: "Minecraft"
        }
    ],
    playlists: [
        {
            id: 1,
            title: "My first playlist",
            kidId: 1
        },
        {
            id: 2,
            title: "Joseph's playlist",
            kidId: 1
        }
    ],
    playlist_videos: [
        {
            id: 1,
            playlistId: 1,
            videoId: 1
        },
        {
            id: 2,
            playlistId: 2,
            videoId: 2 
        }
    ]
}

export const getVideos = () => {
    return [...database.videos]
}

export const getPlaylists = () => {
    return [...database.playlists]
}

export const getTopics = () => {
    return [...database.topics]
}

export const getPlaylist_Videos = () => {
    return [...database.playlist_videos]
}