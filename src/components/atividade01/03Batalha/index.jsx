const styles = {
  Fighters: {
    height: '100%',
    width: '80%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    border: '1px solid #000',
  },
  FightersImage: {
    width: '90%',
    height: '90%',
    objectFit: 'cover',
    borderRadius: '6%',
  },
  Arena: {
    display: 'grid',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    justifyItems: 'center',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '100px 1fr',
    gap: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '20px',
    border: '2px solid black',
    width: '100%',
    height: '100%',
    padding: '0 0 5px 0px',
    
  },
  World: {
    widht: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '10px',
    border: '2px solid black',
    borderRadius: '20px',
    backgroundColor: '#151515',
  }
}

styles.Hero = {
  ...styles.Fighters,
  backgroundColor: '#55AFAD',
  borderRadius: '20px 0 0 20px',
  borderRight: '2px solid black',
  borderTop: '2px solid black',
  borderBottom: '2px solid black',
  padding: '35px 28px',
}

styles.Enemy = {
  ...styles.Fighters,
  backgroundColor: '#E63946',
  borderRadius: '0 20px 20px 0',
  borderLeft: '2px solid black',
  borderTop: '2px solid black',
  borderBottom: '2px solid black',
  padding: '35px 28px',
}

function World({ children }) {
  return (
    <div style={styles.World}>
      {children}
    </div>
  );
}

function BattleArena({children, name}) {
  return <div style={styles.Arena}>
    <h2 style={
      {
        padding: '35px 28px',
        margin: '0',
        borderRight: '2px solid black',
        borderBottom: '2px solid black',
        borderLeft: '2px solid black',
        borderRadius: '10px 10px 0 0',
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        gridColumn: '1 / span 2',
      }
    
    }>Arena: { name }</h2>
    {children}
  </div>
}

function Hero({ name, image }) {
  return (
    <div style={styles.Hero}>
      <img style={styles.FightersImage} src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

function Enemy({ name, image }) {
  return (
    <div style={styles.Enemy}>
      <img style={styles.FightersImage} src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

const Battle = {
  BattleArena,
  Hero,
  Enemy,
  World,
}

export default Battle;