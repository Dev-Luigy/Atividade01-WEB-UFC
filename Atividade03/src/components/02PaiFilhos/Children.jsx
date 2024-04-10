import { useState } from "react";
import styles from './Children.module.css';

function Children({name, childrenFunction,vetor, cb}) {
    

    return (
        <div className={styles.childrenBox}>
            <button className={styles.childrenButton} onClick={() => cb(childrenFunction(vetor))}>{name}</button>
        </div>
    );
}

export default Children;