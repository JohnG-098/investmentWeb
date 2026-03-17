import React, { useState, useEffect } from "react";
import Button from "./Button";
import DropDown from "./DropDown";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { BiLogoBitcoin } from "react-icons/bi";
import { BiLogoMediumOld } from "react-icons/bi";
//<BiLogoBitcoin />

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
 

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
      <div className="font-bold text-6xl cursor-pointer flex flex-row" onClick={()=>navigate("/")}> <BiLogoMediumOld /></div>

      {/* Right Side */}
      <div className="flex flex-row items-center gap-10">
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-8">
          <Link className="cursor-pointer hover:text-amber-400 transition" to="/">Home</Link>
          <Link className="cursor-pointer hover:text-amber-400 transition" to="about">
            About Us
          </Link>
          <Link className="cursor-pointer hover:text-amber-400 transition" to="/blog">Blog</Link>
          <Link className="cursor-pointer hover:text-amber-400 transition" to="/plan">Plan</Link>
          <Link className="cursor-pointer hover:text-amber-400 transition" to='/contact'>
            Contact Us
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center cursor-pointer gap-3 transition text-2xl">
          <FaCircleUser
            className="hover:text-amber-400"
            onClick={() => navigate("/login")}
          />
          <AiOutlineUnorderedList
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:text-amber-400 md:hidden"
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      <DropDown open={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Navbar;
