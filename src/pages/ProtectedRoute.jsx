import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context";

const ProtectedRoute = ({ children }) => {
  const { user, fetchUserDetails } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      // 🔥 try getting user from backend (cookie-based auth)
      await fetchUserDetails();
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (user === null) {
      // still loading OR not logged in
      const timer = setTimeout(() => {
        if (!user) {
          navigate("/login");
        }
      }, 500); // small delay to allow fetch

      return () => clearTimeout(timer);
    }
  }, [user]);

  return children;
};

export default ProtectedRoute;