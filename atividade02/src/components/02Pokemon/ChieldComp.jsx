import GrandChieldComp from './GrandChieldComp';
import FamilyContext from './FamilyContext';
import { useContext } from 'react';

export default function FatherComp() {
    const number = useContext(FamilyContext);
    return (
        <div style={
            {
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                width: "100%",
            }
        }>  
            <div style={{
                borderTop: '2px solid black',
                borderRadius: '100px 0 0 0',
            }}>
                <h1>Chield</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${number+1}.png`} alt="Pukemon" />
            </div>
            <GrandChieldComp />
        </div>
    );
}