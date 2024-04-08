import { useState } from "react";
import styles from "./City.module.css";

function City ({name, description, image, cb}) {
    const [voteCount, setVoteCount] = useState(0);

    function handleVoteCount() {
        setVoteCount(voteCount + 1);
        cb(voteCount);
    }

    return (
        <div className={styles.container}>
            <h2 style={{marginTop: '10px'}}>{name}</h2>
            <img className={styles.image} src={image} alt={name} />
            <p>Votes: {voteCount}</p>
            <button onClick={handleVoteCount} className={styles.button}>Vote</button>
        </div>
    )
}

export default City;