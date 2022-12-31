import React from 'react'
import Post from './Post'

//  we don't need to import hooks & instead we are gng to receive props
const ListPage = ({ searchResults }) => {
    const results = searchResults.map(post => <Post key={post.id} post={post} />)
    const content = results?.length ? results : <article><p>No Matching Posts</p></article>
    return (
        <main>{content}</main>
    )
}

export default ListPage