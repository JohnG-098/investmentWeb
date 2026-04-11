import React from "react";

const Logo = () => {
  return (
    <svg
      width="360"
      height="80"
      viewBox="0 0 360 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Icon Gradient */}
        <linearGradient
          id="grad1"
          x1="0"
          y1="0"
          x2="80"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FCD34D" />
        </linearGradient>

        {/* Text Gradient */}
        <linearGradient id="textGrad" x1="0" y1="0" x2="260" y2="0">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      {/* 🔶 Bigger Icon */}
      <g transform="translate(10,15)">
        <rect
          x="0"
          y="0"
          width="70"
          height="70"
          rx="16"
          fill="#0A0A0A"
          stroke="url(#grad1)"
          strokeWidth="2.5"
        />

        {/* Inner blocks */}
        <rect x="16" y="16" width="14" height="14" rx="4" fill="url(#grad1)" />
        <rect x="40" y="16" width="14" height="14" rx="4" fill="url(#grad1)" />
        <rect x="16" y="40" width="14" height="14" rx="4" fill="url(#grad1)" />
        <rect x="40" y="40" width="14" height="14" rx="4" fill="url(#grad1)" />

        {/* Connections */}
        <line
          x1="23"
          y1="23"
          x2="47"
          y2="23"
          stroke="#FCD34D"
          strokeWidth="2"
        />
        <line
          x1="23"
          y1="47"
          x2="47"
          y2="47"
          stroke="#FCD34D"
          strokeWidth="2"
        />
        <line
          x1="23"
          y1="23"
          x2="23"
          y2="47"
          stroke="#FCD34D"
          strokeWidth="2"
        />
        <line
          x1="47"
          y1="23"
          x2="47"
          y2="47"
          stroke="#FCD34D"
          strokeWidth="2"
        />
      </g>

      {/* 🔤 Text */}
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

      {/* 🌊 Curved Underline */}
      <path
        d="M95 75 Q190 105 330 75"
        stroke="url(#textGrad)"
        strokeWidth="3"
        fill="transparent"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
