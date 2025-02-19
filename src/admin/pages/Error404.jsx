// Error404.jsx
import React from "react";
import { Link } from "react-router-dom";
import Error from "../../assets/Images/404.svg";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center space-y-4">
        <img src={Error} alt="" />
        <h1 className="text-4xl font-bold text-gray-800">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 text-lg max-w-lg">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
      </div>

      <Link
        to="/admin"
        className="w-80 py-2 text-center mt-4 bg-gray-800 text-white rounded-md hover:bg-blue-700"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Error404;
