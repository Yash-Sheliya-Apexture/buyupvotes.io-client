import React from "react";
import { Navigate } from "react-router-dom";

// Dummy authentication check (replace with actual auth logic)
const isAuthenticated = () => {
  // Example: Replace with actual authentication check logic
  return localStorage.getItem("authToken") !== null;
};

const RedirectIfLoggedIn = ({ children }) => {
  if (isAuthenticated()) {
    // Redirect to the dashboard if the user is logged in
    return <Navigate to="/dashboard" />;
  }

  return children; // Render the child components (e.g., SignIn or SignUp) if not authenticated
};

export default RedirectIfLoggedIn;
