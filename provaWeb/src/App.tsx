import './App.css'
import { Questao01A, Questao01B } from './Questoes/Questao1'
import { Questao02B } from './Questoes/Questao2'
import Questao03 from './Questoes/Questao3'
import Questao04 from './Questoes/Questao4'

const lista = [
  { a: 10, b: 3, c: 7 },
  { a: 5, b: -3, c: 9 },
  { a: 1, b: 9, c: 40 },
]

function App() {

  return (
    <>
      <Questao01A list={lista}>
        <Questao01B />
      </Questao01A>
      <Questao02B pokemonId={1} isPokemonLookingFront={true} />
      <Questao03 />
      <Questao04 />
    </>
  )
}

export default App
