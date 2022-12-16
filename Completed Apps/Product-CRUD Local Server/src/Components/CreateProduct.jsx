import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Axios from 'axios'

const CreateProduct = () => {
  let [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: ""
  })
  let [submitted, setSubmitted] = useState(false)
  let getData = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value })
  };
  let submitData = (e) => {
    e.preventDefault()
    let url = "http://localhost:3000/products"
    Axios.post(url, product)
      .then((response) => {
        setSubmitted(true)
      })
      .catch(() => { })
  };
  let changeImage = (event) => {
    let imageFile = event.target.files[0]
    console.log(event);
    let reader = new FileReader()
    reader.readAsDataURL(imageFile)
    reader.addEventListener("load", () => {
      if (reader.result) {
        setProduct({ ...product, image: reader.result })
      }
    })
  };

  return (
    <>
      <h1 className='text-white'>CreateProduct</h1>
      <div className="container">
        <pre>{JSON.stringify(product)}</pre>
        <pre>{JSON.stringify(submitted)}</pre>
        {
          submitted ? <><Navigate to="/products" /></> :

              <>
              <div className="row">
                <div className="col-md-5">
                  <div className="card">
                    <div className="card-header bg-info text-white">
                      <h1 >CreateProduct</h1>
                    </div>
                    <div className="card-body">
                      <form onSubmit={submitData}>
                        <div className="form-group">
                          <input type="text" name="name" id="input" placeholder='Product Name' onChange={getData} className='form-control' />
                        </div>
                        <div className="form-group">
                          <input type="file" name="image"id="input" placeholder='Image' onChange={changeImage} className='form-control' />
                        </div>
                        <div className="form-group">
                          <input type="number" name="price" id="input" placeholder='Price' onChange={getData} className='form-control' />
                        </div>
                        <div className="form-group">
                          <input type="number" name="qty" id="input" placeholder='QTY' onChange={getData} className='form-control' />
                        </div>
                        <div className="form-group">
                          <input type="text" name="info" id="input" placeholder='Information' onChange={getData} className='form-control' />
                        </div>
                        <input type="submit" className='btn button' value="Create Product" />
                      </form>
                    </div>
                  </div>
                </div>
                <div className='col-md-7'>
                </div>
              </div>
            </>
        }

      </div>
    </>
  )
}

export default CreateProduct