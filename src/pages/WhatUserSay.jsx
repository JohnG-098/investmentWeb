import React, { useEffect, useState } from "react";
import UsersMessage from "../components/UsersMessage";

const users = [
  { name: "James Sterling", message: "Looking forward to collaborating on new projects!", country: "Canada" },
  { name: "Elena Rodriguez", message: "Excited to be part of this amazing team.", country: "Spain" },
  { name: "Marcus Thorne", message: "Let’s push boundaries and build something great.", country: "Australia" },
  { name: "Sarah Jenkins", message: "Happy to connect and share ideas.", country: "United Kingdom" },
  { name: "Alistair Vance", message: "Innovation starts with a single step.", country: "South Africa" },
  { name: "Maya Patel", message: "Passionate about creating impactful solutions.", country: "India" },
  { name: "Julian Beck", message: "Always eager to learn and grow.", country: "Germany" },
  { name: "Fiona Gallagher", message: "Teamwork makes everything better.", country: "Ireland" },
  { name: "Silas Montgomery", message: "Driven by curiosity and creativity.", country: "United States" }
];

const WhatUserSay = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // ✅ Responsive visible cards
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // 📱 mobile → ONE ONLY
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // tablet
      } else {
        setVisibleCount(3); // desktop
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // ✅ Rotate cards (D → C → B style)
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % users.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Get visible users
  const visibleUsers = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleUsers.push(users[(startIndex + i) % users.length]);
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 md:px-10 py-20 overflow-hidden">

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-amber-400 mb-12 text-center">
        What Our Users Say
      </h2>

      {/* Slider */}
      <div className="w-full flex justify-center overflow-hidden">
        <div
          className="
            flex gap-6 md:gap-8
            transition-all duration-700 ease-in-out
          "
        >
          {visibleUsers.map((user, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                animate-fadeSlide
              "
            >
              <UsersMessage {...user} />
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeSlide {
            0% {
              opacity: 0;
              transform: translateX(-40px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fadeSlide {
            animation: fadeSlide 2s ease;
          }
        `}
      </style>
    </div>
  );
};

export default WhatUserSay;