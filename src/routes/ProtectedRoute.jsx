// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../auth/AuthContext";

// const ProtectedRoute = ({ element, requiredRole }) => {
//     const { user, loading } = useAuth(); // Get user and loading state
//     const isAuthenticated = () => {
//         return localStorage.getItem('authToken') !== null;
//     };


//     if (loading) {
//         return <>
//             <div className="flex justify-center items-center h-screen">
//                 <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
//             </div>
//         </>; // Or a spinner, etc.  Prevent rendering before user is loaded.
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



import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { FaSpinner } from 'react-icons/fa'; // Import spinner


const ProtectedRoute = ({ element, requiredRole }) => {
    const { user, loading } = useAuth(); // Get user and loading state
    const isAuthenticated = () => {
        return localStorage.getItem('authToken') !== null;
    };


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
            </div>
        );
    }

    if (!isAuthenticated()) {
        return <Navigate to="/signin" />;
    }

    if (requiredRole && (!user || user.role !== requiredRole)) {
        // User is authenticated, but doesn't have the required role
        return <Navigate to="/" />; // Or a "Unauthorized" page
    }

    return element; // User is authenticated and has the required role, render the element
};

export default ProtectedRoute;