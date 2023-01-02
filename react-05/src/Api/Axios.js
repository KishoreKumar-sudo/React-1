import { faF } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
// import Api from '../Api/Axios.js'


import React, { useEffect, useState } from 'react'

const Axios = () => {
    let [data,setData]=useState([])
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>{setData(res.data)})
      .catch(()=>{})
    },[])
  return data
}

export default Axios
// export const api = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com'
// })

// //read the data
// export const getPosts = async () => {
//     const response = await api.get('/posts')
//     return response.data
// }