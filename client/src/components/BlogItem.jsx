import React from "react";
import { Link } from "react-router-dom";
import BlogAuthor from "./BlogAuthor";
import "../style.css";

const BlogItem = ({ blogID, cover, category, title, content, authorID }) => {
  const blogContent =
    content.length > 200 ? content.substr(0, 155) + "..." : content;
  const blogTitle = title.length > 28 ? title.substr(0, 28) + "..." : title;

  return (
    <article className="blog p-2 pb-4 rounded-4 text-start">
      <div className="blog_cover ">
        <img className="rounded-4 " src={cover} alt={blogTitle} />
      </div>
      <div className="blog_content mt-3 ">
        <Link to={`/blogs/${blogID}`} className="text-1">
          <h3>{blogTitle}</h3>
        </Link>
        <p className=" mb-3">{blogContent}</p>
        <div className="blog_footer d-flex align-items-end mt-2 justify-content-between">
          <BlogAuthor />

          <Link
            to={`/blogs/categories/ ${category}`}
            className="btn category text-1"
          >
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
