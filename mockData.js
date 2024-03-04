const database = {
    users: [
        {
            id: 1,
            first_name: "Joseph",
            last_name: "Brownlee",
            age: 7,
            isAdmin: false
        },
        {
            id: 2,
            first_name: "Caroline",
            last_name: "Brownlee",
            age: 45,
            isAdmin: true
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
            topicId: 1
        },
        {
            id: 2,
            url: "https://www.youtube.com/embed/C4-ue5xAIIw?si=D53_K23raCLCRBRg",
            title: "What's the Best Survival Strategy in Minecraft?",
            channel: "Beef and Cheese",
            time: "8:51",
            upload_date: "2023-10-21",
            topicId: 2
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
    playlists: [],
    playlist_videos: []
}

export const getVideos = () => {
    return [...database.videos]
}