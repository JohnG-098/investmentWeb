import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen pt-20 flex items-center justify-center px-4
      bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/src/assets/galaxy.png')]
      bg-cover bg-center"
    >
      {/* Login Card */}
      <div className="w-full max-w-md bg-black/40 backdrop-blur-lg border border-amber-400/20 rounded-2xl shadow-2xl p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-amber-400 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-400 mb-8 text-sm">
          Login to continue your crypto journey
        </p>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3
            text-white placeholder-gray-400 focus:outline-none
            focus:border-amber-400 transition"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3
            text-white placeholder-gray-400 focus:outline-none
            focus:border-amber-400 transition"
          />

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-amber-400" />
              Remember me
            </label>

            <span className="cursor-pointer hover:text-amber-400 transition">
              Forgot password?
            </span>
          </div>

          {/* Login Button */}
          <button
            className="mt-2 bg-amber-400 text-black font-semibold py-3 rounded-lg
            hover:bg-amber-500 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <span
            className="text-amber-400 cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
