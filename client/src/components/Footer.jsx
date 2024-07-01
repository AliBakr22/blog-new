import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer_section rounded-top-3 ">
        <ul className="footer_container d-flex justify-content-center ">
          <li className="footer_list rounded-3  p-2">
            <Link to="/About" className="nav-link active ">
              <span>About Us</span>
            </Link>
          </li>
          <div className="line-between rounded-3 mt-2"> </div>
          <li className="footer_list rounded-3  p-2 ">
            <Link to="/Contact" className="nav-link active">
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
