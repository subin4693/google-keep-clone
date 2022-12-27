import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "./context/Context";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();
  if (user) return children;
  return <Navigate to="/" />;
};

export default ProtectedRoute;
