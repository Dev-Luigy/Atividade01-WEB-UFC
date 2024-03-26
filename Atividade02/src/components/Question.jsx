const styles = {
    box: {
        backgroundColor: '#e6e6e6',
        padding: '10px',
        borderRadius: '0 10px 10px 10px',
        margin: '10px',
        overflowX: 'auto',

        border: '2px solid black',
    },
    answerBox: {
        backgroundColor: '#d0d0d0',
        padding: '10px',
        borderRadius: '10px',
        margin: '10px',
    },
}


function Question ({children}) {
    return (
        <div style={styles.box}>
            <div style={styles.answerBox}>
                {children}
            </div>
        </div>
    )
}

export default Question;