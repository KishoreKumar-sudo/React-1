import  {getPosts} from './Api/AxiosData'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import ListPage from './ListPage'

function App() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getPosts().then((response)=>{
      setPosts(response)
      setSearchResults(response)
      return response
    }).catch(()=>{})
  },[])

  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  )
}
export default App