import React, { useState } from 'react'

const RegistrationForm = () => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    passsword: "",
    reenter: ""
  })
  const [nameerr, setNameErr] = useState()
  const [emailerr, setEmailErr] = useState()
  const [mobilenumbererr, setmobileNumberErr] = useState()
  const [passworderr, setPasswordErr] = useState()
  const [reentererr, setReenterErr] = useState()

  return <>
    <div className="container mt-5">
      <pre>{JSON.stringify(values)}</pre>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="card">
              <div className="card-header text-success">
                <h3>Registration-Form Validation Using React</h3>
              </div>
              <div className="card-body">
                <div className='form-group'>
                  <input type="text" placeholder='Name' name='name' className='form-control' onChange={values} />
                  <span className='text-danger' >Enter your valid Name</span>
                </div>
                <div className='form-group'>
                  <input type="text" placeholder='Email' name='email' className='form-control' onChange={values} />
                  <span className='text-danger' >Enter valid Email-Id</span>
                </div>
                <div className='form-group'>
                  <input type="number" placeholder='Mobile Number' name='mobilenumber' className='form-control' onChange={values} />
                  <span className='text-danger' >Enter valid Mobile-Number</span>
                </div>
                <div className='form-group'>
                  <input type="password" placeholder='Password' name='password' className='form-control' onChange={values} />
                  <span className='text-danger' >Enter your correct password</span>
                </div>
                <div className='form-group'>
                  <input type="password" placeholder='Re-Enter Password' name='reenter' className='form-control' onChange={values} />
                  <span className='text-danger' >Re-enter your password</span>
                </div>
                <input type="button" value="Submit" className='btn btn-warning' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
}

export default RegistrationForm