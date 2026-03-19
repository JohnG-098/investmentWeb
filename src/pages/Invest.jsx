import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Invest = () => {
  const { state } = useLocation();

  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  if (!state) {
    return (
      <div className="pt-20 text-center text-white">
        No plan selected
      </div>
    );
  }

  const { title, returnRate, duration, min, max } = state;

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setAmount(value);

    if (!value) {
      setError("");
      setResult(null);
      return;
    }

    if (value < min) {
      setError(`Minimum investment is $${min}`);
      setResult(null);
    } else if (value > max) {
      setError(`Maximum is $${max}. Try higher plans.`);
      setResult(null);
    } else {
      setError("");
    }
  };

  const calculateReturn = () => {
    const profit = (amount * returnRate) / 100;
    const total = amount + profit;
    setResult(total.toFixed(2));
  };

  const handleInvest = () => {
    alert(`Investing $${amount} in ${title}`);
  };

  const isDisabled = !!error || !amount;

  return (
    <div
      className="min-h-screen pt-20 flex items-center justify-center px-4
      bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/src/assets/galaxy.png')]
      bg-cover bg-center"
    >
      <div className="w-full max-w-lg bg-black/40 backdrop-blur-lg border border-amber-400/20 rounded-2xl shadow-2xl p-8">

        {/* Title */}
        <h2 className="text-3xl text-center text-amber-400 font-bold mb-2">
          {title}
        </h2>

        <p className="text-center text-gray-400 mb-6">
          Enter your investment amount
        </p>

        {/* Input */}
        <input
          type="number"
          placeholder={`$${min} - $${max}`}
          onChange={handleChange}
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3
          text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
        />

        {/* Error */}
        {error && (
          <p className="text-red-500 mt-2 text-sm">{error}</p>
        )}

        {/* Calculate Button (Optional) */}
        <button
          onClick={calculateReturn}
          disabled={isDisabled}
          className={`mt-6 w-full py-3 rounded-lg font-semibold transition
          ${
            isDisabled
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-amber-400 text-black hover:bg-amber-500"
          }`}
        >
          Calculate Returns (Optional)
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 text-center">
            <p className="text-gray-400">Estimated Return</p>
            <h3 className="text-2xl text-green-400 font-bold">
              ${result}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Based on {returnRate}% plan
            </p>
          </div>
        )}

        {/* Invest Button */}
        <button
          onClick={handleInvest}
          disabled={isDisabled}
          className={`mt-6 w-full py-3 rounded-lg font-semibold transition
          ${
            isDisabled
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-green-500 text-black hover:bg-green-600"
          }`}
        >
          Invest Now
        </button>

      </div>
    </div>
  );
};

export default Invest;