// Context.jsx
import { createContext, useState, useEffect } from "react";
import SummaryApi from "../common";

const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ prevents navbar flicker before auth loads
  const [authReady, setAuthReady] = useState(false);

  const fetchUserDetails = async () => {
    try {
      const res = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        setUser(data.data);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.log("Error fetching user:", err);
      setUser(null);
    } finally {
      setLoading(false);
      setAuthReady(true);
    }
  };

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