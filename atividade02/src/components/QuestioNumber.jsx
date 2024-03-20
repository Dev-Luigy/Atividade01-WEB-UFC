const styles = {
    h3Left : {
      textAlign: 'left',
      padding: '10px 5px 10px 10px',
      height: '50%',
      textAlign: 'center',
  
    //   marginRight: '-40px',
  
      zIndex: '1',
      
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
  
      backgroundColor: '#3A6085',
      borderRadius: '5px 50px 50px 5px',
      color: 'white',
      borderTop: '2px solid black',
      borderBottom: '2px solid black',
      borderRight: '2px solid black',
      borderLeft: '2px dashed white',
    },
    h3Right : {
      textAlign: 'left',
      marginBottom: '-15px',
      marginLeft: '10px',
      padding: '5px 5px 10px 5px',
      backgroundColor: '#3A6085',
      borderRadius: '10px 10px 0 0',
      color: 'white',
      border: '2px solid black',
    }
}

function questionNumber({children}) {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#3A3AAA',
        borderRadius: '20px 0 0 20px',
        padding: '5px 0 5px 50px',
        border: '2px solid black',
        marginRight: '-60px',
      }}>
        <h3 style={styles.h3Left}>Questão {children}</h3>
      </div>
  );
}

export default questionNumber;