import React from "react";
import "../style.css";
import Contact2 from "../images/contact2.jpg";

export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="col-md-12 md-4 mt-4 text-center">
          <h1 className="main-heading fs-1">Contact Us</h1>
          <div className="underline mx-auto rounded-3"></div>
        </div>
        <div className="text-center justify-content-center">
          <p className="fs-5 mb-4">
            Thank you for visiting our website! We're delighted that you're
            interested in reaching out to us. Whether you have questions,
            feedback, or inquiries about our products and services, we're here
            to help.
          </p>
        </div>
        <div className="card border border-info-subtle">
          <div className="card-body rounded-top d-flex flex-column">
            <h4 className="card-title text-decoration-underline">
              How to Reach Us:
            </h4>
            <p className="fs-5 card-text">
              Please feel free to contact us using any of the following methods:
            </p>
            <p>
              <strong className="text-decoration-underline">Phone:</strong> Call us at [+971-56-555-5555].
            </p>
            <p>
              <strong className="text-decoration-underline">Email:</strong> Send us an email at [staff@mvp-apps.ae].
            </p>
            <p>
              <strong className="text-decoration-underline">Visit Us:</strong> Drop by our office at [address].
            </p>
            <p>
              <strong className="text-decoration-underline">Social Media:</strong> Reach out to us on [@mvp].
            </p>
          </div>
          <img src={Contact2} className="card-img-bottom" alt="contact" />
        </div>
      </div>
    </div>
  );
}
