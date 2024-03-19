import './App.css';
import { Pai } from './components/atividade01/questao01/01Pai';
import { Filho } from './components/atividade01/questao01/01Filho';
import Header from './components/Header';
import Body from './components/Body';
import MeuPc from './components/atividade01/02MeuPc';
import Battle from './components/atividade01/03Batalha';

const images = {
  baki: "https://scc10.com.br/wp-content/uploads/2022/05/Baki-campeao-850x560-1.jpg",
  kengan: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUxMUDlC5TZ7phcya3JBXdteM7cd-fBMNjRZzrgPXfVJItEgY5s_k00kRmxdZ0aox23pvBn6qZFyuMuU5Wa2mEtjpdqCnHvB-cPW.jpg?r=865",
  ichigo: "https://dailyanimeart.files.wordpress.com/2016/06/bleach-678-ichigos-new-bankai-by-kiraka-hitomi.jpg?w=1200",
  yhwach: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/Yhwach-TYBW.jpg"
}

const style = {
  containerItem: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',

    backgroundColor: '#f0f0f0',
    borderRadius: '20px',
    border: '2px solid black',
    marginBottom: '10px',
    fontFamily: 'Fira Code, monospace',
    padding: '20px',
  },
  h2: {
    padding: '35px 28px',
    margin: '0',
    borderRight: '2px solid black',
    borderTop: '2px solid black',
    borderBottom: '2px solid black',
    borderRadius: '20px 0 0 20px',

    backgroundColor: '#55AFAD',
  }
}

function App() {
  return (
    <div style={
      {
        fontFamily: 'Fira Code, monospace',
        background: `linear-gradient(#07162E, #0D2A4E, #0D2A4E, #07162E)`,
        height: '100%',
        width: '100%',
        padding: '0 20px 20px 0',
      }
    
    }>
      <Header />
      <Body>
        <h1>Questão 01</h1>
        <Pai numero={1}>
          <Filho peso={100} altura={1.80} numero={1} />
          <Filho peso={80} altura={1.80} numero={2} />
          <Filho peso={60} altura={1.80} numero={3} />
          <Filho peso={40} altura={1.80} numero={4} />
          <Filho peso={20} altura={1.80} numero={5} />
        </Pai>
        <Pai numero={2}>
          <Filho peso={100} altura={1.60} numero={1} />
          <Filho peso={80} altura={1.60} numero={2} />
          <Filho peso={60} altura={1.60} numero={3} />
          <Filho peso={40} altura={1.60} numero={4} />
        </Pai>
        <Pai numero={3}>
          <Filho peso={100} altura={1.70} numero={1} />
          <Filho peso={80} altura={1.70} numero={2} />
          <Filho peso={60} altura={1.70} numero={3} />
        </Pai>


        <h1>Questão 02</h1>
        <div style={style.containerItem} >
            <h2 style={style.h2}>PC</h2>
            <MeuPc.PlacaMae nome="AMD Ryzen 5 3600" preço={1500} />
            <MeuPc.PlacaDeVideo nome="Gigabyte GeForce RTX 3060 Ti" preço={4000} />
            <MeuPc.Memoria nome="HyperX Fury 8GB" preço={300} />
        </div>

        <h1>Questão 03</h1>
        <Battle.World>
          <Battle.BattleArena name="Clube da Luta">
            <Battle.Hero name="Baki" image={images.baki} />
            <Battle.Enemy name="Kengan" image={images.kengan} />
          </Battle.BattleArena>
          <Battle.BattleArena name="Palácio do Rei das Almas">
            <Battle.Hero name="Ichigo" image={images.ichigo} />
            <Battle.Enemy name="Yhwach" image={images.yhwach} />
          </Battle.BattleArena>
        </Battle.World>
        
        </Body >
    </div>
  );
}

export default App;
