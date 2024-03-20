import GrandChieldComp from './GrandChieldComp';
import FamilyContext from './FamilyContext';
import { useContext } from 'react';

export default function FatherComp() {
    const number = useContext(FamilyContext);
    return (
        <div>
            <h1>Chield</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${number+1}.png`} alt="Pukemon" />
            <GrandChieldComp />
        </div>
    );
}