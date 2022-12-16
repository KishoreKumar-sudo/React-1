import { useState } from "react"
import React from 'react'
import { useEffect } from "react"


const RegForm = () => {

  let [emailErr, setEmailErr] = useState(null)
  let [nameErr, SetNameErr] = useState(null)
  let [mobileErr, SetMobileErr] = useState(null)
  let [passwordErr, SetPasswordErr] = useState(null)
  let [conformPasswordErr, SetConformPasswordErr] = useState(null)
  let [valid, setValid] = useState(false)

  let [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    conformPassword: ""
  })

  let getData = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    if (valid === true) {
      validateFun(userDetails)
    }
  }, [userDetails])

  let submitHandler = (e) => {
    e.preventDefault()
    setValid(true)
    let submit = validateFun(userDetails)
    if (submit === true) {
      alert("Form submitted successfully")

    }
  }
  let validateFun = (value) => {
    let name = value.name
    let email = value.email
    let mobile = value.mobile
    let password = value.password
    let conformPassword = value.conformPassword

    if (name === "") {
      SetNameErr("please enter name")
    }
    else if (name.length <= 4 || name.length >= 15) {
      SetNameErr("please enter min 4 and max 10 character only")
    }
    else if (name.length >= 4 || name.length <= 15) {
      SetNameErr("")
    }
    if (email === "") {
      setEmailErr("please enter email")
    }
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email)) {
      setEmailErr('Invalid email address')
    }
    else {
      setEmailErr("")
    }
    if (mobile === "") {
      SetMobileErr("please enter Mobile Number")
    }
    else if (mobile.length !== 10) {
      SetMobileErr("please enter min 4 and max 10 character only")
    }
    else if (mobile.length === 10) {
      SetMobileErr("")
    }
    if (!password) {
      SetPasswordErr("Please enter password")
    }
    if (!/^[A-Z]/.test(password)) {
      SetPasswordErr("Must have atleast 1 capital letter")
    }
    if (!/^(?=.*\d)/.test(password)) {
      SetPasswordErr("Must have atleast 1 number ")
    }
    else if (password.length < 4 || password.length > 10) {
      SetPasswordErr("Password requird min 4 to 10 characters")
    }
    else {
      SetPasswordErr("")
    }
    if (!conformPassword) {
      SetConformPasswordErr("Please enter password")
    }
    else if (password !== conformPassword) {
      SetConformPasswordErr("Password does't match")
    }
    else if (password === conformPassword) {
      SetConformPasswordErr("")
    }
    if (nameErr === "" && emailErr === "" && mobileErr === "" && passwordErr === "" && conformPasswordErr === "") {
      return true
    }

  }



  return <>

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <center><h2 className="h1">Registration Form</h2></center>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input type="text" className="form-control" name="name" onChange={getData} placeholder='Name' />
              <h6 className="text-danger">{nameErr}</h6>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="email" onChange={getData} placeholder='E-mail' />
              <h6 className="text-danger">{emailErr}</h6>
            </div>
            <div className="form-group">
              <input type="number" className="form-control" name="mobile" onChange={getData} placeholder='Mobile-Number' />
              <h6 className="text-danger">{mobileErr}</h6>
            </div>
            <div className="form-group">
              <input type="password" autoComplete="true" className="form-control" name="password" onChange={getData} placeholder='Password' />
              <h6 className="text-danger">{passwordErr}</h6>
            </div>
            <div className="form-group">
              <input type="password" autoComplete="true" className="form-control" name="conformPassword" onChange={getData} placeholder='Conform-Password' />
              <h6 className="text-danger">{conformPasswordErr}</h6>
            </div>
            <input type="submit" value="Register" className='btn btn-success' />
          </form>
        </div>
      </div>
    </div>
  </>
}

export default RegForm