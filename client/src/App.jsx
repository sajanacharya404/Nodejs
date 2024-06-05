import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  let i = 5;
  return (
    <>
      {/* <p className="text-blue-600  bg-gray-500">Hello from react {i} </p> */}
      <Navbar />
    </>
  );
};

export default App;

//jsx have only one parent element
// React.Fragment   <div>jello</div>;
//{} to write javascript inside html
