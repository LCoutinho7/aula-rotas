import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './assets/routes/Home/index.jsx'
import Produtos from './assets/routes/Produtos/index.jsx'
import EditarProduto from './assets/routes/EditarProdutos/index.jsx'
import Error from './assets/routes/Error/index.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produtos",
        element: <Produtos />,
      },
      {
        path: "/produto/editar/:id", 
        element: <EditarProduto/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
