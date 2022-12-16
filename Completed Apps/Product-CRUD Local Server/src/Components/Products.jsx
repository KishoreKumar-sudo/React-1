import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'

import Spinner from 'react-bootstrap/Spinner';

const Products = () => {

  let [products, setProducts] = useState({})
  let [loading, setLoading] = useState()

  useEffect(() => {
    Axios.get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data)
       setLoading(false)
      })
      .catch(() => { setLoading(true)})
  }, [])
  return (
    <>
      <div className="container">
        <pre>{JSON.stringify(products)}</pre>
        <div className="row">
          
            {
              products.length > 0 ? <>
          
                  { 
                    products.map((product) => {
                      return <div className="col-md-3">
                        <div className="card mt-5">
                          <div className="card-header">
                            <center> <img id="img" src={product.image} width="150px" height="150px" alt="No pic" /></center>
                          </div>
                          <div className="card-body">
                            <ul className="list-group">
                              <li className="list-group-item" >Name:{product.name}</li>
                              <li className="list-group-item" >Price:{product.price}</li>
                              <li className="list-group-item" >Qty:{product.qty}</li>
                              <li className="list-group-item" >Total:{product.qty * product.price}</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    })
                  }
                

            </> : <>*** No Products ***</>
          }
            
          
        </div>
      </div>

    </>
  )
}

export default Products