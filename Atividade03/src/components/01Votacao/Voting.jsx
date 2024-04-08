import { useEffect, useState } from "react";
import City from "./City";
import styles from "./Voting.module.css";

function Voting ({cities, cb}) {
    const [votes, setVotes] = useState(0);
    const [mostVotedCity, setMostVotedCity] = useState('');
    const [mostVotedCityVotes, setMostVotedCityVotes] = useState(0);

    useEffect(() => {
        cities.map(city => {
            city.cb(votes);
        });
    }, [votes]);

    useEffect(() => {
        cities.map(city => {
            if (city.cb(votes) > mostVotedCityVotes) {
                setMostVotedCity(city.name);
                setMostVotedCityVotes(city.cb(votes));
            }
        });
    }
    , [votes]);

    return (
        <div className={styles.container}>
            <div className={styles.voteMessage}>
                <h2>Vote for your favorite city!</h2>
                <p>Click on the "Vote" button to vote for a city.</p>
            </div>
            {cities.map(city => {
                return (
                    <City name={city.name} description={city.description} image={city.image} cb={city.cb} />
                )
            })}
        </div>
    )
}

export default Voting;