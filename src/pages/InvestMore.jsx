import React, { useContext, useState } from "react";
import { FaCopy, FaCheckCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Context from "../context";
import SummaryApi from "../common";

const InvestMore = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [agree, setAgree] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [copiedField, setCopiedField] = useState("");
  const [loading, setLoading] = useState(false);

  // Example values
  const text1 = "wallet-address-123ABCxyz";
  const text2 = "reference-code-789XYZ";

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);

    setTimeout(() => {
      setCopiedField("");
    }, 2000);
  };

  const isDisabled = !amount || !agree || !confirm || loading;

  // ✅ HANDLE INVEST MORE
  const handleInvestMore = async () => {
    try {
      if (!user?.email) {
        toast.error("User not found. Please login again.");
        return;
      }

      setLoading(true);

      const response = await fetch(SummaryApi.investMore.url, {
        method: SummaryApi.investMore.method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: user.email,
          userId: user?._id,
          amountInvested: amount,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Investment updated successfully 🚀");
        setAmount("");
        setAgree(false);
        setConfirm(false);

        // 🔁 Redirect back to dashboard
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Invest more error:", error);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen pt-20 flex items-center justify-center px-4
      bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/src/assets/galaxy.png')]
      bg-cover bg-center"
    >
      <div className="w-full max-w-xl bg-black/40 backdrop-blur-lg border border-amber-400/20 rounded-2xl shadow-2xl p-8">

        {/* Title */}
        <h2 className="text-3xl text-center text-amber-400 font-bold mb-6">
          Invest More
        </h2>

        {/* Amount */}
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3
          text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 mb-6"
        />

        {/* Copy Field 1 */}
        <div className="mb-4">
          <p className="text-gray-400 mb-1">Wallet Address</p>
          <div className="flex items-center justify-between bg-black/50 border border-gray-700 rounded-lg px-4 py-3">
            <span className="text-white text-sm">{text1}</span>
            <button
              onClick={() => handleCopy(text1, "text1")}
              className="text-amber-400 hover:text-amber-300 cursor-pointer flex items-center gap-1"
            >
              {copiedField === "text1" ? <FaCheckCircle /> : <FaCopy />}
            </button>
          </div>
        </div>

        {/* Copy Field 2 */}
        <div className="mb-6">
          <p className="text-gray-400 mb-1">Reference Code</p>
          <div className="flex items-center justify-between bg-black/50 border border-gray-700 rounded-lg px-4 py-3">
            <span className="text-white text-sm">{text2}</span>
            <button
              onClick={() => handleCopy(text2, "text2")}
              className="text-amber-400 hover:text-amber-300 cursor-pointer flex items-center gap-1"
            >
              {copiedField === "text2" ? <FaCheckCircle /> : <FaCopy />}
            </button>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-3 mb-6 text-sm text-gray-300">
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

        {/* Button */}
        <button
          onClick={handleInvestMore}
          disabled={isDisabled}
          className={`w-full py-3 rounded-lg font-semibold transition
          ${
            isDisabled
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-green-500 text-black hover:bg-green-600 cursor-pointer active:scale-95"
          }`}
        >
          {loading ? "Processing..." : "Invest More"}
        </button>

      </div>
    </div>
  );
};

export default InvestMore;