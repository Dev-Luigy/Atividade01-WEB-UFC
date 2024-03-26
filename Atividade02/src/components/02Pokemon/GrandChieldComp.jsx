import { useContext } from 'react';
import FamilyContext from './FamilyContext';

export default function GrandChieldComp() {
    const numero = useContext(FamilyContext);
    return (
        <div style={{
            borderTop: '2px solid black',
            borderRadius: '0 100px 0 0',
        }}>
            <h1>Grand Chield</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${numero+2}.png`} alt="Pukemon" />
        </div>
    );
}