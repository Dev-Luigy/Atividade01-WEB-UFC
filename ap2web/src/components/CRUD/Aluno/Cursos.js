import AlunoService from "../Services/AlunoService";
import FirebaseContext from "../Utils/FirebaseContext";

import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import React from "react";

const Cursos = () => {
  const [alunos, setAluno] = useState([]);
  const [isClassifyed, setIsClassifyed] = useState(false);
  const [media, setMedia] = useState(0);
  const [courses, setCourses] = useState([]);
  const firebase = useContext(FirebaseContext);

  useEffect(
    () => {
      AlunoService.listar(
        firebase.getFirestoreDb(),
        (alunos) => {
          setAluno(alunos)
          setMedia(alunos.reduce((a, b) => a + b.ira, 0) / alunos.length)
          setCourses(Array.from(new Set(alunos.map(aluno => aluno.curso))))
        }
      )
    }, [firebase]
  )
  console.log(courses)

  const handleDelete = (id) => {
    if (window.confirm(`Deseja excluir id = ${id}`)) {
      AlunoService.apagar(
        firebase.getFirestoreDb(),
        (response) => {
          const result = alunos.filter((aluno) => aluno.id !== id);
          setAluno(result);

          // Atualizar cursos únicos após exclusão
          const uniqueCourses = [...new Set(result.map(aluno => aluno.curso))];
          setCourses(uniqueCourses);
        },
        id
      );
    }
  };

  return (
    <div className="page-content">
      <h1>Listar Aluno</h1>
      <div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Nome</th>
              <th>IRA</th>
            </tr>
          </thead>
          <tbody>
            {courses?.map((course) => (
              <React.Fragment key={course}>
                <tr>
                  <td colSpan="4" style={{ fontWeight: "bold", backgroundColor: "#eee" }}>
                    {course}
                  </td>
                </tr>
                {alunos
                  .filter((aluno) => aluno.curso === course)
                  .map((aluno) => (
                    <tr key={aluno.id} style={{ backgroundColor: isClassifyed ? (aluno.ira < media ? "#F55" : "#55F") : "" }}>
                      <td style={{ width: "50%" }}>{aluno.nome}</td>
                      <td>{aluno.ira}</td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cursos;
