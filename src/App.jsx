import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import { Route, Routes } from 'react-router-dom'
import { authRoutes } from './routes/authRoutes'
import { privateRoutes } from './routes/privateRoutes'
import Sidebar from './sidebar/sidebar'

function App() {
  const userToken = localStorage.getItem('@token');
  return (
    <Routes>
      {authRoutes.map(({path,element})=>(
        <Route path={path} key={path} element={element} />
      ))}
      {privateRoutes.map(({path,element})=>(
        <Route path={path} key={path} element={<Sidebar>{element}</Sidebar>} />
      ))}
    </Routes>
  )
}

export default App
