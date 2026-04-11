import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const Warning = ({ message, onConfirm, onCancel, loading }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-black border border-red-500/30 rounded-2xl p-6 w-[90%] max-w-md shadow-2xl text-center">

        <FaExclamationTriangle className="text-red-500 text-3xl mx-auto mb-3" />

        <h3 className="text-lg font-bold text-red-400 mb-2">
          Warning
        </h3>

        <p className="text-gray-300 text-sm mb-6">
          {message}
        </p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="w-full py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold transition
            ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-black cursor-pointer"
            }`}
          >
            {loading ? "Processing..." : "Verify"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Warning;