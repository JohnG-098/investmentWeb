import React from "react";

const WhyUs = () => {
  return (
    <section
      className="
      bg-[linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)),url('/src/assets/coins.png')]
      bg-cover bg-center
      text-amber-200
      min-h-screen
      flex flex-col items-center justify-center
      px-6 md:px-16 lg:px-24
      py-20
      "
    >
      {/* Title */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-amber-50">
          Why Invest
        </h2>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-amber-200">
          With Us
        </h2>
      </div>

      {/* Text */}
      <div className="max-w-3xl text-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          Our global firm leverages professional expertise in market and crypto
          trading to build wealth for our clients. We bridge the gap between
          investors and trustees with a seamless, high-service platform designed
          to maximize profits and mitigate risk. Join us today and start growing
          your portfolio.
        </p>
      </div>
    </section>
  );
};

export default WhyUs;