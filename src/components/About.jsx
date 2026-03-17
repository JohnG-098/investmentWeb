import React from "react";

const About = () => {
  return (
    <section
      className="
      bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('/src/assets/img2.png')]
      bg-cover bg-center
      text-amber-200
      min-h-screen
      flex items-center
      px-6 md:px-16 lg:px-24
      "
    >
      {/* Left Content */}
      <div className="max-w-xl">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          About Us
        </h2>

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

export default About;