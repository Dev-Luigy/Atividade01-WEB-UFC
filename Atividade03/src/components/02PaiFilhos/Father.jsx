import { useState } from "react";
import styles from './Father.module.css';
import { higherChildren, smallerChildren, averageChildren } from './childrenFunctions'
import Children from "./Children";

function Father({vetor = [1,2,3,4,5]}){
    const [result, setResult] = useState(0);
    
    return (
        <div className={styles.father}>
            <div className={styles.header}>
                <h1>Vetor: [{}]</h1>
                <h1>Resultado: {}</h1>
            </div>
            <Children childrenFunction={higherChildren} cb={console.log} />
            <Children childrenFunction={smallerChildren} cb={console.log} />
            <Children childrenFunction={averageChildren} cb={console.log} />
        </div> 
    )

}

export default Father;