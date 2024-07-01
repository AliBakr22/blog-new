import React from "react";
import Blog from "../components/Blogs";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="col-md-12 md-4 mt-4 text-center">
          <h1 className="main-heading fs-1">Latest Blogs</h1>
          <div className="underline mx-auto rounded-3"> </div>
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default Home;
