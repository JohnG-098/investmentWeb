import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-amber-200 px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-amber-500/10 p-6 rounded-full border border-amber-400/20">
            <FaExclamationTriangle className="text-4xl text-amber-400" />
          </div>
        </div>

        {/* Text */}
        <h1 className="text-5xl font-bold text-amber-400 mb-2">404</h1>
        <h2 className="text-xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-6 text-sm">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-500 transition cursor-pointer"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg bg-gray-800 border border-amber-500/20 hover:bg-gray-700 transition cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
