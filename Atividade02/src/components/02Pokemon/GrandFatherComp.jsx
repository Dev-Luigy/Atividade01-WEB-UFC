'use state'
import ChieldComp from './ChieldComp';
import FamilyContext from './FamilyContext';
import { useState } from 'react';
import './GrandFatherComp.css';

const styles = {
    GrandFather: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
    },
}


export default function GrandFatherComp() {
    const [number, setNumber] = useState(1)
    function upNumber() {
        setNumber(number + 3);
    }
    return (
        <FamilyContext.Provider value={number}>
            <div style={styles.GrandFather}>
                <div style={{
                    borderBottom: '2px solid black',
                    borderRadius: '100px',
                }}>
                    <h1>Grand Father</h1>
                    
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`} alt="Pukemon" />
                </div>
                <button onClick={upNumber}>Number up!</button>
                <ChieldComp />
            </div>
        </FamilyContext.Provider>
    );
}