import React from 'react'
import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Axios from 'axios'
import { useEffect } from 'react'
const Edit = () => {
      //let[selectedId,setSelectedId]=useState(useParams().id)
     let selectedId =useParams().id

  let [selectedProduct, setSelectedProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: ""
  })
  let [submitted, setSubmitted] = useState(false)
 /* let setId=(id)=>{
      setSelectedId(id)
}; */ 
useEffect(()=>{
      Axios.get(`http://localhost:3000/products/${selectedId}`)
       .then((response)=>{
          setSelectedProduct(response.data)
      })
      .catch(()=>{  })
},[])


  let getData = (event) => {
    setSelectedProduct({ ...selectedProduct, [event.target.name]: event.target.value })
  };
  let submitData = (e) => {
    e.preventDefault()
    let url = `http://localhost:3000/products/${selectedId}`
    Axios.put(url, selectedProduct)
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
        setSelectedProduct({ ...selectedProduct, image: reader.result })
      }
    })
  };

  return (
    <>
      <h1>CreateProduct</h1>
      <div className="container">
        <pre>{JSON.stringify(selectedProduct)}</pre>
        <pre>{JSON.stringify(submitted)}</pre>
        {
          submitted ? <><Navigate to="/products" /></> :

              <>
              <div className="row">
                <div className="col-md-5">
                  <div className="card">
                    <div className="card-header bg-info text-white">
                      <h1>CreateProduct</h1>
                    </div>
                    <div className="card-body">
                      <form onSubmit={submitData}>
                        <div className="form-group">
                          <input type="text" name="name" placeholder='Product Name' value={selectedProduct.name} onChange={getData} className='form-control' />
                        </div>
                        <div className="form-group">
                          <input type="file" name="image" placeholder='Image'onChange={changeImage} className='form-control' />
                          <img src={selectedProduct.image} height="40px" width="35px" alt="" />
                        </div>
                        <div className="form-group">
                          <input type="number" name="price" placeholder='Price' value={selectedProduct.price}  onChange={getData} className='form-control' />
                        </div>
                        <div className="form-group">
                          <input type="number" name="qty" placeholder='QTY' value={selectedProduct.qty}  onChange={getData} className='form-control' />
                        </div>
                        <div className="form-group">
                          <input type="text" name="info" placeholder='Information'value={selectedProduct.info}  onChange={getData} className='form-control' />
                        </div>
                        <input type="submit" className='btn btn-warning' value="Create Product" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>
        }

      </div>
    </>
  )
}

export default Edit