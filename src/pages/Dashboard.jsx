import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-amber-200 px-4 md:px-10 py-24">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Dashboard
        </h1>
        <p className="text-gray-400 mt-2">
          Welcome back, Investor 👋
        </p>
      </div>

      {/* Wallet Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">

        {/* Balance */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 md:p-6 
        shadow-lg border border-amber-500/20 hover:border-amber-400/40 
        transition duration-300">
          <p className="text-gray-400 text-sm">Wallet Balance</p>
          <h2 className="text-xl md:text-3xl font-bold mt-2 text-amber-400">
            $12,450.00
          </h2>
        </div>

        {/* Invested */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 md:p-6 
        shadow-lg border border-amber-500/20 hover:border-amber-300/40 
        transition duration-300">
          <p className="text-gray-400 text-sm">Total Invested</p>
          <h2 className="text-xl md:text-3xl font-bold mt-2 text-amber-300">
            $8,000.00
          </h2>
        </div>

        {/* Profit (spans full width on mobile) */}
        <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-gray-900 to-black 
        rounded-2xl p-4 md:p-6 shadow-lg border border-green-500/20 
        hover:border-green-400/40 transition duration-300">
          <p className="text-gray-400 text-sm">Total Profit</p>
          <h2 className="text-xl md:text-3xl font-bold mt-2 text-green-400">
            $4,450.00
          </h2>
        </div>

      </div>

      {/* Active Plan */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 md:p-6 
      shadow-lg border border-amber-500/20 mb-10">

        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Active Investment Plan
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">

          <div>
            <p className="text-gray-400 text-sm">Plan Name</p>
            <p className="text-base md:text-lg font-semibold text-amber-300">
              PRO PLAN
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Return Rate</p>
            <p className="text-base md:text-lg font-semibold">
              25% Weekly
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Duration</p>
            <p className="text-base md:text-lg font-semibold">
              168 Hours
            </p>
          </div>

          <div>
            <p className="text-gray-400 text-sm">Total Return</p>
            <p className="text-base md:text-lg font-semibold text-green-400">
              4200% + Capital
            </p>
          </div>

        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">

        <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-xl transition shadow-md">
          Deposit
        </button>

        <button className="bg-gray-800 hover:bg-gray-700 border border-amber-500/20 py-3 rounded-xl transition">
          Withdraw
        </button>

        <button className="bg-gray-800 hover:bg-gray-700 border border-amber-500/20 py-3 rounded-xl transition">
          Invest More
        </button>

      </div>

      {/* Recent Activity */}
      <div className="mt-12">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Recent Transactions
        </h2>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-5 md:p-6 
        shadow-lg border border-amber-500/20">

          <div className="flex justify-between py-3 border-b border-gray-800 text-sm md:text-base">
            <span>Deposit</span>
            <span className="text-green-400">+$2,000</span>
          </div>

          <div className="flex justify-between py-3 border-b border-gray-800 text-sm md:text-base">
            <span>Investment</span>
            <span className="text-amber-400">-$1,500</span>
          </div>

          <div className="flex justify-between py-3 text-sm md:text-base">
            <span>Profit</span>
            <span className="text-green-400">+$500</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;