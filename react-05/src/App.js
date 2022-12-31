import { getPosts } from './Api/Axios'
import { usestate, useEffect } from 'react'
import SearchBar from './SearchBar'
import ListPage from './ListPage'

function App() {
  const [posts, setPosts] = usestate([])
  const [searchResults, setSearchResults] = usestate([])

  useEffect(() => {
    getPosts().then(json => {
      setPosts(json)
      setSearchResults(json)
      return json
    })
  },)

  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <ListPage searchResults={searchResults} />
    </>
  )
}
export default App