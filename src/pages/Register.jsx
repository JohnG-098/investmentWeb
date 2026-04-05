import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import SummaryApi from "../common";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ LIVE PASSWORD CHECKS (for ticks)
  const passwordChecks = useMemo(() => {
    return {
      length: data.password.length >= 6,
      uppercase: /[A-Z]/.test(data.password),
      lowercase: /[a-z]/.test(data.password),
      number: /[0-9]/.test(data.password),
      special: /[^A-Za-z0-9]/.test(data.password),
    };
  }, [data.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ PASSWORD VALIDATION (BLOCK EXECUTION)
    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (!/[A-Z]/.test(data.password)) {
      toast.error("Password must include at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(data.password)) {
      toast.error("Password must include at least one lowercase letter");
      return;
    }

    if (!/[0-9]/.test(data.password)) {
      toast.error("Password must include at least one number");
      return;
    }

    if (!/[^A-Za-z0-9]/.test(data.password)) {
      toast.error("Password must include at least one special character");
      return;
    }

    if (data.password !== data.confirmPassword) {
      toast.error("password and confirm password did not match");
      return;
    }

    try {
      setLoading(true);

      const dataResponse = await fetch(SummaryApi.SignUp.url, {
        method: SummaryApi.SignUp.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        toast.success(dataApi.message);

        const otpSentResponse = await fetch(SummaryApi.verifyEmail.url, {
          method: SummaryApi.verifyEmail.method,
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: data.email }),
        });

        const otpSentData = await otpSentResponse.json();

        if (otpSentData.success) {
          toast.success("OTP sent to your email. Please verify.");
          localStorage.setItem("verifyEmail", data.email);
          navigate("/verify-email", { state: { email: data.email } });
        } else {
          toast.error("Failed to send OTP. Please try again.");
        }
      } else {
        toast.error(dataApi.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen pt-20 flex items-center justify-center px-4
  bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/src/assets/galaxy.png')]
  bg-cover bg-center"
    >
      <div
        className="w-full max-w-md bg-black/40 backdrop-blur-lg border border-amber-400/20
      rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-amber-400 mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-400 mb-8 text-sm">
          Join the future of crypto investing
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="First Name*"
            name="firstName"
            onChange={handleOnChange}
            value={data.firstName}
            required
            className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3
            text-white placeholder-gray-400 focus:outline-none
            focus:border-amber-400 transition"
          />

          <input
            type="text"
            placeholder="Last Name*"
            required
            name="lastName"
            onChange={handleOnChange}
            value={data.lastName}
            className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3
            text-white placeholder-gray-400 focus:outline-none
            focus:border-amber-400 transition"
          />

          <input
            type="email"
            placeholder="Email Address*"
            required
            name="email"
            onChange={handleOnChange}
            value={data.email}
            className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3
            text-white placeholder-gray-400 focus:outline-none
            focus:border-amber-400 transition"
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password*"
              required
              name="password"
              onChange={handleOnChange}
              value={data.password}
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

          {/* ✅ TICKING PASSWORD RULES */}
          {data.password && (
            <div className="text-sm text-slate-400">
              <p>{passwordChecks.length ? "✔" : "✖"} At least 6 characters</p>
              <p>{passwordChecks.uppercase ? "✔" : "✖"} One uppercase letter</p>
              <p>{passwordChecks.lowercase ? "✔" : "✖"} One lowercase letter</p>
              <p>{passwordChecks.number ? "✔" : "✖"} One number</p>
              <p>{passwordChecks.special ? "✔" : "✖"} One special character</p>
            </div>
          )}

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={handleOnChange}
              value={data.confirmPassword}
              placeholder="Confirm Password*"
              className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3
              text-white placeholder-gray-400 focus:outline-none
              focus:border-amber-400 transition"
            />
            <span
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showConfirmPassword ? "🙈" : "👁"}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-2 flex items-center justify-center gap-2 
            bg-amber-400 text-black font-semibold py-3 rounded-lg
            transition cursor-pointer
            ${loading ? "opacity-70 animate-pulse" : "hover:bg-amber-500"}`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              "Register"
            )}
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link
            className="text-amber-400 cursor-pointer hover:underline"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;