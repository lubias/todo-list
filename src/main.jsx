import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import AdicionarTarefa from './pages/AdicionarTarefa/AdicionarTarefa';
import EditarTarefa from './pages/EditarTarefa/EditarTarefa';
import { TAREFAS_MOCK } from './mock/tarefas.mock';
import DeletarTarefa from './pages/DeletarTarefa/DeletarTarefa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={ TAREFAS_MOCK } />,
  },
  {
    path: "/adicionar",
    element: <AdicionarTarefa />,
  },
  {
    path: "/editar/:id",
    element: <EditarTarefa data={ TAREFAS_MOCK } />,
  },
  {
    path: "/deletar/:id",
    element: <DeletarTarefa data={ TAREFAS_MOCK } />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
