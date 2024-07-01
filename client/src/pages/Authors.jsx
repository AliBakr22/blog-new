import React, { useState } from "react";
import profile1 from "../images/profile1.png";
import profile2 from "../images/profile2.png";
import profile3 from "../images/profile3.png";
import profile4 from "../images/profile4.png";
import profile5 from "../images/profile5.jpg";
import { Link } from "react-router-dom";

const authorsData = [
  { id: 1, avatar: profile1, name: "mark 1", blogs: 5 },
  { id: 2, avatar: profile2, name: "mark 2", blogs: 6 },
  { id: 3, avatar: profile3, name: "mark 3", blogs: 4 },
  { id: 4, avatar: profile4, name: "mark 4", blogs: 2 },
  { id: 5, avatar: profile5, name: "mark 5", blogs: 0 },
];
const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);

  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors_container gap-5">
          {authors.map(({ id, avatar, name, blogs }) => {
            return (
              <Link key={id} to={`/blogs/users/${id}`} className="author p-3">
                <div className="author_avatar ">
                  <img src={avatar} alt={`Image of ${name}`} />
                </div>
                <div className="author_info">
                  <h4>{name}</h4>
                  <p className="mt-1">{blogs}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2> no Authors found</h2>
      )}
    </section>
  );
};

export default Authors;
