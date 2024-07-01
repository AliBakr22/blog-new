import React from "react";
import { Link } from "react-router-dom";

import "../style.css";

export default function Navbar() {
  return (
    <nav
      className="nav-container navbar navbar-expand-lg  shadow-lg rounded-bottom-3"
      style={{ backgroundColor: "#07575B" }}
    >
      <div id="nav-div" className=" container-fluid">
        <div className="">
          <Link to="/" className=" navbar-brand  ">
            <span>BlogInsight</span>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Authors" className="nav-link active">
                <span>Authors</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Login" className="nav-link active">
                <span>Login</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Register" className="nav-link active">
                <span>Register</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/UserProfile" className="nav-link active">
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
