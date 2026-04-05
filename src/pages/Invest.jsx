import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Context from "../context";
import SummaryApi from "../common";
import { toast } from "react-hot-toast";
import { FaCopy, FaCheckCircle, FaBitcoin, FaCoins } from "react-icons/fa";

const Invest = () => {
  const { state } = useLocation();
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [copiedField, setCopiedField] = useState("");
  const [agree, setAgree] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!state) {
    return <div className="pt-20 text-center text-white">No plan selected</div>;
  }

  const { title, returnRate, duration, min, max } = state;

  // Example wallets (replace with your dynamic values if needed)
  const BTC_WALLET = "1BTCWalletAddress123";
  const SOL_WALLET = "So1anaWalletAddressXYZ";

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

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  const handleInvest = async () => {
    try {
      if (!user?._id || !user?.email) {
        alert("User not logged in");
        navigate("/login");
        return;
      }

      if (!amount || error || !agree || !confirm) {
        toast.error("Enter a valid amount and agree to confirm");
        return;
      }

      setLoading(true);

      const response = await fetch(SummaryApi.Invest.url, {
        method: SummaryApi.Invest.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          userId: user._id,
          planName: title,
          amountInvested: amount,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Investment successful!");
        navigate("/dashboard");
      } else {
        toast.error(data.message || "Investment failed");
      }
    } catch (err) {
      console.error("Investment Error:", err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !!error || !amount || !agree || !confirm || loading;

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

        {/* Amount Input */}
        <input
          type="number"
          placeholder={`$${min} - $${max}`}
          value={amount}
          onChange={handleChange}
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3
          text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 mb-2"
        />

        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

        {/* Calculate Returns */}
        <button
          onClick={calculateReturn}
          disabled={!!error || !amount}
          className={`mt-4 w-full py-3 rounded-lg font-semibold transition
            ${!!error || !amount ? "bg-gray-600 cursor-not-allowed" : "bg-amber-400 text-black hover:bg-amber-500 cursor-pointer"}
          `}
        >
          Calculate Returns (Optional)
        </button>

        {result && (
          <div className="mt-4 text-center">
            <p className="text-gray-400">Estimated Return</p>
            <h3 className="text-2xl text-green-400 font-bold">${result}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Based on {returnRate}% plan
            </p>
          </div>
        )}

        {/* Wallet Addresses */}
        <div className="mt-6 space-y-4">

          {/* BTC Wallet */}
          <div>
            <p className="text-gray-400 mb-1 flex items-center gap-2">
              <FaBitcoin className="text-yellow-400" /> BTC Wallet
            </p>
            <div className="flex items-center justify-between bg-black/50 border border-gray-700 rounded-lg px-4 py-3">
              <span className="text-white text-sm">{BTC_WALLET}</span>
              <button
                onClick={() => handleCopy(BTC_WALLET, "btc")}
                className="text-amber-400 hover:text-amber-300 cursor-pointer flex items-center gap-1"
              >
                {copiedField === "btc" ? <FaCheckCircle /> : <FaCopy />}
              </button>
            </div>
          </div>

          {/* Solana Wallet */}
          <div>
            <p className="text-gray-400 mb-1 flex items-center gap-2">
              <FaCoins className="text-purple-500" /> Solana Wallet
            </p>
            <div className="flex items-center justify-between bg-black/50 border border-gray-700 rounded-lg px-4 py-3">
              <span className="text-white text-sm">{SOL_WALLET}</span>
              <button
                onClick={() => handleCopy(SOL_WALLET, "sol")}
                className="text-amber-400 hover:text-amber-300 cursor-pointer flex items-center gap-1"
              >
                {copiedField === "sol" ? <FaCheckCircle /> : <FaCopy />}
              </button>
            </div>
          </div>

        </div>

        {/* Radio / Checkboxes */}
        <div className="space-y-3 mt-6 text-sm text-gray-300">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="accent-amber-400 cursor-pointer"
            />
            I agree to the terms and conditions
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={confirm}
              onChange={() => setConfirm(!confirm)}
              className="accent-amber-400 cursor-pointer"
            />
            I confirm this transaction
          </label>
        </div>

        {/* Invest Button */}
        <button
          onClick={handleInvest}
          disabled={isDisabled}
          className={`mt-6 w-full py-3 rounded-lg font-semibold transition
            ${isDisabled ? "bg-gray-600 cursor-not-allowed" : "bg-green-500 text-black hover:bg-green-600 cursor-pointer active:scale-95"}
          `}
        >
          {loading ? "Processing..." : "Invest Now"}
        </button>

      </div>
    </div>
  );
};

export default Invest;