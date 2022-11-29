import Axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  let [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  let getProducts=()=>{
    Axios.get(`http://localhost:3000/products`).then((response)=>{
      setProducts(response.data)
    })
    .catch(()=>{})
  }

  let deleteProduct = (id)=>{
    Axios.delete(`http://localhost:3000/products/${id}`).then((response)=>{
      getProducts()
    })
    .catch(()=>{})
  }

  return <>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <table className="table table-hover">
            <thead className="bg-secondary text-white">
              <tr>
                <td>ID</td>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                products.length > 0 ? <>
                  {
                    products.map((product) => {
                      return <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td><img src={product.image} alt="No Pic" height="150px" width="150px" /></td>
                        <td>{product.price}</td>
                        <td>{product.qty}</td>
                        <td>
                          <Link to={`/update/${product.id}`} className="btn btn-warning" >Edit</Link>&nbsp;
                          <Link to="/admin" className="btn btn-danger" onClick={deleteProduct.bind(this,product.id)}>Delete</Link>
                        </td>
                      </tr>
                    })
                  }
                </> : <><h1>Display Image</h1></>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
}

export default Admin