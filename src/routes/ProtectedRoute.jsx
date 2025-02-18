// import React from "react";
// import { Navigate } from "react-router-dom";

// // Dummy authentication check (replace with actual auth logic)
// const isAuthenticated = () => {
//   // Example: Replace with actual authentication check logic
//   return localStorage.getItem("authToken") !== null;
// };

// const ProtectedRoute = ({ element }) => {
//   return isAuthenticated() ? element : <Navigate to="/signin" />;
// };

// export default ProtectedRoute;




import React from "react";
import { Navigate } from "react-router-dom";
import TokenService from "../utils/TokenService"; // Import the TokenService

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = () => {
        // Use TokenService to check for a valid token
        return TokenService.getToken() !== null;
    };

    return isAuthenticated() ? element : <Navigate to="/signin" />;
};

export default ProtectedRoute;