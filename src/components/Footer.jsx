import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context";

const Footer = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center justify-center gap-6">

        {/* 🔶 Logo + Button Row */}
        <div className="w-full flex items-center justify-center gap-12 flex-wrap">

          {/* SVG Logo */}
          <svg
            width="420"
            height="130"
            viewBox="0 0 360 110"
            className="drop-shadow-[0_0_15px_rgba(245,158,11,0.25)]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="80" y2="80">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#FCD34D" />
              </linearGradient>

              <linearGradient id="textGrad" x1="0" y1="0" x2="260" y2="0">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>

            <g transform="translate(10,15)">
              <rect x="0" y="0" width="70" height="70" rx="16" fill="#0A0A0A" stroke="url(#grad1)" strokeWidth="2.5" />
              <rect x="16" y="16" width="14" height="14" rx="4" fill="url(#grad1)" />
              <rect x="40" y="16" width="14" height="14" rx="4" fill="url(#grad1)" />
              <rect x="16" y="40" width="14" height="14" rx="4" fill="url(#grad1)" />
              <rect x="40" y="40" width="14" height="14" rx="4" fill="url(#grad1)" />

              <line x1="23" y1="23" x2="47" y2="23" stroke="#FCD34D" strokeWidth="2" />
              <line x1="23" y1="47" x2="47" y2="47" stroke="#FCD34D" strokeWidth="2" />
              <line x1="23" y1="23" x2="23" y2="47" stroke="#FCD34D" strokeWidth="2" />
              <line x1="47" y1="23" x2="47" y2="47" stroke="#FCD34D" strokeWidth="2" />
            </g>

            <text
              x="95"
              y="65"
              fontFamily="Poppins, Arial, sans-serif"
              fontSize="52"
              fontWeight="600"
              fill="url(#textGrad)"
            >
              COINBIT
            </text>

            <path
              d="M95 78 Q190 105 330 78"
              stroke="url(#textGrad)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* ✨ Join Us Button (ONLY border glow improved) */}
          {!user && (
            <button
              onClick={() => navigate("/register")}
              className="
                relative px-7 py-3 rounded-xl font-semibold
                bg-gray-900 text-white
                cursor-pointer
                transition-all duration-300
                hover:scale-105 active:scale-95
              "
            >
              {/* glowing border layer */}
              <span className="
                absolute inset-0 rounded-xl p-[2px]
                bg-gradient-to-r from-amber-400 via-pink-500 via-purple-500 to-cyan-400
                animate-pulse
              " />

              {/* inner cutout to show border only */}
              <span className="
                absolute inset-[2px] rounded-lg bg-gray-900
              " />

              {/* text */}
              <span className="relative z-10">Join Us</span>
            </button>
          )}

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Bottom Text */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-amber-400 font-semibold">COINBIT</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;