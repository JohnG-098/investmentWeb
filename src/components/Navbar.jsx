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
      className={`fixed top-0 left-0 w-full flex flex-row justify-between items-center text-amber-200 h-20 px-5 transition-all duration-300
      ${scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"}`}
    >
      <div className="font-bold">LOGO</div>

      <div className="flex flex-row items-center gap-10">
        <div className="hidden md:flex flex-row gap-8">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">About Us</p>
          <p className="cursor-pointer">Blog</p>
          <p className="cursor-pointer">Plan</p>
          <p className="cursor-pointer">Contact Us</p>
        </div>

        <div className="flex items-center">
          <span>Login icon</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
