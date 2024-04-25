import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import { Route, Routes } from 'react-router-dom'
import { authRoutes } from './routes/authRoutes'
import { privateRoutes } from './routes/privateRoutes'

function App() {

  return (
    <Routes>
      {authRoutes.map(({path,element})=>(
        <Route path={path} key={path} element={element} />
      ))}
      {privateRoutes.map(({path,element})=>(
        <Route path={path} key={path} element={element} />
      ))}
    </Routes>
  )
}

export default App
