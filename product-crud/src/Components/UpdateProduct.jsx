import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import {Navigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'
const UpdateProduct = () => {
    let [selectedproduct, setSelectedProduct] = useState({
        name: "",
        image: "",
        price: "",
        qty: "",
        info: ""
    })

    let [submitted, setSubmitted] = useState (false)

    let selectedId = useParams().id
    
    useEffect(()=>{
      Axios.get(`http://localhost:3000/products/${selectedId}`).then((response)=>{
        setSelectedProduct(response.data)
      })
      .catch(()=>{})
    },[])

    let changeInput = (event) => {
      setSelectedProduct({...selectedproduct, [event.target.name]:event.target.value})
      console.log(event.target.value)
    }
    
    let changeImageToString = (event)=>{
        let imageFile = event.target.files[0] 
        console.log(event) 
        let reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.addEventListener("load",()=>{
            if (reader.result){
              setSelectedProduct({...selectedproduct, image:reader.result})
            }
        } )

    }
    let updateHandler=(event)=>{
        event.preventDefault()
        let url = `http://localhost:3000/products/${selectedId}`
        Axios.put(url, selectedproduct).then((response)=>{
            setSubmitted(true)
            console.log(response)
        })
        .catch(()=>{})

    }

    return (<>
        <h1>Update-Product</h1>
        <div className="container">
            <pre>{JSON.stringify(selectedproduct)}</pre>
            <pre>{JSON.stringify(submitted)}</pre>
            {
                submitted ? <Navigate to='/products'/> : <>
                <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-warning text-white" >
                            <h1>Update Product</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updateHandler}>
                                <div className="form-group">
                                    <input type="text" name='name' value={selectedproduct.name} placeholder='Product Name' onChange={changeInput} className='form-control' />
                                </div>
                                <div className="form-group">
                                    <input type="file" name='image' placeholder='Image' onChange={changeImageToString} className='form-control' />
                                      <img src={selectedproduct.image} alt="No Man" height="100px" width="100px" />
                                </div>
                                <div className="form-group">
                                    <input type="number" name='price' value={selectedproduct.price}placeholder='Price' onChange={changeInput} className='form-control' />
                                </div>
                                <div className="form-group">
                                    <input type="number" name='qty' value={selectedproduct.qty} placeholder='QTY' onChange={changeInput} className='form-control' />
                                </div>
                                <div className="form-group">
                                    <input type="text" name='info' value={selectedproduct.info} placeholder='Description' onChange={changeInput} className='form-control' />
                                </div>
                                <input type="submit" value="UpdateProduct" className='btn btn-secondary' />
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

export default UpdateProduct