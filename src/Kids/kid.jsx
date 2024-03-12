export const Kid = ({ kid }) => {
    return (
        <>
            <div>{kid.username}</div>
            <img src={kid.avatar} alt="robot avatar"/>
        </>
    )
}