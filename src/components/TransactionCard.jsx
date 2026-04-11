import React from "react";
import { FaCheckCircle, FaTimesCircle, FaSyncAlt } from "react-icons/fa";

const TransactionCard = ({
  firstName,
  lastName,
  email,
  amount,
  name,
  status,
  onAction,
  loadingId,
  _id,
}) => {
  const isPending = status === "pending";
  const isActive = status === "active";
  const isCancelled = status === "cancelled";

  return (
    <div className="w-[320px] bg-black/40 backdrop-blur-lg border border-amber-400/20 rounded-2xl shadow-xl p-5 text-center">

      {/* Name */}
      <h3 className="text-lg font-semibold text-amber-400">
        {firstName} {lastName}
      </h3>

      {/* Email */}
      <p className="text-sm text-gray-400 mt-1">{email}</p>

      {/* Plan */}
      <p className="mt-3 text-amber-300 font-medium">{name}</p>

      {/* Amount */}
      <p className="text-2xl font-bold text-green-400 mt-2">
        ${amount.toLocaleString()}
      </p>

      {/* Status */}
      <div className="mt-3 flex justify-center items-center gap-2">
        {isActive && (
          <>
            <FaCheckCircle className="text-green-500" />
            <span className="text-green-400 text-sm capitalize">{status}</span>
          </>
        )}
        {isPending && (
          <>
            <FaSyncAlt className="text-yellow-400 animate-spin" />
            <span className="text-yellow-300 text-sm capitalize">{status}</span>
          </>
        )}
        {isCancelled && (
          <>
            <FaTimesCircle className="text-red-500" />
            <span className="text-red-400 text-sm capitalize">{status}</span>
          </>
        )}
      </div>

      {/* ACTION BUTTONS */}
      <div className="mt-5 flex flex-col gap-2">

        {/* VERIFY → ACTIVE */}
        {!isActive && (
          <button
            onClick={() => onAction(_id, email, "active")}
            disabled={loadingId === _id}
            className={`w-full py-2 rounded-lg font-semibold transition
            ${
              loadingId === _id
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-green-500 text-black hover:bg-green-600 cursor-pointer active:scale-95"
            }`}
          >
            {loadingId === _id ? "Processing..." : "Verify"}
          </button>
        )}

        {/* CANCEL → CANCELLED */}
        {!isCancelled && (
          <button
            onClick={() => onAction(_id, email, "cancelled")}
            disabled={loadingId === _id}
            className={`w-full py-2 rounded-lg font-semibold transition
            ${
              loadingId === _id
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-red-500 text-black hover:bg-red-600 cursor-pointer active:scale-95"
            }`}
          >
            {loadingId === _id ? "Processing..." : "Cancel"}
          </button>
        )}

        {/* SET PENDING */}
        {!isPending && (
          <button
            onClick={() => onAction(_id, email, "pending")}
            disabled={loadingId === _id}
            className={`w-full py-2 rounded-lg font-semibold transition
            ${
              loadingId === _id
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer active:scale-95"
            }`}
          >
            {loadingId === _id ? "Processing..." : "Set Pending"}
          </button>
        )}

      </div>
    </div>
  );
};

export default TransactionCard;