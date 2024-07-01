import React, { useState } from "react";
import BlogItem from "../components/BlogItem";
import { Blog_Content } from "../data";

const AuthorBlogs = () => {
  const [blogs, setBlogs] = useState(Blog_Content);
  return (
    <section>
      <div className="container  text-center">
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

export default AuthorBlogs;
