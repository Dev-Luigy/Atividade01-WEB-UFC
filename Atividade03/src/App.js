import './App.css';
import Voting from './components/01Votacao/Voting';
import cities from './cities';
import Body from './components/Body';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [citiesResume, setCitiesResume] = useState([{name: ""},{name: ""}]);

  return (
    <>
      <Header />
      <Body>
        <Voting cities={cities} cb={setCitiesResume} />
        {
          citiesResume.mostVotedCity && citiesResume.leastvotedCity &&
          <div style={{display: "flex", flexDirection: "row", gap:"50px"}}>
            <h2>Least voted city: {citiesResume.leastvotedCity.name}</h2>
            <h2>Most voted city: {citiesResume.mostVotedCity.name}</h2>
          </div>
        }
      </Body>

    </>
  );
}

export default App;
