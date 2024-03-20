import { useContext } from 'react';
import FamilyContext from './FamilyContext';

export default function GrandChieldComp() {
    const numero = useContext(FamilyContext);
    return (
        <div>
            <h1>Grand Chield</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${numero+2}.png`} alt="Pukemon" />
        </div>
    );
}