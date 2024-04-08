import './App.css';
import Voting from './components/01Votacao/Voting';
import cities from './cities';
import Body from './components/Body';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [mostVotedCity, setMostVotedCity] = useState('');

  return (
    <>
      <Header />
      <Body>
        <Voting cities={cities} cb={setMostVotedCity} />
        <h2>Most voted city:{mostVotedCity} </h2>
      </Body>

    </>
  );
}

export default App;
