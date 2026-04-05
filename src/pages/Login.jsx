import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-hot-toast";
import Context from "../context";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // ✅ SAFE CONTEXT ACCESS
  const context = useContext(Context);
  const fetchUserDetails = context?.fetchUserDetails;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataResponse = await fetch(SummaryApi.signIn.url, {
        method: SummaryApi.signIn.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);

        // ✅ fetch user FIRST
        if (fetchUserDetails) {
          await fetchUserDetails();
        }

        // ✅ then navigate
        navigate("/dashboard");
      } else {
        toast.error(dataApi.message);

        if (dataApi.redirect) {
          navigate(dataApi.redirect);
        }
      }
    } catch (error) {
      toast.error("Login failed. Try again.");
    }
  };

  return (
    <div
      className="min-h-screen pt-20 flex items-center justify-center px-4
      bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/src/assets/galaxy.png')]
      bg-cover bg-center"
    >
      <div className="w-full max-w-md bg-black/40 backdrop-blur-lg border border-amber-400/20 rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-amber-400 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-400 mb-8 text-sm">
          Login to continue your crypto journey
        </p>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            placeholder="Email Address"
            className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3
            text-white placeholder-gray-400 focus:outline-none
            focus:border-amber-400 transition"
          />

          {/* ✅ PASSWORD WITH TOGGLE */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              onChange={handleOnChange}
              placeholder="Password"
              className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3
              text-white placeholder-gray-400 focus:outline-none
              focus:border-amber-400 transition"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-amber-400" />
              Remember me
            </label>

            <span className="cursor-pointer hover:text-amber-400 transition">
              Forgot password?
            </span>
          </div>

          <button
            className="mt-2 bg-amber-400 text-black font-semibold py-3 rounded-lg
            hover:bg-amber-500 transition cursor-pointer"
          >
            Login
          </button>

        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link className="text-amber-400 hover:underline" to="/register">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;