import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-2xl font-semibold text-amber-200 text-center">
      <p className="text-sm text-gray-400 text-center py-4">
        © {new Date().getFullYear()} Investment. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
