import axios from 'axios'
// import Api from '../Api/Axios.js'
export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

//read the data
export const getPosts = async () => {
    const response = await api.get('posts')
    return response.data
}