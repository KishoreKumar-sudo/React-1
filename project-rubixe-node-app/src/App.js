import React from 'react'
import RegForm from './Component/Form/RegistrationForm'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<RegForm />} />
        <Route path='login' element ={<Login />} />
      </Routes>
    </Router>
  </>


}

export default App