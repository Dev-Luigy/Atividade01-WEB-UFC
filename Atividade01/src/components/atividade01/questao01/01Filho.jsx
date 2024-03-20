
let style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: '10px',

    border: '2px solid black',
    borderRadius: '20px',

    width: '95%',
}

const calcularIMC = (peso, altura) => {
    return peso / (altura * altura);
}

const classificarIMC = (imc) => {
    if (imc < 18.0) {
        style = {
            ...style,
            backgroundColor: 'rgba(255, 255, 0, 0.7)',
        }
        return "Abaixo do peso";
    } else if (imc > 25) {
        style = {
            ...style,
            backgroundColor: 'rgba(255, 0, 0, 0.7)',
        }
        return "Acima do peso";
    }
    else {
        style = {
            ...style,
            backgroundColor: 'rgba(0, 255, 0, 0.7)',
        }
        return "Peso ideal";
    }
}


export function Filho({peso, altura, numero}) {
    const imc = calcularIMC(peso, altura);
    return (
        <div style={style}>
            <h3>Filho { numero }</h3>
            <p>Altura: {altura}</p>
            <p>Peso: {peso}</p>
            <h3 style={{
                marginTop: '10px',
            }}>{classificarIMC(imc)}</h3>
        </div>
    );
}