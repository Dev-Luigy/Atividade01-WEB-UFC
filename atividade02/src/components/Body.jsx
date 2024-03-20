import './Body.css';

const styles = { 
    Body: {
        backgroundColor: '#383838',
        padding: '0 10px 10px 10px',
        borderRadius: '0 0 10px 10px',
        overflow: 'auto',
    }
}


function Body ({children}) {
    return (
        <div style={styles.Body} className="box" >
            {children}
        </div>
    )
} 

export default Body;