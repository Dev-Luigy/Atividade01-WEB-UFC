const style = {
    display: 'grid',
    overflow: 'auto',
    alignItems: 'center',
    height: '95%',
    padding: '20px',
    gap: '20px',

    width: 'calc(100% - 40px)',

    border: '2px solid black',
    borderRadius: '20px',

    }

function PlacaMae({ nome, preço }) {
    return (
        <div style={style}>
            <h2>Placa Mãe</h2>
            <p>Nome: {nome}</p>
            <p>Preço: {preço}</p>
        </div>
    )
}

function PlacaDeVideo({nome, preço}) {
    return (
        <div style={style}>
            <h2>Placa de Vídeo</h2>
            <p>Nome: {nome}</p>
            <p>Preço: {preço}</p>
        </div>
    )
}

function Memoria({nome, preço}) {
    return (
        <div style={style}>
            <h2>Memória</h2>
            <p>Nome: {nome}</p>
            <p>Preço: {preço}</p>
        </div>
    )
}

const Components ={
    PlacaMae,
    PlacaDeVideo,
    Memoria
};

export default Components;
