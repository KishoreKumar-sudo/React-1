import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
const App = () => {
  return (
 <div>
  <Router>
      <Navbar />
  </Router>
  </div>
  )
}

export default App