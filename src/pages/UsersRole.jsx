import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import UserRoleDetails from "../components/UserRoleDetails";
import Warning from "../components/Warning";

const UsersRole = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [loadingId, setLoadingId] = useState(null);

  // Warning modal state
  const [showWarning, setShowWarning] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await fetch(SummaryApi.fetchUsers.url, {
          method: SummaryApi.fetchUsers.method,
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const data = await response.json();

        if (data.success) {
          setUsers(data.data || []);
        } else {
          setMessage(data.message || "Failed to fetch users");
        }
      } catch (error) {
        console.error(error);
        setMessage("Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Open warning
  const handleToggleClick = (user) => {
    setSelectedUser(user);
    setShowWarning(true);
  };

  // Confirm role change
  const handleConfirm = async () => {
    try {
      if (!selectedUser) return;

      setLoadingId(selectedUser.userId);

      const response = await fetch(SummaryApi.changeRole.url, {
        method: SummaryApi.changeRole.method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          userId: selectedUser.userId,
          email: selectedUser.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message || "Role updated");

        // Update UI instantly
        setUsers((prev) =>
          prev.map((u) =>
            u._id === selectedUser.userId
              ? {
                  ...u,
                  role: u.role === "admin" ? "user" : "admin",
                }
              : u
          )
        );
      } else {
        setMessage(data.message || "Failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error");
    } finally {
      setLoadingId(null);
      setShowWarning(false);
      setSelectedUser(null);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-6 md:px-12 py-10 bg-black text-amber-200">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Users Role Management
      </h2>

      {/* Message */}
      {message && (
        <div className="text-center mb-6 text-sm text-yellow-300 bg-yellow-500/10 border border-yellow-400/30 py-2 px-4 rounded-lg inline-block mx-auto">
          {message}
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="text-center text-gray-400 animate-pulse">
          Fetching users...
        </div>
      ) : users.length === 0 ? (
        <div className="text-center text-gray-400">
          No users found
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">

          {users.map((user) => (
            <UserRoleDetails
              key={user._id}
              _id={user._id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              role={user.role}
              onToggle={handleToggleClick}
              loadingId={loadingId}
            />
          ))}

        </div>
      )}

      {/* WARNING MODAL */}
      {showWarning && selectedUser && (
        <Warning
          message={
            selectedUser.role === "admin"
              ? "You are about to remove admin privileges from this user."
              : "You are about to grant admin privileges to this user."
          }
          onConfirm={handleConfirm}
          onCancel={() => setShowWarning(false)}
          loading={loadingId === selectedUser.userId}
        />
      )}
    </div>
  );
};

export default UsersRole;