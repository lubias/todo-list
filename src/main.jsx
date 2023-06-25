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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/adicionar",
    element: <AdicionarTarefa />,
  },
  {
    path: "/editar/:id",
    element: <EditarTarefa />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
