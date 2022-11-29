import React from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateProduct from './Components/CreateProduct'
import ProductsList from './Components/ProductsList'
import Admin from './Components/Admin'
import UpdateProduct from './Components/UpdateProduct'
let App = () => {
return <>
<Router>
    <Navbar />
    <Routes>
        <Route path='/create' element={<CreateProduct/>} />
        <Route path='/products' element={<ProductsList/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/update/:id' element={<UpdateProduct/>} />
    </Routes>
</Router>
</>
}
export default App