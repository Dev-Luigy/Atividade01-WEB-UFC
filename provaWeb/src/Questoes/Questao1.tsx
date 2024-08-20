import React from 'react';

type List = { a: number; b: number; c: number };


// Definindo as interfaces para os componentes
interface Questao01AProps {
  list: List[];
  children: React.ReactElement;  // Garantindo que children seja um ReactElement
}

// Definindo a interface para o componente Questao02B
interface Questao01BProps {
  list?: List[];  // list é opcional e pode ser um array de List
}

export const Questao01A: React.FC<Questao01AProps> = ({ list, children }) => {
  return (
    <div style={{
      width: '500px',
      padding: '10px',
      border: '1px solid #000',
      borderRadius: '5px',
      height: '120px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h2>Questão 01:</h2>
      {React.cloneElement(children, { list })}
    </div>
  )
}

export const Questao01B: React.FC<Questao01BProps> = ({ list = [] }) => {
  return (
    <div>
      {/* // Exibindo o maior valor de cada objeto da lista, para cada vetor. */}
      {list.map((e, index) => (
        <span key={index}>
          {index}: {Math.max(e.a, e.b, e.c)}<br />
        </span>
      ))}
    </div>
  );
}
