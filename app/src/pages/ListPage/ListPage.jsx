import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsTable from "./PostsTable";

import "./ListPage.css";

const ListPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      setPosts(res.data);
      setError(null);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const GetErrorView = () => {
    return <div>Couldn't load posts.</div>;
  };

  console.log(posts);

  return <> {error ? <GetErrorView /> : <PostsTable posts={posts} />}</>;
};

export default ListPage;
