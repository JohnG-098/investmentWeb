import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import SummaryApi from "../common";

const VerifyEmail = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get email from register OR localStorage
  const email =
    location.state?.email || localStorage.getItem("verifyEmail");

  const handleChange = (e) => {
    // only allow numbers, max 6 digits
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(value);
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    if (code.length !== 6) {
      toast.error("Please enter a valid 6-digit code");
      return;
    }

    if (!email) {
      toast.error("Email missing. Please register again.");
      return;
    }

    try {
      setLoading(true);

      // ✅ USE verifyCode (checks OTP)
      const res = await fetch(SummaryApi.verifyCode.url, {
        method: SummaryApi.verifyCode.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(data.message || "Email verified successfully");

        // ✅ Clean up stored email
        localStorage.removeItem("verifyEmail");

        navigate("/login");
      } else {
        toast.error(data.message || "Verification failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error("Email missing. Please register again.");
      return;
    }

    try {
      setResending(true);

      // ✅ USE verifyEmail (generates & sends OTP)
      const res = await fetch(SummaryApi.verifyEmail.url, {
        method: SummaryApi.verifyEmail.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Verification code resent");
      } else {
        toast.error(data.message || "Failed to resend code");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setResending(false);
    }
  };

  return (
    <div
      className="min-h-screen pt-20 flex items-center justify-center px-4
      bg-[linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url('/src/assets/galaxy.png')]
      bg-cover bg-center"
    >
      {/* Card */}
      <div
        className="w-full max-w-md bg-black/40 backdrop-blur-lg
        border border-amber-400/20 rounded-2xl shadow-2xl p-8"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-amber-400 mb-2">
          Verify Your Email
        </h2>

        <p className="text-center text-gray-400 text-sm mb-8">
          Enter the 6-digit code sent to your email
        </p>
        <p className="text-center text-gray-400 text-sm mb-8">
          if you cannot find the code check your spam folder
        </p>

        {/* Form */}
        <form onSubmit={handleVerify} className="flex flex-col gap-6">
          {/* OTP Input */}
          <input
            type="text"
            value={code}
            onChange={handleChange}
            placeholder="Enter 6-digit code"
            className="bg-black/50 border border-gray-700 rounded-lg px-4 py-3
            text-white placeholder-gray-500 tracking-widest text-center text-lg
            focus:outline-none focus:border-amber-400 transition"
          />

          {/* Verify Button */}
          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center gap-2 
            bg-amber-400 text-black font-semibold py-3 rounded-lg
            transition cursor-pointer
            ${loading ? "opacity-70 animate-pulse" : "hover:bg-amber-500"}`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Verifying...
              </>
            ) : (
              "Verify Email"
            )}
          </button>
        </form>

        {/* Resend */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Didn’t receive the code?
          </p>

          <button
            onClick={handleResend}
            disabled={resending}
            className="text-amber-400 text-sm mt-2 hover:underline"
          >
            {resending ? "Resending..." : "Resend Code"}
          </button>
        </div>

        {/* Back to login */}
        <p className="text-gray-500 text-xs text-center mt-6">
          Back to{" "}
          <Link to="/login" className="text-amber-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;