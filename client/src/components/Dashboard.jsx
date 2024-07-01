import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Blog_Content } from "../data";

const Dashboard = () => {
  const [blogs, setBlogs] = useState(Blog_Content);
  return (
    <section className="dashboard ">
      {blogs.length ? (
        <div className="container  d-flex flex-column">
          {blogs.map((blog) => {
            return (
              <div className="align-items-start">
                <article key={blog.id} className="dashboard__post   d-flex ">
                  <div className="dashboard__post-info  gap-3">
                    <div className="dashboard__post-thumbnail  rounded-2">
                      <img src={blog.cover} alt="" />
                    </div>
                    <h5>{blog.title}</h5>
                  </div>
                  <div className="dashboard__post-actions">
                    <Link
                      to={`/blogs/${blog.id}`}
                      className="btn-style view main"
                    >
                      View
                    </Link>
                    <Link
                      to={`/blogs/${blog.id}/edit`}
                      className="btn-style main"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/blog/${blog.id}/delete`}
                      className="btn-style danger main"
                    >
                      Delete
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 className="center">You have no blogs yet.</h2>
      )}
    </section>
  );
};

export default Dashboard;
