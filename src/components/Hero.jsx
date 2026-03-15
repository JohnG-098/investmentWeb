import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/src/assets/img1.png')]
      bg-cover bg-center min-h-180 text-amber-200
      flex items-center justify-center md:justify-end
      px-6 md:pr-16 pt-8"
    >
      <div className="max-w-2xl text-center md:text-right">
        <div className="text-base sm:text-lg md:text-2xl font-semibold leading-relaxed">
          The future of finance is digital, and it’s already here. Our platform
          bridges the gap between traditional investing and the world of
          blockchain, offering you a secure, streamlined way to grow your
          wealth. With institutional-grade security and real-time market
          insights, we’ve removed the complexity from crypto, giving you the
          tools to build a diversified portfolio with total confidence.
        </div>

        <div className="mt-10">
          <Button onClick={() => navigate("/register")}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;