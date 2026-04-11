import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserShield,
  FaExchangeAlt,
  FaUsersCog,
} from "react-icons/fa";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 bg-black text-amber-200">
      
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-400">
          Admin Control Panel
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Manage users, transactions, and identity verification
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* KYC Verification */}
        <div
          onClick={() => navigate("/admin/verify-kyc")}
          className="group cursor-pointer bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-2xl p-6 shadow-lg hover:shadow-amber-500/10 transition duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber-500/10 mb-4 group-hover:bg-amber-500/20 transition">
            <FaUserShield className="text-2xl text-amber-400" />
          </div>

          <h3 className="text-xl font-semibold text-amber-300 mb-2">
            KYC Verification
          </h3>

          <p className="text-gray-400 text-sm">
            Review and approve user identity documents for account verification.
          </p>
        </div>

        {/* Transactions */}
        <div
          onClick={() => navigate("/admin/transactions")}
          className="group cursor-pointer bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-2xl p-6 shadow-lg hover:shadow-green-500/10 transition duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-green-500/10 mb-4 group-hover:bg-green-500/20 transition">
            <FaExchangeAlt className="text-2xl text-green-400" />
          </div>

          <h3 className="text-xl font-semibold text-green-300 mb-2">
            Transactions Management
          </h3>

          <p className="text-gray-400 text-sm">
            Monitor, verify, cancel, or update user transactions in real-time.
          </p>
        </div>

        {/* User Roles */}
        <div
          onClick={() => navigate("/admin/user-roles")}
          className="group cursor-pointer bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/10 transition duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-500/10 mb-4 group-hover:bg-purple-500/20 transition">
            <FaUsersCog className="text-2xl text-purple-400" />
          </div>

          <h3 className="text-xl font-semibold text-purple-300 mb-2">
            User Roles & Access
          </h3>

          <p className="text-gray-400 text-sm">
            Assign admin privileges and manage user roles securely.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Admin;