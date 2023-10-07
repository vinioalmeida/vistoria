import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Error from './routes/Error/index.jsx'
import Ajuda from './routes/Ajuda/index.jsx'
import Chat_bot from './routes/Chat_bot/index.jsx'
import Nossos_servicos from './routes/Nossos_servicos/index.jsx'
import Perguntas_frequentes from './routes/Perguntas_frequentes/index.jsx'
import Sobre_nos from './routes/Sobre_nos/index.jsx'
import Login from './routes/Login/index.jsx'
import Cadastro_bike from './routes/Cadastrar_bike/index.jsx' 
import Vistoria from './routes/Cadastrar_bike/vistoria.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/cadastrar_bike',
        element: <Cadastro_bike/>
      },
      {
        path: '/vistoria',
        element: <Vistoria/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/ajuda',
        element: <Ajuda/>
      },
      {
        path: '/chat_bot',
        element: <Chat_bot/>

      },
      {
        path: '/nossos_servicos',
        element: <Nossos_servicos/>

      },
      {
        path: '/perguntas_frequentes',
        element: <Perguntas_frequentes/>

      },
      {
        path: '/sobre_nos',
        element: <Sobre_nos/>

      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
