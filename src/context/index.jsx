import { createContext, useState, useEffect } from "react";
import SummaryApi from "../common";

const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch logged-in user
  const fetchUserDetails = async () => {
    try {
      const res = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include",
      });

      const data = await res.json();
      //console.log("USER DATA FROM BACKEND:", data);

      if (data.success) {
        setUser(data.data); 
        //console.log("SET USER:", data.data);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.log("Error fetching user:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Run on app start (important!)
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;