import React from "react";
import Card from "./Card";

const InvestPlan = () => {
  return ( //bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/src/assets/galaxy.png')]
    <section
      className="
      bg-black
      bg-cover bg-center
      text-amber-200
      py-24
      "
    >
      {/* Title */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-center items-center text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Investment
        </h2>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50">
          Plans
        </h2>
      </div>

      {/* Description */}
      <div className="flex justify-center px-6 mb-16">
        <div className="max-w-2xl text-center font-semibold text-amber-100 text-base sm:text-lg md:text-xl">
          <p>
            Don't fly blind with your capital. Research your options and choose
            the investment path that fits you best.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div
        className="
        flex flex-col md:flex-row
        flex-wrap
        gap-8
        items-center
        justify-center
        px-6 md:px-16
        "
      >
        <Card
          title="SHORT TERM"
          returnRate="10.00"
          frequency="Every HOUR"
          duration="For 24 HOUR"
          total="240"
          min="100"
          max="1,000"
          buttonText="Invest Now"
        />

        <Card
          title="CLASSIC PLAN"
          returnRate="20.00"
          frequency="Every HOUR"
          duration="For 48 HOUR"
          total="960"
          min="1,001"
          max="2,500"
          buttonText="Invest Now"
        />

        <Card
          title="PRO PLAN"
          returnRate="25.00"
          frequency="Every WEEK"
          duration="For 168 WEEK"
          total="4200"
          min="2,501"
          max="5,000"
          buttonText="Invest Now"
        />

        <Card
          title="Deriv Bot"
          returnRate="50.00"
          frequency="Every HOUR"
          duration="For Life Time"
          total="Life Time"
          min="5,000"
          max="50,000"
          buttonText="Invest Now"
        />
      </div>
    </section>
  );
};

export default InvestPlan;