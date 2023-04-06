import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { Navigate } from 'react-router-dom'
const CreateProduct = () => {
    let [product, setProduct] = useState({
        name: "",
        image: "",
        price: "",
        qty: "",
        info: ""
    })

    let [submitted, setSubmitted] = useState(false)

    let productData = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    let changeImageToString = (event) => {
        let imageFile = event.target.files[0]
        console.log(event)
        let reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.addEventListener("load", () => {
            if (reader.result) {
                setProduct({ ...product, image: reader.result })
            }
        })

    }
    let submitHandler = (event) => {
        event.preventDefault()
        let url = "http://localhost:3000/products"
        Axios.post(url, product).then((response) => {
            setSubmitted(true)

        })
            .catch(() => { })

    }

    return (<>
        <h1>Create-Product</h1>
        <div className="container">
            <pre>{JSON.stringify(product)}</pre>
            <pre>{JSON.stringify(submitted)}</pre>
            {
                submitted ? <Navigate to='/products' /> : <>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-warning text-white" >
                                    <h1>Create Product</h1>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={submitHandler}>
                                        <div className="form-group">
                                            <input type="text" name='name' placeholder='Product Name' onChange={productData} className='form-control' />
                                        </div>
                                        <div className="form-group">
                                            <input type="file" name='image' placeholder='Image' onChange={changeImageToString} className='form-control' />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" name='price' placeholder='Price' onChange={productData} className='form-control' />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" name='qty' placeholder='QTY' onChange={productData} className='form-control' />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name='info' placeholder='Description' onChange={productData} className='form-control' />
                                        </div>
                                        <input type="submit" value="CreateProduct" className='btn btn-secondary' />
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

export default CreateProduct