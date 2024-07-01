import React, { useState } from "react";

import BlogItem from "./BlogItem";

import { Blog_Content } from "../data";

const Blogs = () => {
  const [blogs, setBlogs] = useState(Blog_Content);
  return (
    <section className="blogs">
      <div className="container text-center">
        {blogs.length > 0 ? (
          <div className="row">
            {blogs.map(({ id, cover, category, title, content, authorID }) => (
              <div key={id} className="col-md-4 mb-4">
                <BlogItem
                  blogID={id}
                  cover={cover}
                  category={category}
                  title={title}
                  content={content}
                  authorID={authorID}
                />
              </div>
            ))}
          </div>
        ) : (
          <h2>No post found</h2>
        )}
      </div>
    </section>
  );
};

export default Blogs;
