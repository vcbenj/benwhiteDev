import React from "react";
import "./../App.css";
  
  
const Blog = () => {
    var blog = {
        "title": "My first Blog",
        "content": "My first Blog is here and written. I have content all over here. There is a "
    }
  return (
    <div className="main-container">
      <h1 className="main-heading">
        {blog["title"]}
      </h1>
      <p> {blog["content"]}</p>
    </div>
  );
};
  
export default Blog;