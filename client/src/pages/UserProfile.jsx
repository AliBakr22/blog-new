import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import Avatar from "../images/profile pic.jpg";
import Dashboard from "../components/Dashboard";

const UserProfile = () => {
  const [avatar, setAvatar] = useState("");
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <div>
      <div className="container">
        <div className="col-md-12 md-4 mt-4 text-center">
          <h1 className="main-heading fs-1">Profile Page</h1>
          <div className="underline mx-auto rounded-3"> </div>
        </div>
      </div>
      <section className="profile">
        <div className="row gap-2 justify-content-center">
          <div className="col-3 card rounded-3 shadow  ">
            <div className="container profile__container ">
              <div className="profile__details">
                <div className="avatar__wrapper">
                  <div className="profile__avatar">
                    <img src={Avatar} alt="" />
                  </div>
                  {/* Form to update avatar */}
                  <form className="avatar__form">
                    <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      onChange={(e) => setAvatar(e.target.files[0])}
                      accept="png, jpg, jpeg"
                    />
                    <label htmlFor="avatar">
                      <FiEdit />
                    </label>
                  </form>
                </div>

                <h1>ali</h1>

                <form className="form d-flex  flex-column profile__form ">
                  <p className="form__error-message"> This is error masg</p>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Full Name"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <input
                    className="form-control"
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />
                </form>
                <button
                  type="submit"
                  className=" align-items-center m-2  btn-login"
                >
                  Update my details
                </button>
              </div>
            </div>
          </div>
          <div className="col-8 card rounded-3 shadow  ">
            <Dashboard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
