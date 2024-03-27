import { useState } from "react";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
        width: '90%',
        height: '100%'
    },
    image: {
        width: '90%'
    }
}

function City ({name, description, image, cb}) {
    const [voteCount, setVoteCount] = useState(0);

    cb(voteCount);

    return (
        <div style={styles.container}>
            <h2>{name}</h2>
            <p>{description}</p>
            <img style={styles.image} src={image} alt={name} />
            <p>Votes: {voteCount}</p>
            <button onClick={() => setVoteCount(voteCount + 1)}>Vote</button>
        </div>
    )
}

export default City;