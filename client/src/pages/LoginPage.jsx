import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <input
          className="mb-4 w-full py-2 px-3 border-b border-gray-300"
          type="email"
          placeholder="Enter your email"
        />
        <input
          className="mb-4 w-full py-2 px-3 border-b border-gray-300"
          type="password"
          placeholder="Enter your password"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Login
        </button>
      </form>
      <p className="mb-4">Don't have an account?</p>
      <Link className="text-blue-500 hover:text-blue-700" to={"/register"}>
        Click to register here!
      </Link>
    </div>
  );
};

export default LoginPage;
