import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [name, setName] = useState("null");
  // const name = ""
  const handleChange = (abcd) => {
    setName(abcd);
  };
  return (
    <>
      {/* to render element  */}
      <Navbar handleChange={handleChange} />
      <p>{name}</p>
      {/* <button onClick={handleChange} className="bg-gray-400">
        Click
      </button> */}
    </>
  );
};

export default App;

//jsx have only one parent element
// React.Fragment   <div>jello</div>;
//{} to write javascript inside html
//props

// useState
// useEffect
// useRef
// useMemo
// useCallback
// useReducer
