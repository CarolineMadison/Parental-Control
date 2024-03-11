const database = {
    users: [
        {
            id: 1,
            first_name: "Caroline",
            last_name: "Madison",
            password: null,
            email: "password@gmail.com",
        },
        {
            id: 2,
            first_name: "Paige",
            last_name: "Miskin",
            password: null,
            email: ""
        },
        {
            id: 3,
            first_name: "MJ",
            last_name: "Green",
            passworkd: null,
            email: ""
        }
    ],
    kids: [
        {
            id: 1,
            username: "JoeTV",
            birthdate: "03-10-2017",
            avatar: null,
            userId: 1
        },
        {
            id: 2,
            username: "Quinn",
            birthdate: "10-01-2015",
            avatar: null,
            userId: 2
        },
        {
            id: 3,
            username: "Smiles",
            birthdate: "06-28-2015",
            avatar: null,
            userId: 3
        },
        {
            id: 4,
            username: "Amelia Bedelia",
            birthday: "01-10-2018",
            avatar: null,
            userId: 3
        },
        {
            id: 5,
            username: "Meow meow",
            birthday: "03-16-2019",
            avatar: null,
            userId: 2

        }
    ],
    videos: [
        {
            id: 1,
            url: "https://youtube.com/embed/bXlalGvxkaY?si=3M3uit9K",
            title: "Investigating the Titanic",
            channel: "National Geographic",
            upload_date: "2023-01-28",
            topicId: 1,
            userId: 1
        },
        {
            id: 2,
            url: "https://www.youtube.com/embed/C4-ue5xAIIw?si=D53_K23raCLCRBRg",
            title: "What's the Best Survival Strategy in Minecraft?",
            channel: "Beef and Cheese",
            upload_date: "2023-10-21",
            topicId: 2,
            userId: 1
        },
        {
            id: 3,
            url: "https://www.youtube.com/embed/VFGKqwQVze0",
            title: "ASMR Mukbang Turtle Tortoise Eating 10 Foods",
            channel: "Animal ASMR",
            upload_date: "",
            topicId: 6,
            userId: 3

        },
        {
            id: 4,
            url: "https://www.youtube.com/embed/sH48lKbayNU",
            title: "",
            channel: "MrBeast",
            upload_date: "",
            topicId: 7,
            userId: 3 
        },
        {
            id: 5,
            url: "https://www.youtube.com/embed/afmFl7ToYKw",
            title: "",
            channel: "Animal ASMR",
            upload_date: "",
            topicId: 6,
            userId: 2
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
        },
        {
            id: 3,
            topic: "Art"
        },
        {
            id: 4,
            topic: "Current Events"
        },
        {
            id: 5,
            topic: "Sports"
        },
        {
            id: 6,
            topic: "Animals"
        },
        {
            id: 7,
            topic: "MrBeast"
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

export const getKids = () => {
    return [...database.kids]
}