import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './app'
import './index.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Login from './Login/Login'
import Cadastro from './Cadastro/Cadastro'




const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
  },

  {
    path:'/login',
    element:<Login/>,
  },

  {
    path:'/cadastro',
    element:<Cadastro/>,
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
