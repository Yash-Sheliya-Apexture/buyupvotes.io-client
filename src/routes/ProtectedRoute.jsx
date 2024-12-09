import React from "react";
import { Navigate } from "react-router-dom";

// Dummy authentication check (replace with actual auth logic)
const isAuthenticated = () => {
  // Example: Replace with actual authentication check logic
  return localStorage.getItem("authToken") !== null;
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;
