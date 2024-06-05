import React from "react";

const Navbar = ({ handleChange }) => {
  const handleNameChange = (event) => {
    console.log(event);
    handleChange(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        className="border border-black p-5 "
        onChange={handleNameChange}
      />
    </>
  );
};

export default Navbar;
