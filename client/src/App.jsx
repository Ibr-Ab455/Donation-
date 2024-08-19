// eslint-disable-next-line no-unused-vars
import React from "react"
import { Routes, Route } from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import { Toaster } from 'react-hot-toast';

function App() {
  

  return (
    <>
    <Toaster/>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
