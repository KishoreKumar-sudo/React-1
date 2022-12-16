import React, { useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import CreateProduct from './Components/CreateProduct'
import Products from './Components/Products'
import Admin from './Components/Admin'
import Home from './pages/Home/Home'
import Edit from './Components/Edit'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css"

const App = () => {
  useEffect(()=>{
    <Home/>
  },[])
  return (
    <>
      <Router>
        <Navbar />
       
        <Routes>
          <Route path='/createproduct' element={<CreateProduct />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/edit/:id' element={<Edit />}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App