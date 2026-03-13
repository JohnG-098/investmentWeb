import React, { useState, useEffect } from "react";
import Button from "./Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex flex-row justify-between items-center text-amber-200 h-20 px-6 transition-all duration-300
      ${scrolled ? "bg-gray-900 shadow-lg" : "bg-black/20 backdrop-blur-md"}`}
    >
      {/* Logo */}
      <div className="font-bold text-xl cursor-pointer">LOGO</div>

      {/* Right Side */}
      <div className="flex flex-row items-center gap-10">
        {/* Navigation Links */}
        <div className="hidden md:flex flex-row gap-8">
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

        {/* Login */}
        <div className="flex items-center cursor-pointer hover:text-amber-400 transition">
          <span>Login icon</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
