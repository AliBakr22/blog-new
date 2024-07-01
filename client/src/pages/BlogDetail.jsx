import React from "react";
import BlogAuthor from "../components/BlogAuthor";
import { Link } from "react-router-dom";
import blog1 from "../images/blog1.jpg";
const BlogDetail = () => {
  return (
    <section className="blog_details">
      <div className="container blog_detail_container">
        <div className="blog_detail_header d-flex mb-1.5 justify-content-between">
          <BlogAuthor />
          <div className="blog_detail_buttons grid gap-3">
            <Link to={`/blogs/werwer/edit`} className="btn-style main">
              Edit
            </Link>
            <Link to={`/blogs/werwer/delete`} className="btn-style danger main">
              Delete
            </Link>
          </div>
        </div>
        <h1 className="mt-3">this is my title</h1>
        <div className="Blog_details_cover  ">
          <img src={blog1} alt="" className="rounded-4 mb-4" />
        </div>
        <div className="Blog-body ">
          <p>
            "Coffee, a beloved beverage for many, has sparked debates about its
            impact on health. Dive into the latest research findings to uncover
            the truth about how coffee affects our bodies, from its potential
            benefits to its possible drawbacks. ",
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            fugit, officia saepe tenetur quam iure! Nesciunt vel a repellendus
            quasi!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
