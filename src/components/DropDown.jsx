import React, { useRef, useEffect } from "react";

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

  return (
    <div
      ref={dropdownRef}
      className={`absolute top-20 right-6 w-56 bg-gray-900 text-amber-200 rounded-xl shadow-lg p-6 transition-all duration-300
      ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}
    >
      <div className="flex flex-col gap-4">
        <p className="cursor-pointer hover:text-amber-400 transition">Home</p>
        <p className="cursor-pointer hover:text-amber-400 transition">
          About Us
        </p>
        <p className="cursor-pointer hover:text-amber-400 transition">Blog</p>
        <p className="cursor-pointer hover:text-amber-400 transition">Plan</p>
        <p className="cursor-pointer hover:text-amber-400 transition">
          Contact Us
        </p>
      </div>
    </div>
  );
};

export default DropDown;