import React from "react";
import useAuth from "../context/useAuth";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: React.ReactElement;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth status
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
