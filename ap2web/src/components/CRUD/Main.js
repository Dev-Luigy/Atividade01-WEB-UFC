import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Criar from "./Aluno/Criar";
import Editar from "./Aluno/Editar";
import Listar from "./Aluno/Listar";
import Cursos from "./Aluno/Cursos";

import Home from "./Home";

import Firebase from "./Utils/Firebase";
import FirebaseContext from "./Utils/FirebaseContext";

const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/aluno/criar",
          element: <Criar />
        },
        {
          path: "/aluno/editar/:id",
          element: <Editar />
        },
        {
          path: "/aluno/listar",
          element: <Listar />
        },
        {
          path: "/cursos/listar",
          element: <Cursos />
        }
      ]
    }
  ]
)

const Main = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <RouterProvider router={Router} />

    </FirebaseContext.Provider>
  )
}

export default Main
