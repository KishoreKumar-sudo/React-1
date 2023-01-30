import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const User = () => {
  let [products, setProducts] = useState({})
  
    useEffect(()=>{
        axios.get("https://dummyjson.com/products1")
        .then((response)=>{setProducts(response.data)})
        .catch((error)=>{
          // console.log(error);
        })
    })
    return <div className="container">
      <div className="row">
        <div className="col-md-6">
          {
            Object.keys(products).length > 0 ? <>
            {
            products.products.map((product)=>{
              return  <div className="card">
              <div className="card-header"></div>
              <div className="card-body">
                <h1>{product.title}</h1>
                <h3>{product.id}</h3>
                 <p>{product.description}</p>
                 <h4>{product.rating}</h4>
              </div>
            </div>
            })
          }
            </> : null
          }
          
         
        </div>
      </div>
      </div>
}
    


export default User