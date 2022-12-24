import React from 'react'
import RegForm from './Component/Form/RegistrationForm'
import Navbar from './Component/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from './Component/Form/LogIn'
const App = () => {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<RegForm />} />
        <Route path='login' element ={<LogIn />} />
      </Routes>
    </Router>
  </>


}

export default App