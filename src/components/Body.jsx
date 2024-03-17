const bStyle = {
    backgroundColor: 'lightblue',
    padding: '40px',
    margin: '0 auto',
    height: 'calc(100vh - 320px)',
    width: '80%',

    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    gridTemplateColumns: '1fr 1fr 1fr',

    borderRadius: '20px',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.5)',
    fontFamily: 'Fira Code, monospace',
    backdropFilter: 'blur(5px)',
    border: '2px solid white',
    marginTop: '10px',
    marginBottom: '10px',

    gap: '20px',
}

function Body({children}) {
    return (
        <div style={bStyle}>
            {children}
        </div>
    )
}


export default Body;