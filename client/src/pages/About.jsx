import React from "react";

import "../style.css";
import office from "../images/office.jpg";
import staff1 from "../images/staff1.jpg";
import staff2 from "../images/staff2.jpg";
import staff3 from "../images/staff3.jpg";

export default function About() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="col-md-12 md-4 mt-4 text-center">
            <h1 className="main-heading fs-1">About us</h1>
            <div className="underline mx-auto rounded-3"> </div>
          </div>
          <div className="text-center justify-content-center">
            <p className="mt-3 fs-5">
              At BlogInsight, we're passionate about storytelling and creating a
              platform where voices can be heard. Founded with the vision of
              fostering a community of writers, thinkers, and creatives,
              BlogInsight is dedicated to providing a space where ideas can
              flourish and connections can be made.
            </p>
            <p className="fs-5">
              Our team of experienced professionals works tirelessly to ensure
              that our platform is intuitive, user-friendly, and equipped with
              the latest technological innovations. Whether you're here to read,
              write, or share, BlogInsight offers a seamless experience designed
              to inspire and engage.
            </p>
            <p className="fs-5">
              Join us on this journey as we explore diverse perspectives, share
              compelling stories, and build a vibrant community together.
              Welcome to BlogInsight – where your story matters.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="container ">
          <div className="col-md-12 md-4 text-center ">
            <h3 className="main-heading fs-1">The Team</h3>
            <div className="underline mx-auto mb-4 rounded-3 "> </div>

            <div className="card mb-3 " style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={staff1}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 d-flex justify-content-evenly ">
                  <div className="card-body ">
                    <h5 className="card-title ">Alex Turner</h5>
                    <p className="card-text  ">
                      Alex is the technical genius driving our blog platform’s
                      innovation. With a background in cutting-edge software
                      development and a passion for pushing technological
                      boundaries, Alex ensures our site remains at the forefront
                      of digital advancements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={staff2}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 d-flex justify-content-evenly">
                  <div className="card-body">
                    <h5 className="card-title">Maria Rodriguez</h5>
                    <p className="card-text">
                      Maria is the creative mind behind our engaging content.
                      Her expertise in storytelling and content creation helps
                      us connect with our audience on a deeper level, ensuring
                      our blog consistently delivers high-quality, captivating
                      stories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={staff3}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 d-flex justify-content-evenly">
                  <div className="card-body">
                    <h5 className="card-title">Liam Bennett</h5>
                    <p className="card-text">
                      Liam is dedicated to fostering a vibrant and engaged
                      community around our blog. With a strong background in
                      social media management and community building, Liam
                      ensures that our readers feel heard, valued, and
                      connected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
