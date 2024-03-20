import ChieldComp from './ChieldComp';
import FamilyContext from './FamilyContext';
import { useContext } from 'react';

export default function GrandFatherComp() {
    const numero = useContext(FamilyContext);
    return (
        <div>
            <h1>Grand Chield</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${numero}.png`} alt="Pukemon" />
            <ChieldComp />
        </div>
    );
}