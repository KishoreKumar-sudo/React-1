import React, { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import {Link,useNavigate,Navigate}from 'react-router-dom'

const Admin = () => {
let[products,setProducts]= useState({})
let navigate=useNavigate()
useEffect(()=>{
     Axios.get('http://localhost:3000/products')
      .then((response)=>{
      setProducts(response.data)
     })
     .catch(()=>{  })
},[])
let deleteProduct=(id)=>{
        Axios.delete(`http://localhost:3000/products/${id}`)
         .then((response)=>{
          navigate(0)
        })
        .catch(()=>{  })
};

  return <>
     <div className="container">
      <pre>{JSON.stringify(products)}</pre>
     <center><div className="col-md-8 ">
        <div className="row mt-5">
          <table className="table table-hover bg-light">
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Image</th>
                  <th>Modify</th>
                </tr>
            </thead>
            <tbody >
              {
                products.length>0?<>
                {
                  products.map((product)=>{
                  return <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.qty}</td>
                    <td>{(product.qty)*(product.price)}</td>
                    <td><img src={product.image} height="100px" width="100px" alt="no pic" /></td>
                    <td><Link to={`/edit/${product.id}`} className="btn btn-primary">Edit</Link><Link className="btn btn-danger" onClick={deleteProduct.bind(this,product.id)}>Delete</Link></td>
                  </tr>
                  })
                }
                </>:null
              }

            </tbody>
          </table>
        </div>
      </div></center> 
     </div>
    </>
  
}

export default Admin