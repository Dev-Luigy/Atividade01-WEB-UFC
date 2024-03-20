import IdentificationIcon  from "@heroicons/react/24/solid/IdentificationIcon";
import AcademicCapIcon from "@heroicons/react/24/solid/AcademicCapIcon";
import UserCircleIcon from "@heroicons/react/24/solid/UserCircleIcon";
import UserGroupIcon from "@heroicons/react/24/solid/UserGroupIcon";
import background from '../images/turned-gray-laptop-computer.jpg';

const pStyle = {
    display: 'flex',
    alignItems: 'center'
}

const Header = () => {
    return (
        <header style={
            {
                zIndex: '2',
                margin: '0 auto',
                backgroundColor: 'lightblue',
                padding: '40px',
                height: '300px',
                textAlign: 'center',
                backgroundImage: `url(${background})`,
                backgroundPosition: 'right',
                backgroundSize: 'cover',
                display: 'grid',
                justifyContent: 'end',
                alignItems: 'end',
                borderRadius: '0 0 20px 20px',
                width: '80%',
                boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.5)',

                marginBottom: '10px',
            }
        
        }>
            <div style={
                {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    padding: '10px',
                    backgroundColor: 'rgba(150, 100, 200, 0.4)',
                    
                    fontFamily: 'Fira Code, monospace',
                    color: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(5px)',
                    border: '2px solid white'
                }
            
            }>
                <p style={pStyle}><UserCircleIcon width={30} height={30} /><strong>Nome:</strong> Luigy Gabriel de Oliveira Ferreira</p>
                <p style={pStyle}><UserGroupIcon width={30} height={30} /><strong>Turma:</strong> T02</p>
                <p style={pStyle}><AcademicCapIcon width={30} height={30} /><strong>Curso:</strong> Engenharia de Software</p>
                <p style={pStyle}><IdentificationIcon width={30} height={30} /><strong>Matrícula:</strong> 542161</p>

            </div>
        </header>
    );
}

export default Header;