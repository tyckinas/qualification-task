import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'
import './DetailsPage.css'

const DetailsPage = () => {
    const [post, setPost] = useState({});
    const {postId} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${postId}`)
        .then(data=> setPost(data.data))
    }, [])
    console.log(post)

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
}

export default DetailsPage
