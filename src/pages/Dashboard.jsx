import React, { useContext, useEffect, useState } from "react";
import Context from "../context";
import { useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { FaCircle, FaCheckCircle } from "react-icons/fa";
import VerifiedBadge from "../components/VerifiedBadge";

const Dashboard = () => {
  const { user, fetchUserDetails } = useContext(Context);
  const navigate = useNavigate();

  const [investments, setInvestments] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user if not loaded
  useEffect(() => {
    if (!user) {
      fetchUserDetails();
    }
  }, [user]);

  // Fetch investments
  useEffect(() => {
    if (!user?.email) return;

    const fetchInvestments = async () => {
      try {
        setLoading(true);
        const response = await fetch(SummaryApi.fetchInvestment.url, {
          method: SummaryApi.fetchInvestment.method,
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email: user.email }),
        });

        const data = await response.json();
        setInvestments(data.success ? data.data || [] : []);
      } catch (error) {
        console.error("Fetch investment error:", error);
        setInvestments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestments();
  }, [user]);

  // Fetch transactions
  useEffect(() => {
    if (!user?.email || !user?._id) return;

    const fetchTransactions = async () => {
      try {
        const response = await fetch(SummaryApi.getTransactions.url, {
          method: SummaryApi.getTransactions.method,
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email: user.email, userId: user._id }),
        });

        const data = await response.json();
        setTransactions(data.success ? data.data || [] : []);
      } catch (error) {
        console.error("Fetch transactions error:", error);
        setTransactions([]);
      }
    };

    fetchTransactions();
  }, [user]);

  const hasPendingTransaction = transactions.some(
    (tx) => tx.status === "pending"
  );

  const totalInvested = investments.reduce(
    (acc, item) => acc + (item.amountInvested || 0),
    0
  );

  const totalProfit = investments.reduce(
    (acc, item) =>
      acc +
      ((item.updatedAmount ?? item.amountInvested ?? 0) -
        (item.amountInvested ?? 0)),
    0
  );

  const walletBalance = totalInvested + totalProfit;

  const activeInvestment =
    investments.length > 0 ? investments[investments.length - 1] : null;

  // ✅ FIX: derive KYC directly (NO useState)
  const idVerified = user?.idVerified || false;
  const idUrl = user?.idUrl || null;

  console.log("User details:", user);

  return (
    <div className="min-h-screen bg-black text-amber-200 px-4 md:px-10 py-24 relative">
      {/* Header */}
      <div className="mb-10 relative flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">My Wallet</h1>

          <p className="text-gray-400 mt-2 flex items-center gap-3 flex-wrap">
            {user ? (
              <>
                {user.firstName}
                {/* ✅ VERIFIED BADGE */}
                {idVerified && (
                  <VerifiedBadge/>
                )}
              </>
            ) : (
              "Loading user..."
            )}

            {/* Yellow blinking pending transaction badge */}
            {hasPendingTransaction && (
              <span className="ml-2 px-3 py-1 rounded-full text-xs font-semibold text-yellow-300 bg-yellow-500/10 border border-yellow-400/30 shadow-[0_0_12px_rgba(234,179,8,0.7)] animate-pulse">
                Transaction pending confirmation
              </span>
            )}
          </p>
        </div>

        {/* Right side indicators */}
        <div className="flex items-center gap-3">
          {/* ✅ ID Pending (only when uploaded but not verified) */}
          {idUrl && !idVerified && (
            <p className="text-[11px] px-2 py-1 rounded-md bg-yellow-500/10 border border-yellow-400/30 text-yellow-300 animate-pulse">
              ID verification pending
            </p>
          )}

          {/* Green glowing circle */}
          <FaCircle className="text-green-400 w-2 h-2 animate-ping" />
        </div>
      </div>

      {/* Wallet Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
        <div
          className={`bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 md:p-6 shadow-lg border border-amber-500/20 transition duration-300 ${
            loading ? "animate-pulse" : ""
          }`}
        >
          <p className="text-gray-400 text-sm">Wallet Balance</p>
          <h2 className="text-xl md:text-3xl font-bold mt-2 text-amber-400">
            ${walletBalance.toLocaleString()}
          </h2>
        </div>

        <div
          className={`bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 md:p-6 shadow-lg border border-amber-500/20 transition duration-300 ${
            loading ? "animate-pulse" : ""
          }`}
        >
          <p className="text-gray-400 text-sm">Total Invested</p>
          <h2 className="text-xl md:text-3xl font-bold mt-2 text-amber-300">
            ${totalInvested.toLocaleString()}
          </h2>
        </div>

        <div
          className={`col-span-2 md:col-span-1 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 md:p-6 shadow-lg border border-green-500/20 transition duration-300 ${
            loading ? "animate-pulse" : ""
          }`}
        >
          <p className="text-gray-400 text-sm">Total Profit</p>
          <h2 className="text-xl md:text-3xl font-bold mt-2 text-green-400">
            ${totalProfit.toLocaleString()}
          </h2>
        </div>
      </div>

      {/* Active Plan */}
      <div
        className={`bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 md:p-6 shadow-lg border border-amber-500/20 mb-10 ${
          loading ? "animate-pulse" : ""
        }`}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Active Investment Plan
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <p className="text-gray-400 text-sm">Plan Name</p>
            <p className="text-base md:text-lg font-semibold text-amber-300">
              {activeInvestment?.plan?.name || "No active plan"}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Return Rate</p>
            <p className="text-base md:text-lg font-semibold">
              {activeInvestment?.plan?.return || "0%"}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Duration</p>
            <p className="text-base md:text-lg font-semibold">
              {activeInvestment?.plan?.returnLasting || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Total Return</p>
            <p className="text-base md:text-lg font-semibold text-green-400">
              {activeInvestment?.plan?.totalReturn || "0%"}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <button
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-xl transition shadow-md cursor-pointer"
          onClick={() => navigate("/plan")}
        >
          Invest
        </button>

        <button className="bg-gray-800 hover:bg-gray-700 border border-amber-500/20 py-3 rounded-xl transition cursor-pointer">
          Withdraw
        </button>
      </div>

      {/* ✅ Upload Button ONLY when idUrl is null */}
      {!idUrl && (
        <button
          onClick={() => navigate("/upload-id")}
          className="fixed bottom-6 right-6 bg-amber-400 text-black px-5 py-3 rounded-full shadow-lg hover:bg-amber-500 transition cursor-pointer"
        >
          Please Verify KYC
        </button>
      )}

      {/* Recent Activity */}
      <div className="mt-12">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Recent Transactions
        </h2>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 md:p-6 shadow-lg border border-amber-500/20">
          {loading ? (
            <div className="text-gray-400 text-center py-6 animate-pulse">
              Loading transactions...
            </div>
          ) : transactions.length === 0 ? (
            <div className="text-gray-400 text-center py-6">
              No transactions yet
            </div>
          ) : (
            transactions.map((item, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-800 text-sm md:text-base"
              >
                <span>
                  {item.name || "Investment"} +{" "}
                  <span
                    className={`capitalize px-3 py-1 rounded-full text-xs font-semibold tracking-wide
                    ${
                      item.status === "active"
                        ? "text-green-300 bg-green-500/10 border border-green-400/30 shadow-[0_0_10px_rgba(34,197,94,0.6)]"
                        : item.status === "pending"
                          ? "text-yellow-300 bg-yellow-500/10 border border-yellow-400/30 shadow-[0_0_10px_rgba(234,179,8,0.6)]"
                          : "text-green-300 bg-red-500/10 border border-green-400/30 shadow-[0_0_12px_rgba(34,197,94,0.7)]"
                    }`}
                  >
                    {item.status}
                  </span>
                </span>
                <span className="text-amber-400">+${item.amount}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
