const styles = {
    Header: {
        backgroundColor: '#282c34',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px 30px 20px',
        borderRadius: '10px 10px 0 0',

        overflow: 'auto',
    },
    userInfo: {
        padding: '20px',
        backgroundColor:'#e6e6e6',
        borderRadius: '10px',
        textAlign: "left",
        display: "grid",
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        // justifyItems: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
        alignContent: "center",
        gap: '10px 50px',

    },

    h2: {
        marginTop: '10px',
        backgroundColor: '#e6e6e6',
        borderRadius: '10px 10px 0 0',
        padding: '10px 10px 5px 10px',
        marginBottom: '-2px',
    },

    p: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
}

function Header() {
  return (
    <header style={styles.Header}>
        <h2 style={styles.h2}>Atividade 2</h2>
        <div style={styles.userInfo}>
            <p style={styles.p}><strong>Aluno:</strong> Luigy Gabriel de Oliveira Ferreira</p>
            <p style={styles.p}><strong>Matricula:</strong> 542161</p>
            <p style={styles.p}><strong>Curso:</strong> Engenharia de Software</p>
            <p style={styles.p}><strong>Semestre:</strong> 5º Semestre</p>
        </div>
    </header>
  );
}

export default Header;