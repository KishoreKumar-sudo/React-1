
import axios from 'axios'
// import Api from '../Api/Axios.js'

// const AxiosData = () => {
//     let [data,setData]=useState([])
//     useEffect(()=>{
//       axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then((res)=>{setData(res.data)})
//       .catch(()=>{})
//     },[])
//   return data
// }

// export default AxiosData
export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

//read the data
export const getPosts = async () => {
    const response = await api.get('/posts')
    return response.data
}