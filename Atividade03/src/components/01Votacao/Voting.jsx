import { useEffect, useState } from "react";
import City from "./City";
import styles from "./Voting.module.css";

function Voting ({cities, cb}) {
    const [votes, setVotes] = useState([]);
    const [mostVotedCity, setMostVotedCity] = useState([]);
    const [leastvotedCity, setLeastVotedCity] = useState([]);
    let i = 0;

    const handleVotes = (vote) => {
        let array = [...votes]
        array[vote.index] = vote;
        setVotes(array)
    }

    useEffect(() => {
        if (mostVotedCity.length === 0 && leastvotedCity.length === 0) {
            setVotes(cities.map(city => ({name: city.name, votes: 0})))
            setLeastVotedCity({name: '', votes: 0});
            setMostVotedCity({name: '', votes: 0});
        } else {
            if (!votes) return;
            setMostVotedCity(votes.reduce((prev, current) => (prev.votes > current.votes) ? prev : current));
            setLeastVotedCity(votes.reduce((prev, current) => (prev.votes < current.votes) ? prev : current));
        }
        cb({mostVotedCity, leastvotedCity});
    }
    , [votes, mostVotedCity, leastvotedCity, cb, cities]);


    return (
        <div className={styles.container}>
            <div className={styles.voteMessage}>
                <h2>Vote for your favorite city!</h2>
                <p>Click on the "Vote" button to vote for a city.</p>
            </div>
            {cities.map(city => {
                return (
                    <City name={city.name} description={city.description} key={i} image={city.image} index={i++} cb={handleVotes} />
                )
            })}
        </div>
    )
}

export default Voting;