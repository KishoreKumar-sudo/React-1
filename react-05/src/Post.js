const Post = (props) => {
  let post=props.post
  // console.log(post)
return(
    <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Post ID:{post.id}</p>
    </article>
)
}
export default Post