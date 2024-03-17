import './App.css';
import { Pai } from './components/atividade01/questao01/01Pai';
import { Filho } from './components/atividade01/questao01/01Filho';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div style={
      {
        fontFamily: 'Fira Code, monospace',
        background: `linear-gradient(#07162E, #0D2A4E, #0D2A4E, #07162E)`,
        height: '100vh',
        width: '100%',
      }
    
    }>
      <Header />
      <Body>
        <Pai numero={1}>
          <Filho peso={100} altura={1.80} numero={1} />
          <Filho peso={80} altura={1.80} numero={2} />
          <Filho peso={60} altura={1.80} numero={3} />
          <Filho peso={40} altura={1.80} numero={4} />
        </Pai>
        <Pai numero={2}>
          <Filho peso={100} altura={1.70} numero={1} />
          <Filho peso={80} altura={1.70} numero={2} />
          <Filho peso={60} altura={1.70} numero={3} />
          <Filho peso={40} altura={1.70} numero={4} />
        </Pai>
        <Pai numero={3}>
          <Filho peso={100} altura={1.60} numero={1} />
          <Filho peso={80} altura={1.60} numero={2} />
          <Filho peso={60} altura={1.60} numero={3} />
          <Filho peso={40} altura={1.60} numero={4} />
        </Pai>
      </Body >
    </div>
  );
}

export default App;
