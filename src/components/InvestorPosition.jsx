import React from "react";
import { FaCrown, FaMedal, FaFire } from "react-icons/fa";

const InvestorPosition = ({ position, name, username, amount }) => {
  // 🏆 Top 3 styling
  const isTop1 = position === 1;
  const isTop2 = position === 2;
  const isTop3 = position === 3;

  const getBadge = () => {
    if (isTop1) return <FaCrown className="text-yellow-400 text-2xl" />;
    if (isTop2) return <FaMedal className="text-gray-300 text-xl" />;
    if (isTop3) return <FaFire className="text-orange-400 text-xl" />;
    return null;
  };

  const getGlow = () => {
    if (isTop1) return "shadow-[0_0_60px_rgba(251,191,36,0.6)] border-yellow-400/50";
    if (isTop2) return "shadow-[0_0_40px_rgba(200,200,200,0.4)] border-gray-300/40";
    if (isTop3) return "shadow-[0_0_40px_rgba(251,146,60,0.5)] border-orange-400/40";
    return "shadow-[0_0_25px_rgba(251,191,36,0.15)] border-amber-400/20";
  };

  return (
    <div
      className={`
        relative w-full max-w-[420px]
        bg-black/60 backdrop-blur-xl
        border ${getGlow()}
        rounded-2xl p-6
        transition-all duration-500
        hover:scale-105 hover:shadow-[0_0_70px_rgba(251,191,36,0.5)]
        overflow-hidden
      `}
    >
      {/* Background glow icon */}
      <div className="absolute -top-6 -right-6 opacity-10 text-[120px] text-amber-400">
        <FaCrown />
      </div>

      {/* Position */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-amber-400">
          #{position}
        </h2>
        {getBadge()}
      </div>

      {/* Name */}
      <h3 className="text-lg md:text-xl font-semibold text-white">
        {name}
      </h3>

      {/* Username */}
      <p className="text-gray-400 text-sm mb-4">@{username}</p>

      {/* Amount */}
      <div className="mt-3">
        <p className="text-gray-400 text-sm">Total Investment</p>
        <h2 className="text-2xl font-bold text-green-400">
          ${amount.toLocaleString()}
        </h2>
      </div>

      {/* Bottom glow line */}
      <div className="mt-5 h-[3px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70"></div>
    </div>
  );
};

export default InvestorPosition;