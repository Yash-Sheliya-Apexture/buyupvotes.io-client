// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WebsiteRoutes from "./routes/WebsiteRoutes";
// import DashboardRoutes from "./routes/DashboardRoutes";
// import AdminRoutes from "./routes/AdminRoutes";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Scroll_To_Top from "./Components/Scroll_To_Top";
// import "react-loading-skeleton/dist/skeleton.css";
// import { AuthProvider } from "./auth/AuthContext";
// import { Suspense } from "react"; // Import Suspense

// const App = () => {
//     return (
//         <Router>
//             <ToastContainer
//                 autoClose={3000}
//                 hideProgressBar={false}
//                 closeOnClick
//                 draggable
//                 pauseOnHover
//                 theme="light"
//                 toastStyle={{ fontFamily: "InterDisplay, sans-serif" }}
//             />
//             <Scroll_To_Top>
//                 <AuthProvider>
//                     <Suspense fallback={<div>Loading...</div>}> {/* Wrap Routes with Suspense */}
//                         <Routes>
//                             {/* Protected Dashboard Routes */}
//                             <Route
//                                 path="/dashboard/*"
//                                 element={<ProtectedRoute element={<DashboardRoutes />} />}
//                             />
//                             {/* Protected Admin Routes */}
//                             <Route
//                                 path="/admin/*"
//                                 element={
//                                     <ProtectedRoute
//                                         element={<AdminRoutes />}
//                                         requiredRole="admin"
//                                     />
//                                 }
//                             />
//                             <Route path="/*" element={<WebsiteRoutes />} />
//                         </Routes>
//                     </Suspense>
//                 </AuthProvider>
//             </Scroll_To_Top>
//         </Router>
//     );
// };

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WebsiteRoutes from "./routes/WebsiteRoutes";
// import DashboardRoutes from "./routes/DashboardRoutes";
// import AdminRoutes from "./routes/AdminRoutes";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Scroll_To_Top from "./Components/Scroll_To_Top";
// import "react-loading-skeleton/dist/skeleton.css";
// import { AuthProvider } from "./auth/AuthContext";
// import { Suspense } from "react"; // Import Suspense
// import { FaSpinner } from 'react-icons/fa'; // Import spinner

// const App = () => {
//     return (
//         <Router>
//             <ToastContainer
//                 autoClose={3000}
//                 hideProgressBar={false}
//                 closeOnClick
//                 draggable
//                 pauseOnHover
//                 theme="light"
//                 toastStyle={{ fontFamily: "InterDisplay, sans-serif" }}
//             />
//             <Scroll_To_Top>
//                 <AuthProvider>
//                     <Suspense fallback={<div className="flex justify-center items-center h-screen"><FaSpinner className="text-2xl animate-spin text-gray-500" /></div>}> {/* Wrap Routes with Suspense */}
//                         <Routes>
//                             {/* Protected Dashboard Routes */}
//                             <Route
//                                 path="/dashboard/*"
//                                 element={<ProtectedRoute element={<DashboardRoutes />} />}
//                             />
//                             {/* Protected Admin Routes */}
//                             <Route
//                                 path="/admin/*"
//                                 element={
//                                     <ProtectedRoute
//                                         element={<AdminRoutes />}
//                                         requiredRole="admin"
//                                     />
//                                 }
//                             />
//                             <Route path="/*" element={<WebsiteRoutes />} />
//                         </Routes>
//                     </Suspense>
//                 </AuthProvider>
//             </Scroll_To_Top>
//         </Router>
//     );
// };

// export default App;

// // App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WebsiteRoutes from "./routes/WebsiteRoutes";
// import DashboardRoutes from "./routes/DashboardRoutes";
// import AdminRoutes from "./routes/AdminRoutes";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Scroll_To_Top from "./Components/Scroll_To_Top";
// import "react-loading-skeleton/dist/skeleton.css";
// import { AuthProvider } from "./auth/AuthContext";
// import { Suspense } from "react"; // Import Suspense
// import { FaSpinner } from 'react-icons/fa'; // Import spinner

// const App = () => {
//     return (
//         <Router>
//             <ToastContainer
//                 autoClose={3000}
//                 hideProgressBar={false}
//                 closeOnClick
//                 draggable
//                 pauseOnHover
//                 theme="light"
//                 toastStyle={{ fontFamily: "InterDisplay, sans-serif" }}
//             />
//             <Scroll_To_Top>
//                     <AuthProvider>
//                         <Suspense fallback={<div className="flex justify-center items-center h-screen"><FaSpinner className="text-2xl animate-spin text-gray-500" /></div>}> {/* Wrap Routes with Suspense */}
//                             <Routes>
//                                 {/* Protected Dashboard Routes */}
//                                 <Route
//                                     path="/dashboard/*"
//                                     element={<ProtectedRoute element={<DashboardRoutes />} />}
//                                 />
//                                 {/* Protected Admin Routes */}
//                                 <Route
//                                     path="/admin/*"
//                                     element={
//                                         <ProtectedRoute
//                                             element={<AdminRoutes />}
//                                             requiredRole="admin"
//                                         />
//                                     }
//                                 />
//                                 <Route path="/*" element={<WebsiteRoutes />} />
//                             </Routes>
//                         </Suspense>
//                     </AuthProvider>
//             </Scroll_To_Top>
//         </Router>
//     );
// };

// export default App;



// // App.jsx
// import React, { Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WebsiteRoutes from "./routes/WebsiteRoutes";
// import DashboardRoutes from "./routes/DashboardRoutes";
// import AdminRoutes from "./routes/AdminRoutes";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Scroll_To_Top from "./Components/Scroll_To_Top";
// import "react-loading-skeleton/dist/skeleton.css";
// import { AuthProvider } from "./auth/AuthContext";
// import { FaSpinner } from 'react-icons/fa';
// import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider

// const App = () => {
//     const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID; // Get Google Client ID from env

//     return (
//         <Router>
//             <ToastContainer
//                 autoClose={3000}
//                 hideProgressBar={false}
//                 closeOnClick
//                 draggable
//                 pauseOnHover
//                 theme="light"
//                 toastStyle={{ fontFamily: "InterDisplay, sans-serif" }}
//             />
//             <Scroll_To_Top>
//                 <AuthProvider>
//                     {/* Wrap your Routes with GoogleOAuthProvider and provide clientId */}
//                     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
//                         <Suspense fallback={<div className="flex justify-center items-center h-screen"><FaSpinner className="text-2xl animate-spin text-gray-500" /></div>}>
//                             <Routes>
//                                 {/* Protected Dashboard Routes */}
//                                 <Route
//                                     path="/dashboard/*"
//                                     element={<ProtectedRoute element={<DashboardRoutes />} />}
//                                 />
//                                 {/* Protected Admin Routes */}
//                                 <Route
//                                     path="/admin/*"
//                                     element={
//                                         <ProtectedRoute
//                                             element={<AdminRoutes />}
//                                             requiredRole="admin"
//                                         />
//                                     }
//                                 />
//                                 <Route path="/*" element={<WebsiteRoutes />} />
//                             </Routes>
//                         </Suspense>
//                     </GoogleOAuthProvider>
//                 </AuthProvider>
//             </Scroll_To_Top>
//         </Router>
//     );
// };

// export default App;



// // App.jsx
// import React, { Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WebsiteRoutes from "./routes/WebsiteRoutes";
// import DashboardRoutes from "./routes/DashboardRoutes";
// import AdminRoutes from "./routes/AdminRoutes";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Scroll_To_Top from "./Components/Scroll_To_Top";
// import "react-loading-skeleton/dist/skeleton.css";
// import { AuthProvider } from "./auth/AuthContext";
// import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider
// const App = () => {
//     const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID; // Get Google Client ID from env

//     return (
//         <Router>
//             <ToastContainer
//                 autoClose={3000}
//                 hideProgressBar={false}
//                 closeOnClick
//                 draggable
//                 pauseOnHover
//                 theme="light"
//                 toastStyle={{ fontFamily: "InterDisplay, sans-serif" }}
//             />
//             <Scroll_To_Top>
//                 <AuthProvider>
//                     {/* Wrap Routes with GoogleOAuthProvider */}
//                     <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
//                         <Suspense fallback={
//                             <div className="flex justify-center items-center h-screen">
//                                 <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
//                             </div>
//                         }>
//                             <Routes>
//                                 {/* Protected Dashboard Routes */}
//                                 <Route
//                                     path="/dashboard/*"
//                                     element={<ProtectedRoute element={<DashboardRoutes />} />}
//                                 />
//                                 {/* Protected Admin Routes */}
//                                 <Route
//                                     path="/admin/*"
//                                     element={
//                                         <ProtectedRoute
//                                             element={<AdminRoutes />}
//                                             requiredRole="admin"
//                                         />
//                                     }
//                                 />
//                                 <Route path="/*" element={<WebsiteRoutes />} />
//                             </Routes>
//                         </Suspense>
//                     </GoogleOAuthProvider>
//                 </AuthProvider>
//             </Scroll_To_Top>
//         </Router>
//     );
// };

// export default App;

import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteRoutes from "./routes/WebsiteRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Scroll_To_Top from "./Components/Scroll_To_Top";
import "react-loading-skeleton/dist/skeleton.css";
import { AuthProvider } from "./auth/AuthContext";
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider

// Vercel Analytics and Speed Insights Imports
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"; // Correct import for React/Vite

const App = () => {
    const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID; // Get Google Client ID from env

    return (
        <Router>
            <ToastContainer
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                draggable
                pauseOnHover
                theme="light"
                toastStyle={{ fontFamily: "InterDisplay, sans-serif" }}
            />
            <Scroll_To_Top>
                <AuthProvider>
                    {/* Wrap Routes with GoogleOAuthProvider */}
                    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                        <Analytics />
                        <SpeedInsights />
                        <Suspense fallback={
                            <div className="flex justify-center items-center h-screen">
                                <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
                            </div>
                        }>
                            <Routes>
                                {/* Protected Dashboard Routes */}
                                <Route
                                    path="/dashboard/*"
                                    element={<ProtectedRoute element={<DashboardRoutes />} />}
                                />
                                {/* Protected Admin Routes */}
                                <Route
                                    path="/admin/*"
                                    element={
                                        <ProtectedRoute
                                            element={<AdminRoutes />}
                                            requiredRole="admin"
                                        />
                                    }
                                />
                                <Route path="/*" element={<WebsiteRoutes />} />
                            </Routes>
                        </Suspense>
                    </GoogleOAuthProvider>
                </AuthProvider>
            </Scroll_To_Top>
        </Router>
    );
};

export default App;