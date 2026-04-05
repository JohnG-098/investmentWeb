import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import UserDetails from "../components/UserDetails";
import { toast } from "react-hot-toast";

const Restrict = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users
  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch(SummaryApi.getAllUsers.url, {
        method: SummaryApi.getAllUsers.method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await response.json();
      setUsers(data.success ? data.data || [] : []);
    } catch (error) {
      console.error("Fetch users error:", error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Toggle KYC
  const handleVerify = async (userId, email, firstName) => {
    try {
      const response = await fetch(SummaryApi.verifyKyc.url, {
        method: SummaryApi.verifyKyc.method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ userId, email }),
      });

      const data = await response.json();

      if (data.success) {
        setUsers((prev) =>
          prev.map((u) =>
            u._id === userId
              ? { ...u, idVerified: !u.idVerified }
              : u
          )
        );

        // Toast message
        toast.success(
          `${firstName} KYC ${
            data.data?.idVerified ? "verified" : "revoked"
          }`
        );
      } else {
        toast.error(data.message || "Action failed");
      }
    } catch (error) {
      console.error("Verify error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen pt-20 px-6 md:px-12 py-10 bg-black text-amber-200">

      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Users Management
      </h2>

      {loading ? (
        <div className="text-center text-gray-400 animate-pulse">
          Loading users...
        </div>
      ) : users.length === 0 ? (
        <div className="text-center text-gray-400">
          No users found
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {users.map((user) => (
            <UserDetails
              key={user._id}
              userId={user._id}
              firstName={user.firstName}
              amount={user.Amount}
              lastName={user.lastName}
              email={user.email}
              country={user.country || "N/A"}
              idSubmitted={user.idSubmitted}
              verified={user.idVerified}
              image={user.idUrl}
              secondImage={user.secondIdUrl} // optional
              onVerify={() =>
                handleVerify(user._id, user.email, user.firstName)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Restrict;