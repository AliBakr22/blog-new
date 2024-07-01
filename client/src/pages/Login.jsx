import React, { useState } from "react";
import "../style.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [userData, setUserData] = useState({
    userName: "",

    password: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className=" d-flex justify-content-center align-items-center  vh-100">
      <div className="row ">
        <div className="formStyle pt-3 ps-5 px-5 rounded ">
          <form>
            <h3 className="text-center mb-4"> BlogInsight </h3>
            <div className="mb-2">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                className="form-control"
                type="username"
                placeholder="Enter Username"
                name="userName"
                value={userData.userName}
                onChange={changeInputHandler}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={userData.password}
                onChange={changeInputHandler}
              />
            </div>
            <div className="mb-2">
              <input
                type="checkbox"
                className="custom-control custom-checkbox"
                id="check"
              />
              <label htmlFor="check" className="custom-input-label ms-2">
                Remember me
              </label>
            </div>
            <div className="d-grid  justify-content-center">
              <button className="btn-login mt-4 mb-4 rounded fs-5">
                Sign in
              </button>
            </div>
            <p className="text-center fs-5 ">
              <strong>Forgot </strong>
              <a href=" ">Password?</a>
            </p>
          </form>
        </div>
        <div className="formStyle  mt-3  p-2 rounded ">
          <p className="text-center  fs-5">
            <strong>Don't have an account? </strong>
            <Link to="/register">sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
