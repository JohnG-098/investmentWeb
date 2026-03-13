import React from "react";
import cardSvg from "../assets/svg/cardsvg.svg";
import Button from "./Button";

const Card = ({
  title,
  returnRate,
  frequency,
  duration,
  total,
  min,
  max,
  buttonText,
}) => {
  return (
    <div className="relative w-[320px] h-[420px]">
      {/* Background SVG */}
      <img
        src={cardSvg}
        alt="card"
        className="absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-between py-8 px-6 text-center">
        <h2 className="text-2xl font-semibold text-yellow-400">{title}</h2>

        <div className="text-gray-300 space-y-3">
          <p>Return {returnRate}%</p>
          <p>{frequency}</p>
          <p>{duration}</p>
          <p className="text-green-400 mt-6">Total {total}% + Capital</p>
        </div>

        <div className="text-xl text-yellow-300 font-semibold">
          ${min} - ${max}
        </div>

        <Button>Invest</Button>
      </div>
    </div>
  );
};

export default Card;
