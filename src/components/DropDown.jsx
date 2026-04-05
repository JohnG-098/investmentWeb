import React, { useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../context";
import SummaryApi from "../common";
import { toast } from "react-hot-toast";

const DropDown = ({ open, setMenuOpen }) => {
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // ✅ added setUser for instant UI update
  const { user, setUser } = useContext(Context);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setMenuOpen]);

  const close = () => setMenuOpen(false);

  // ✅ LOGOUT HANDLER ADDED
  const handleLogout = async () => {
    try {
      const response = await fetch(SummaryApi.logout.url, {
        method: SummaryApi.logout.method,
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Logged out successfully");

        // ✅ instant UI update
        setUser(null);

        close();
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
      ref={dropdownRef}
      className={`absolute top-20 right-6 w-56 bg-gray-900 text-amber-200 rounded-xl shadow-lg p-6 transition-all duration-300
      ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}
    >
      <div className="flex flex-col gap-4">
        <Link onClick={close} to="/">Home</Link>
        <Link onClick={close} to="/about">About Us</Link>
        <Link onClick={close} to="/blog">Blog</Link>
        <Link onClick={close} to="/plan">Plan</Link>
        <Link onClick={close} to="/contact">Contact Us</Link>

        <div className="border-t border-amber-500/20 my-2" />

        {user && (
          <div
            onClick={() => {
              navigate("/dashboard");
              close();
            }}
            className="cursor-pointer hover:text-amber-400"
          >
            My Wallet
          </div>
        )}

        {user ? (
          <div
            onClick={handleLogout}
            className="text-red-400 cursor-pointer"
          >
            Logout
          </div>
        ) : (
          <div
            onClick={() => {
              navigate("/login");
              close();
            }}
            className="cursor-pointer hover:text-amber-400"
          >
            Login
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;