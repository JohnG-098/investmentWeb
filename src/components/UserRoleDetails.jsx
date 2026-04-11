import React from "react";

const UserRoleDetails = ({
  _id,
  firstName,
  lastName,
  email,
  role,
  onToggle,
  loadingId,
}) => {
  const isAdmin = role === "admin";

  return (
    <div className="w-[300px] bg-black/40 backdrop-blur-lg border border-amber-400/20 rounded-2xl shadow-xl p-5 text-center">

      {/* Name */}
      <h3 className="text-lg font-semibold text-amber-400">
        {firstName} {lastName}
      </h3>

      {/* Email */}
      <p className="text-sm text-gray-400 mt-1">{email}</p>

      {/* Role */}
      <p className={`mt-3 font-semibold capitalize
        ${isAdmin ? "text-red-400" : "text-green-400"}`}>
        {role}
      </p>

      {/* Button */}
      <button
        onClick={() => onToggle({ userId: _id, email, role })}
        disabled={loadingId === _id}
        className={`mt-5 w-full py-2 rounded-lg font-semibold transition
        ${
          loadingId === _id
            ? "bg-gray-600 cursor-not-allowed"
            : isAdmin
            ? "bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer"
            : "bg-amber-400 text-black hover:bg-amber-500 cursor-pointer"
        }`}
      >
        {loadingId === _id
          ? "Processing..."
          : isAdmin
          ? "Make User"
          : "Make Admin"}
      </button>
    </div>
  );
};

export default UserRoleDetails;