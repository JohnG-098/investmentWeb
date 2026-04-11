import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context";

const ProtectedAdminRoute = ({ children }) => {
  const { user, authReady } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authReady) return;

    if (user === null) {
      navigate("/login");
      return;
    }

    if (user?.role !== "admin") {
      navigate("/not-found");
    }

  }, [user, authReady, navigate]);

  if (!authReady || user === undefined) {
    return <div>Loading...</div>;
  }

  if (user?.role !== "admin") {
    return null;
  }

  return children;
};

export default ProtectedAdminRoute;