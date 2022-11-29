import React from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const ProductsList = () => {
  let [products, setProducts] = useState([])


  useEffect(() => {
    Axios.get(`http://localhost:3000/products`).then((response) => {
      setProducts(response.data)
    })
      .catch(() => { })
  }, [])

  return <>
    <h1>Product List</h1>
    <div className="container">
      <div className="row">
        {
          products.length > 0 ? <>
            {
              products.map((product) => {
                return <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <img src={product.image} height="150px" width="150px" alt='go man' />
                    </div>
                    <div className="card-body">
                      <li className="list-group-item">Name:{product.name}</li>
                      <li className="list-group-item">Price:{product.price}</li>
                      <li className="list-group-item">Qty:{product.qty}</li>
                    </div>
                  </div>
                </div>
              })
            }
          </> : <><h1>No Products</h1></>
        }
      </div>
    </div>
  </>
}

export default ProductsList