import AlunoService from "../Services/AlunoService"
import FirebaseContext from "../Utils/FirebaseContext"

import { useEffect, useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

const Listar = () => {

  const [alunos, setAluno] = useState([])
  const [isClassifyed, setIsClassifyed] = useState(false)
  const [media, setMedia] = useState(0)
  const navigate = useNavigate()
  const firebase = useContext(FirebaseContext)


  useEffect(
    () => {
      AlunoService.listar(
        firebase.getFirestoreDb(),
        (alunos) => {
          setAluno(alunos)
          setMedia(alunos.reduce((a, b) => a + b.ira, 0) / alunos.length)
        }
      )
    }, []
  )

  const handleDelete = (id) => {
    if (window.confirm(`Deseja excluir id = ${id}`)) {
      AlunoService.apagar(
        firebase.getFirestoreDb(),
        (response) => {
          const result = alunos.filter((aluno) => aluno.id !== id)
          setAluno(result)
        },
        id
      )
    }
  }

  const renderizarAlunos = () => {
    const vetorResultado = alunos.map(
      (aluno) => {
        const backgroundColor = isClassifyed
          ? aluno.ira < media
            ? "#F55"
            : "#55F"
          : ""; // or "transparent"
        return (
          <tr style={{ backgroundColor }} >
            <th style={{ backgroundColor }}>{aluno.id}</th>
            <td style={{ backgroundColor }}>{aluno.nome}</td>
            <td style={{ backgroundColor }}>{aluno.curso}</td>
            <td style={{ backgroundColor }}>{aluno.ira}</td>
            <td style={{ backgroundColor }}>
              <div className="button-content">
                <Link
                  to={`/aluno/editar/${aluno.id}`}
                  className="btn  btn-primary"
                >
                  Editar
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(aluno.id)}
                >
                  Apagar
                </button>
              </div>
            </td>
          </tr >
        )
      }
    )
    return vetorResultado;
  };

  return (
    <div className="page-content">
      <h1>Listar Aluno</h1>
      <button onClick={() => setIsClassifyed(!isClassifyed)}>Verificar aprovados</button>
      <div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Ira</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {renderizarAlunos()}
          </tbody>
          <tfoot style={{ backgroundColor: "linen", height: "40px" }}>
            <td>Média de Ira</td>
            <td colSpan={2}></td>
            <td >{media}</td>
            <td></td>
          </tfoot>
        </table>
      </div>
    </div >
  );
};

export default Listar
