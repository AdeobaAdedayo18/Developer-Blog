import React from "react";
import useAuth from "../context/useAuth";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: React.ReactElement;
}

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const { user } = useAuth();
  console.log(user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoutes;
