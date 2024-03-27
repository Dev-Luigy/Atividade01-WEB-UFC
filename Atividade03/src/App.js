import './App.css';
import Voting from './components/01Votacao/Voting';

function App() {

  function mostVotedCity(city) {
    return `Most voted city: ${city}`
  }

  return (
    <div style={{
      color: 'blue',
      fontSize: '30px',
      width: '100wh',
      height: '100vh',
      backgroundColor: 'lightgray',
      textAlign: 'center'
    }}>
      <h1>{mostVotedCity}</h1>
      <Voting cities={
        [{
          name: 'Tokyo',
          description: 'The capital of Japan',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Tokyo_%28satellite_view%29.jpg',
          cb: (votes) => console.log(`Tokyo votes: ${votes}`)
        },
        {
          name: 'New York',
          description: 'The capital of the world',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
          cb: (votes) => console.log(`New York votes: ${votes}`)
        },
        {
          name: 'London',
          description: 'The capital of England',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/London-Eye-2009.jpg',
          cb: (votes) => console.log(`London votes: ${votes}`)
        
        }]
      } cb={mostVotedCity} />
    </div>
  );
}

export default App;
