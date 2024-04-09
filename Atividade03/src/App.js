import './App.css';
import Voting from './components/01Votacao/Voting';
import cities from './cities';
import Father from './components/02PaiFilhos/Father';
import Body from './components/Body';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [citiesResume, setCitiesResume] = useState([{name: ""},{name: ""}]);

  return (
    <div className="App">
      <Header />
      <Body>
        <h1 style={{marginTop: "20px", marginBottom: "-20px"}}>Questão 01</h1>
        <Voting cities={cities} cb={setCitiesResume} />
        {
          citiesResume.mostVotedCity && citiesResume.leastvotedCity &&
          <div className="citiesInfo">
            <h2>Least voted city: <span style={{color: "#2f2f55"}}>{citiesResume.leastvotedCity.name}</span></h2>
            <hr style={{border: "2px solid black"}}></hr>
            <h2>Mostly voted city: <strong><span style={{color: "#2f2f55"}}>{citiesResume.mostVotedCity.name}</span></strong></h2>
          </div>
        }
        <h1 style={{marginTop: "20px"}}>Questão 02</h1>
        <Father />
      </Body>
    </div>
  );
}

export default App;
