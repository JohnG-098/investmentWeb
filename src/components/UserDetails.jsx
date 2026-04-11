import React from "react";
import { FaCheckCircle, FaTimesCircle, FaImage } from "react-icons/fa";

const UserDetails = ({
  firstName,
  lastName,
  email,
  amount,
  country,
  verified,
  idSubmitted,
  onVerify,
  image,
  secondImage,
}) => {
  const canVerify = idSubmitted;

  return (
    <div className="w-[330px] bg-black/40 backdrop-blur-lg border border-amber-400/20 rounded-2xl shadow-xl p-5 flex flex-col text-center hover:scale-[1.02] transition">

      {/* Images */}
      <div className="flex flex-col gap-3 mb-4">

        {/* Image 1 */}
        <div className="relative group w-full h-32 rounded-xl overflow-hidden border border-amber-400/30 bg-black/50 flex items-center justify-center">
          {image ? (
            <>
              <img
                src={image}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />

              {/* POP OUT PREVIEW */}
              <div className="absolute hidden group-hover:flex items-center justify-center z-50">
                <img
                  src={image}
                  className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[260px] h-[180px] object-cover rounded-xl border border-amber-400 shadow-2xl"
                />
              </div>
            </>
          ) : (
            <div className="text-gray-400 text-xs flex flex-col items-center">
              <FaImage className="text-2xl mb-1" />
              No Image
            </div>
          )}
        </div>

        {/* Image 2 */}
        <div className="relative group w-full h-32 rounded-xl overflow-hidden border border-amber-400/30 bg-black/50 flex items-center justify-center">
          {secondImage ? (
            <>
              <img
                src={secondImage}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />

              {/* POP OUT PREVIEW */}
              <div className="absolute hidden group-hover:flex items-center justify-center z-50">
                <img
                  src={secondImage}
                  className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-[260px] h-[180px] object-cover rounded-xl border border-amber-400 shadow-2xl"
                />
              </div>
            </>
          ) : (
            <div className="text-gray-400 text-xs flex flex-col items-center">
              <FaImage className="text-2xl mb-1" />
              No Image
            </div>
          )}
        </div>

      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-amber-400">
        {firstName} {lastName}
      </h3>

      {/* Info */}
      <div className="mt-2 text-sm text-gray-300 space-y-1">
        <p>{email}</p>
        <p>Amount Invested: ${amount.toFixed(2)}</p>
        <p>{country}</p>
      </div>

      {/* Status */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {verified ? (
          <>
            <FaCheckCircle className="text-green-500" />
            <span className="text-green-400">KYC Verified</span>
          </>
        ) : (
          <>
            <FaTimesCircle className="text-red-500" />
            <span className="text-red-400">Not Verified</span>
          </>
        )}
      </div>

      {/* ID Status */}
      <p className="mt-2 text-xs text-gray-400">
        {idSubmitted ? "ID Submitted" : "No ID Submitted"}
      </p>

      {/* Button */}
      <button
        onClick={onVerify}
        disabled={!canVerify}
        className={`mt-5 w-full py-2 rounded-lg cursor-pointer font-semibold transition active:scale-95
        ${
          !canVerify
            ? "bg-gray-600 cursor-not-allowed"
            : verified
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-green-500 hover:bg-green-600 text-white"
        }`}
      >
        {!canVerify
          ? "No ID Submitted"
          : verified
          ? "Revoke KYC"
          : "Verify KYC"}
      </button>
    </div>
  );
};

export default UserDetails;