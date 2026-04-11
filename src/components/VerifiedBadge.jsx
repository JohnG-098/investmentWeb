import React from "react";

const VerifiedBadge = ({ className = "w-5 h-5" }) => {
  return (
    <svg
      className="w-5 h-5 text-yellow-400"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l2.2 2.5 3.3-.5.8 3.3 3 1.6-1.6 3 1.6 3-3 1.6-.8 3.3-3.3-.5L12 22l-2.2-2.5-3.3.5-.8-3.3-3-1.6 1.6-3-1.6-3 3-1.6.8-3.3 3.3.5L12 2z" />
      <path
        d="M9.5 12.5l1.5 1.5 3.5-3.5"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default VerifiedBadge;
