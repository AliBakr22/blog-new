import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/profile pic.jpg";

const BlogAuthor = () => {
  return (
    <Link
      to={`/blogs/users/sdfsdf`}
      className="blog_author d-flex align-items-start  text-1"
    >
      <div className="blog-author-avatar rounded-4 ">
        <img src={Avatar} alt="" />
      </div>
      <div className="blog-author-details">
        <h5>By: Sara Ahmad </h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default BlogAuthor;
