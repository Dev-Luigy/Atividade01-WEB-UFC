import { Filho } from './01Filho';

const style = {
    display: 'flex',
    flexDirection: 'row',
    
    overflow: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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
                padding: '20px',
                margin: '0',
                borderRight: '2px solid black',
                borderTop: '2px solid black',
                borderBottom: '2px solid black',
                borderRadius: '20px 0 0 20px',

                backgroundColor: '#55AFAD',
                
            }} >Pai {numero}</h2>
            {children}
        </div>
    );
}