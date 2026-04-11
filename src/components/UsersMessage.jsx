import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const UsersMessage = ({ name, message, country }) => {
  return (
    <div className="
      w-full
      max-w-[95vw] sm:max-w-[420px] lg:max-w-[480px]
      bg-black/60 backdrop-blur-2xl
      border border-amber-400/30
      rounded-3xl p-6 sm:p-8
      shadow-[0_0_40px_rgba(251,191,36,0.18)]
      hover:shadow-[0_0_60px_rgba(251,191,36,0.4)]
      transition-all duration-500 ease-in-out
      hover:scale-105
      overflow-hidden
    ">

      {/* Glow accent line */}
      <div className="
        h-[4px] w-16 sm:w-20 bg-amber-400 rounded-full mb-4 sm:mb-5
        shadow-[0_0_15px_rgba(251,191,36,0.9)]
      "></div>

      {/* Icon */}
      <FaQuoteLeft className="text-amber-400 text-2xl sm:text-3xl mb-3 sm:mb-4 opacity-90" />

      {/* Message */}
      <p className="
        text-gray-200 text-base sm:text-lg md:text-xl
        leading-relaxed mb-6 sm:mb-8
        break-words
      ">
        "{message}"
      </p>

      {/* Footer */}
      <div className="border-t border-gray-700 pt-4 sm:pt-5">
        <h3 className="text-amber-300 font-semibold text-base sm:text-lg md:text-xl">
          {name}
        </h3>
        <p className="text-gray-500 text-sm md:text-base mt-1">
          {country}
        </p>
      </div>
    </div>
  );
};

export default UsersMessage;