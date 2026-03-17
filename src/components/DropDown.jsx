import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const DropDown = ({ open, setMenuOpen }) => {
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setMenuOpen]);

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`absolute top-20 right-6 w-56 bg-gray-900 text-amber-200 rounded-xl shadow-lg p-6 transition-all duration-300
      ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}
    >
      <div className="flex flex-col gap-4">
        <Link onClick={handleClose} className="hover:text-amber-400 transition" to="/">
          Home
        </Link>

        <Link onClick={handleClose} className="hover:text-amber-400 transition" to="/about">
          About Us
        </Link>

        <Link onClick={handleClose} className="hover:text-amber-400 transition" to="/blog">
          Blog
        </Link>

        <Link onClick={handleClose} className="hover:text-amber-400 transition" to="/plan">
          Plan
        </Link>

        <Link onClick={handleClose} className="hover:text-amber-400 transition" to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default DropDown;