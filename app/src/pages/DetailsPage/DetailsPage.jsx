import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useMatch, useParams } from 'react-router-dom'

const DetailsPage = () => {
    const [post, setPost] = useState(null);
    const {postId} = useParams()
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(data=> setPost(data.data))
    }, [])
    console.log(post)

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default DetailsPage
