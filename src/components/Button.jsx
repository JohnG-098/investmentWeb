import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center px-6 h-14
                 font-semibold text-amber-200 overflow-hidden rounded-lg
                 transition-all duration-300 transform hover:scale-110
                 cursor-pointer hover:bg-black hover:text-white"
    >
      {/* Gold border SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 56"
        preserveAspectRatio="none"
      >
        <rect
          x="2"
          y="2"
          width="196"
          height="52"
          rx="12"
          ry="12"
          fill="none"
          stroke="#FFD700"
          strokeWidth="2"
        />
      </svg>

      {/* Text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;