// eslint-disable-next-line no-unused-vars
import React from "react"
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Register from "./pages/Register"
import Login from "./pages/Login"
import { Toaster } from 'react-hot-toast';
import Navbar from "./components/Navbar";

function App() {
  

  return (
    <>
    <Toaster/>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
      
    
    
    
    </>
  )
}

export default App
