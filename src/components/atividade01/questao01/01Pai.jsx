import { Filho } from './01Filho';

const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '100px repeat(2, 0.5fr)',
    alignItems: 'center',
    height: '100%',
    padding: '20px',
    gap: '20px',

    border: '2px solid black',
    borderRadius: '20px',

    backgroundColor: '#f0f0f0',
}

export function Pai({ numero, children }) {
    return (
        <div style={style}>
            <h2 style={{
                marginBottom: '10px',
                gridColumn: '1 / 4',
            }} >Pai {numero}</h2>
            {children}
        </div>
    );
}