import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error-page text-center">
      <div className="  ">
        <h2 className="mt-2 fw-bold">Page not found</h2>
        <Link to="/" className="btn-style btn btn-lg ">
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
