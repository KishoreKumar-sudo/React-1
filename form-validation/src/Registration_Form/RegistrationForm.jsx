import React, { useState } from 'react'

const RegistrationForm = () => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    password: "",
    re_enter: ""
  })
  const [nameerr, setNameErr] = useState()
  const [emailerr, setEmailErr] = useState()
  const [mobilenumbererr, setmobileNumberErr] = useState()
  const [passworderr, setPasswordErr] = useState()
  const [reEnterErr, setReEnterErr] = useState()

  let getData = (event) => {
    setvalues({ ...values, [event.target.name]: event.target.value })
  }

  let validateForm = (event) => {
    event.preventDefault()
    let name = values.name
    let email = values.email
    let mobilenumber = values.mobilenumber
    let password = values.password
    let re_enter = values.re_enter

    //validation for name
    if (name === "") {
      setNameErr("Plz enter ur name")
    }
    else if (name.length < 4 || name.length > 15) {
      setNameErr("Name must contain min 4 & max 15 characters")
    }
    else{
      setNameErr("")
    }

    //validation for email
    if (email === ""){
      setEmailErr("Plz enter ur email")
    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr("Plz enter valid Email")
    }
    else{
      setEmailErr("")
    }
  }

  //(?=.*?[A-Z]) for uppercase
  //(?=.*?[a-z]) for lower
  //(?=.*?[0-9]) for one digit
  //(?=.*?[#?!@$%^&*-]) for special character


  return <>
    <div className="container mt-5">
      <pre>{JSON.stringify(values)}</pre>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={validateForm}>
            <div className="card">
              <div className="card-header text-success">
                <h3>Registration-Form Validation Using React</h3>
              </div>
              <div className="card-body">
                <div className='form-group'>
                  <input type="text" placeholder='Name' name='name' className='form-control' onChange={getData} />
                  <span className='text-danger'>{nameerr}</span>
                </div>
                <div className='form-group'>
                  <input type="text" placeholder='Email' name='email' className='form-control' onChange={getData} />
                  <span className='text-danger'>{emailerr}</span>
                </div>
                <div className='form-group'>
                  <input type="number" placeholder='Mobile Number' name='mobilenumber' className='form-control' onChange={getData} />
                  <span className='text-danger'></span>
                </div>
                <div className='form-group'>
                  <input type="password" placeholder='Password' name='password' className='form-control' onChange={getData} />
                  <span className='text-danger'></span>
                </div>
                <div className='form-group'>
                  <input type="password" placeholder='Re-Enter Password' name='re_enter' className='form-control' onChange={getData} />
                  <span className='text-danger'></span>
                </div>
                <input type="submit" value="Submit" className='btn btn-warning' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
}

export default RegistrationForm