import React, { useState } from "react";

const ChangePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const plans = [
    { label: "Short Term", value: "SHORT TERM" },
    { label: "Classic Plan", value: "CLASSIC PLAN" },
    { label: "Pro Plan", value: "PRO PLAN" },
    { label: "Deriv Bot", value: "Deriv Bot" },
  ];

  const handleAmountChange = (e) => {
    const value = Number(e.target.value);
    setAmount(value);

    if (!value || value <= 0) {
      setError("Enter a valid amount");
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    alert(`Changing to ${selectedPlan} with $${amount}`);
  };

  const isDisabled = !selectedPlan || !amount || !!error;

  return (
    <div
      className="min-h-screen pt-20 flex items-center justify-center px-4
      bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/src/assets/galaxy.png')]
      bg-cover bg-center"
    >
      <div className="w-full max-w-xl bg-black/40 backdrop-blur-lg border border-amber-400/20 rounded-2xl shadow-2xl p-8">

        {/* Title */}
        <h2 className="text-3xl text-center text-amber-400 font-bold mb-6">
          Change Investment Plan
        </h2>

        {/* Plans */}
        <div className="space-y-4 mb-6">
          {plans.map((plan) => (
            <label
              key={plan.value}
              className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition
              ${
                selectedPlan === plan.value
                  ? "border-amber-400 bg-amber-400/10"
                  : "border-gray-700 hover:border-amber-300"
              }`}
            >
              <span className="text-white font-medium">
                {plan.label}
              </span>

              <input
                type="radio"
                name="plan"
                value={plan.value}
                checked={selectedPlan === plan.value}
                onChange={() => setSelectedPlan(plan.value)}
                className="accent-amber-400 cursor-pointer"
              />
            </label>
          ))}
        </div>

        {/* Amount Input */}
        <input
          type="number"
          placeholder="Enter amount"
          onChange={handleAmountChange}
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3
          text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
        />

        {/* Error */}
        {error && (
          <p className="text-red-500 mt-2 text-sm">{error}</p>
        )}

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={isDisabled}
          className={`mt-6 w-full py-3 rounded-lg font-semibold transition
          ${
            isDisabled
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-amber-400 text-black hover:bg-amber-500 cursor-pointer active:scale-95"
          }`}
        >
          Change Plan
        </button>

      </div>
    </div>
  );
};

export default ChangePlan;