import React, { useState, useEffect, useContext } from "react";
import DropDown from "./DropDown";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BiLogoMediumOld } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import Context from "../context";
import SummaryApi from "../common";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ keep only user (setUser NOT required anymore for sync safety)
  const { user, setUser, fetchUserDetails } = useContext(Context);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  // =========================
  // ✅ FIXED LOGOUT
  // =========================
  const handleLogout = async () => {
    try {
      const response = await fetch(SummaryApi.logout.url, {
        method: SummaryApi.logout.method,
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Logged out successfully");

        // ✅ instantly clear UI
        setUser(null);

        // optional: re-sync backend state
        if (fetchUserDetails) {
          await fetchUserDetails();
        }

        navigate("/login", { replace: true });
      } else {
        toast.error(data.message || "Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex flex-row justify-between items-center text-amber-200 h-20 px-6 transition-all duration-300
      ${scrolled ? "bg-gray-900 shadow-lg" : "bg-black/20 backdrop-blur-md"}`}
    >
      {/* Logo */}
      <div
        className="font-bold text-6xl cursor-pointer flex flex-row"
        onClick={() => navigate("/")}
      >
        <BiLogoMediumOld />
      </div>

      {/* Right Side */}
      <div className="flex flex-row items-center gap-10">

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-8 items-center">
          <Link
            to="/"
            className={`px-3 py-1 rounded-md transition ${
              isActive("/")
                ? "bg-amber-500/20 text-amber-300"
                : "hover:text-amber-400"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`px-3 py-1 rounded-md transition ${
              isActive("/about")
                ? "bg-amber-500/20 text-amber-300"
                : "hover:text-amber-400"
            }`}
          >
            About Us
          </Link>

          <Link
            to="/blog"
            className={`px-3 py-1 rounded-md transition ${
              isActive("/blog")
                ? "bg-amber-500/20 text-amber-300"
                : "hover:text-amber-400"
            }`}
          >
            Blog
          </Link>

          <Link
            to="/plan"
            className={`px-3 py-1 rounded-md transition ${
              isActive("/plan")
                ? "bg-amber-500/20 text-amber-300"
                : "hover:text-amber-400"
            }`}
          >
            Plan
          </Link>

          <Link
            to="/contact"
            className={`px-3 py-1 rounded-md transition ${
              isActive("/contact")
                ? "bg-amber-500/20 text-amber-300"
                : "hover:text-amber-400"
            }`}
          >
            Contact Us
          </Link>

          {/* 💰 Wallet */}
          {user && (
            <div
              onClick={() => navigate("/dashboard")}
              className={`flex items-center justify-center w-9 h-9 rounded-md transition cursor-pointer
              ${
                isActive("/dashboard")
                  ? "bg-green-500/20 text-green-300 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                  : "hover:text-amber-400"
              }`}
            >
              <FaWallet className="text-lg" />
            </div>
          )}

          {/* 🔐 Login / Logout */}
          {user ? (
            <button
              onClick={handleLogout}
              className="hover:text-red-400 transition cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <button
              className="hover:text-amber-400 transition cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center cursor-pointer gap-3 transition text-2xl">
          <AiOutlineUnorderedList
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:text-amber-400 md:hidden"
          />
        </div>
      </div>

      {/* Dropdown */}
      <DropDown open={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Navbar;