import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Rubixe-Components/Navbar/Navbar' 
import Home from './Rubixe-Components/Home'
import './App.css'
const App = () => {
  return <>
  <Router>
  <Navbar/>
  
  <Routes>
  <Route path='/' element={<Home/>}/>
  </Routes>

  </Router>
  </>
}

export default App