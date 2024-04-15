import { useState } from "react";
import styles from './Father.module.css';
import { higherChildren, smallerChildren, averageChildren } from './childrenFunctions'
import Children from "./Children";

function Father({vetor = [1,2,3,4,5]}){
    const [result, setResult] = useState(0);
    
    return (
        <div className={styles.father}>
            <div className={styles.header}>
                <h1>Array: [{vetor.map((e, i) => e + (i !== vetor.length - 1 ? ',' : ''))}]</h1>
                <h1>Result: {result}</h1>
            </div>
            <Children name="Get greater" vetor={vetor} childrenFunction={higherChildren} cb={setResult} />
            <Children name="Get smaller" vetor={vetor} childrenFunction={smallerChildren} cb={setResult} />
            <Children name="Get average" vetor={vetor} childrenFunction={averageChildren} cb={setResult} />
        </div> 
    )

}

export default Father;