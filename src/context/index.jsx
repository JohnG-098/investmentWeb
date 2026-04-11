// Context.jsx
import { createContext, useState, useEffect } from "react";
import SummaryApi from "../common";

const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined); // 🔥 undefined = loading
  const [loading, setLoading] = useState(true);

  // ✅ tells app auth check is complete
  const [authReady, setAuthReady] = useState(false);

  const fetchUserDetails = async () => {
    try {
      console.log("Fetching user...");

      const res = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok && data.success) {
        console.log("User fetched:", data.data);
        setUser(data.data); // ✅ logged in
      } else {
        console.log("Not authenticated");
        setUser(null); // ❌ not logged in
      }
    } catch (err) {
      console.log("Error fetching user:", err);
      setUser(null);
    } finally {
      setLoading(false);
      setAuthReady(true); // 🔥 important
    }
  };

  // ✅ run ONLY once
  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        fetchUserDetails,
        loading,
        authReady,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;