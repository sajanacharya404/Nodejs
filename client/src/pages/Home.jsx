import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/book/detail/1"}>
        <p>Book Detals</p>
      </Link>
    </div>
  );
};

export default Home;
