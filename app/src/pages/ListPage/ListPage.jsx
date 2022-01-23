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

  const getErrorView = () => {
    return <div>Something went wrong.</div>;
  };

  console.log(posts);

  return <>{error ? <PostsTable posts={posts} /> : getErrorView()}</>;
};

export default ListPage;
