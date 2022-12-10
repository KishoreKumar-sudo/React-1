import React, { useState, useEffect } from 'react'
import Posts from './Component/Posts';
import Pagination from './Component/Pagination';
import axios from 'axios';
const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);
  //console.log(posts);

  //Get Current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 
  // Change  Page
    const paginate = (pageNumber)=>setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-danger mb-4'>App</h1>
      <Posts posts={posts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  )
}

export default App