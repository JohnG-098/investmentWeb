import React, { useContext, useEffect, useState } from "react";
import Context from "../context";
import SummaryApi from "../common";
import TransactionCard from "../components/TransactionCard";

const Transactions = () => {
  const { user, fetchUserDetails } = useContext(Context);

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    if (!user) {
      fetchUserDetails();
    }
  }, [user]);

  useEffect(() => {
    if (!user?.email || !user?._id) return;

    const fetchTransactions = async () => {
      try {
        setLoading(true);

        const response = await fetch(SummaryApi.getAllTransactions.url, {
          method: SummaryApi.getAllTransactions.method,
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            email: user.email,
            userId: user._id,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setTransactions(data.data || []);
        } else {
          setTransactions([]);
          setMessage(data.message || "Failed to fetch transactions");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setMessage("Server error while fetching transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user]);

  // ✅ UPDATED ACTION HANDLER
  const handleAction = async (transactionId, email, newStatus) => {
    try {
      setLoadingId(transactionId);
      setMessage("");

      const response = await fetch(SummaryApi.verifyTransaction.url, {
        method: SummaryApi.verifyTransaction.method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          transactionId,
          email,
          status: newStatus, // ✅ required by backend
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message || "Transaction updated");

        // ✅ Update UI instantly
        setTransactions((prev) =>
          prev.map((tx) =>
            tx._id === transactionId
              ? { ...tx, status: newStatus }
              : tx
          )
        );
      } else {
        setMessage(data.message || "Update failed");
      }
    } catch (error) {
      console.error("Action error:", error);
      setMessage("Server error");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-6 md:px-12 py-10 bg-black text-amber-200">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        All Transactions
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
          Fetching transactions...
        </div>
      ) : transactions.length === 0 ? (
        <div className="text-center text-gray-400">
          No transactions found
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">

          {transactions.map((tx) => (
            <TransactionCard
              key={tx._id}
              _id={tx._id}
              firstName={tx.firstName}
              lastName={tx.lastName}
              email={tx.email}
              amount={tx.amount}
              name={tx.name}
              status={tx.status}
              onAction={handleAction}
              loadingId={loadingId}
            />
          ))}

        </div>
      )}
    </div>
  );
};

export default Transactions;