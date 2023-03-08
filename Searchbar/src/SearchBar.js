// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

//Here comes the props concept
const SearchBar = (props) => {
let posts=props.posts
let setSearchResults=props.setSearchResults
//    let [searchName,setSearchName]=useState("")
   let getInput=(e)=>{
    //    setSearchName(e.target.value)
       if (!e.target.value) return setSearchResults(posts)
    const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))
     setSearchResults(resultsArray)
    
   }
   let filterFunction=(e)=>{
    e.preventDefault()
    
   }
    //In-order to avoid reloading everytime
    // const handleSubmit = (e) => e.preventDefault()

    //If we don't provide/delete the value when search result is empty 
    // const handleSearchChange = (e) => {
    //     if (!e.target.value) return setSearchResults(posts)

    //     //If it has the search result it will return true value using "includes"
    //     //You will get all of the title & body of the title wherever we have these
    //     const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

    //     setSearchResults(resultsArray)
    // }
    return (
        <header>
            {/* <form className="search" onSubmit={handleSubmit}> */}
            <form className="search" onSubmit={filterFunction}>
                <input className="search__input"
                    type="text"
                    id="search"
                    // onChange={handleSearchChange}
                    onChange={getInput}
                />
                < button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </header>
    )
}

export default SearchBar