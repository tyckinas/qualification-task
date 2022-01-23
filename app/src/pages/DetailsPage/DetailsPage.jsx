import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'
import SinglePost from './SinglePost'
const DetailsPage = () => {
    const [post, setPost] = useState({});
    const [error, setError] = useState(null);
    const {postId} = useParams()

    const fetchPost = async () =>{
        try{
            const res = await axios.get(`http://localhost:3000/posts/${postId}`)
            setPost(res.data)
            setError(null)
        }catch(err){
            setError(err)
            console.log(err)
        }
    }
    const GetErrorView = () => {
        return <div>Couldn't load post.</div>;
      };

    useEffect(() => {
       fetchPost()
    }, [])

    return (
        <>
        {error ? <GetErrorView /> : <SinglePost post={post}/>  }
        </>
    )
}

export default DetailsPage
