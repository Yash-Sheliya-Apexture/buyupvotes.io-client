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




// import React from "react";
// import { Navigate } from "react-router-dom";
// import TokenService from "../utils/TokenService"; // Import the TokenService

// const ProtectedRoute = ({ element }) => {
//     const isAuthenticated = () => {
//         // Use TokenService to check for a valid token
//         return TokenService.getToken() !== null;
//     };

//     return isAuthenticated() ? element : <Navigate to="/signin" />;
// };

// export default ProtectedRoute;


// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";  // Import useAuth hook

// const ProtectedRoute = ({ element, requiredRole }) => {
//     const { user } = useAuth();  // Access user from AuthContext
//     const isAuthenticated = () => {
//         return localStorage.getItem('authToken') !== null;
//     };

//     // Check if authenticated *and* has the required role
//     if (!isAuthenticated()) {
//         return <Navigate to="/signin" />;
//     }

//     if (requiredRole && (!user || user.role !== requiredRole)) {
//         // User is authenticated, but doesn't have the required role
//         return <Navigate to="/" />; // Or another appropriate route
//     }

//     return element; // User is authenticated and has the required role, render the element
// };

// export default ProtectedRoute;


// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";

// const ProtectedRoute = ({ element, requiredRole }) => {
//     const { user, loading } = useAuth(); // Get user and loading state
//     const isAuthenticated = () => {
//         return localStorage.getItem('authToken') !== null;
//     };


//     if (loading) {
//         return <div>Loading...</div>; // Or a spinner, etc.  Prevent rendering before user is loaded.
//     }

//     if (!isAuthenticated()) {
//         return <Navigate to="/signin" />;
//     }

//     if (requiredRole && (!user || user.role !== requiredRole)) {
//         // User is authenticated, but doesn't have the required role
//         return <Navigate to="/" />; // Or a "Unauthorized" page
//     }

//     return element; // User is authenticated and has the required role, render the element
// };

// export default ProtectedRoute;


// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";

// const ProtectedRoute = ({ element, requiredRole }) => {
//     const { user, loading } = useAuth();

//     if (!loading) {
//         return
//         <>
//             <div className="flex flex-col items-center">
//                 <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
//             </div>
//         </> 
//     }

//     if (!user) { // Check for user instead of isAuthenticated()
//         return <Navigate to="/signin" />;
//     }

//     if (requiredRole && user.role !== requiredRole) {
//         // User is authenticated, but doesn't have the required role
//         return <Navigate to="/" />; // Or an "Unauthorized" page
//     }

//     return element; // User is authenticated and has the required role, render the element
// };

// export default ProtectedRoute;


import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const ProtectedRoute = ({ element, requiredRole }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
            </div>
        );
    }

    if (!user) { // Check for user instead of isAuthenticated()
        return <Navigate to="/signin" />;
    }

    if (requiredRole && user.role !== requiredRole) {
        // User is authenticated, but doesn't have the required role
        return <Navigate to="/" />; // Or an "Unauthorized" page
    }

    return element; // User is authenticated and has the required role, render the element
};

export default ProtectedRoute;