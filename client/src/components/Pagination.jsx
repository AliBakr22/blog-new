import React from "react";

const Pagination = () => {
  return (
    <nav className="pagination justify-content-center mt-5">
      <ul className="pagination pagination-color ">
        <li className="page-item disabled">
          <span className="page-link ">Previous</span>
        </li>

        <li className="page-item active" aria-current="page">
          <span className="page-link">1</span>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
