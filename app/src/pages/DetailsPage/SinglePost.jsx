import React from 'react'
import './SinglePost.css'

const SinglePost = ({post}) => {
  return (
    <div className='post__container'>
    <div className='post__header'>

    <h1>{post.title}</h1>
    </div>
    <div className='post__body'>

    <p>{post.body}</p>
    </div>
</div>
  )
};

export default SinglePost;
