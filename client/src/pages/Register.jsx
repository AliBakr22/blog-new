import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/register`,
        userData
      );
      const newUser = await response.data;
      if (!newUser) {
        setError("Couldn't register user. Please try again.");
      }
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center  vh-100 ">
      <div className="row">
        <div className="formStyle pt-3 ps-5 px-5 rounded ">
          <form onSubmit={registerUser}>
            <h3 className="text-center mb-4"> BlogInsight </h3>
            {error && <p className="form__error-message">{error}</p>}
            <div className="mb-2">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Username"
                name="username"
                value={userData.username}
                onChange={changeInputHandler}
                autoFocus
              />
            </div>
            <div className="mb2">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter Email"
                name="email"
                value={userData.email}
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
              <label htmlFor=" Confirm Password" className="form-label">
                Confirm Password
              </label>
              <input
                className="form-control"
                type="Password"
                placeholder="Enter Same Password"
                name="passwordConfirm"
                value={userData.passwordConfirm}
                onChange={changeInputHandler}
              />
            </div>

            <div className="d-grid justify-content-center">
              <button
                type="submit"
                className="btn-login mt-4 mb-4 rounded fs-5 "
              >
                {" "}
                Create account
              </button>
            </div>
          </form>
        </div>
        <div className="formStyle mt-3  p-2 rounded  ">
          <p className="text-center justify-content-center fs-5">
            <strong>Have an account? </strong>
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register