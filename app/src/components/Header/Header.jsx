import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
      <nav>
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/newPostForm">Create a Post</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Header;
