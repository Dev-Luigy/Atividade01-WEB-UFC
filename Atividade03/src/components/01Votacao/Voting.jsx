import { useEffect, useState } from "react";
import City from "./City";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
        height: '100px',
        width: '90%',
    },
}

function Voting ({cities, cb}) {
    const [votes, setVotes] = useState(0);
    const [mostVotedCity, setMostVotedCity] = useState('');
    const [mostVotedCityVotes, setMostVotedCityVotes] = useState(0);

    useEffect(() => {
        cities.forEach(city => {
            city.cb(votes);
        });
    }, [votes]);

    useEffect(() => {
        cities.forEach(city => {
            if (city.cb(votes) > mostVotedCityVotes) {
                setMostVotedCity(city.name);
                setMostVotedCityVotes(city.cb(votes));
            }
        });
    }
    , [votes]);


    useEffect(() => {
        cb(mostVotedCity);
    }, [mostVotedCity]);

    return (
        <div style={styles.container}>
            {cities.forEach(city => {
                return (
                    <City name={city.name} description={city.description} image={city.image} cb={city.cb} />
                )
            })}
        </div>
    )
}

export default Voting;