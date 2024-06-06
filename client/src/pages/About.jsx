import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleNavigate}>Login</button>
    </div>
  );
};

export default About;
