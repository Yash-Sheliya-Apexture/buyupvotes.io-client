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

// App.jsx
import React from "react";
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
import { Suspense } from "react"; // Import Suspense
import { FaSpinner } from 'react-icons/fa'; // Import spinner
import { BalanceProvider } from "./context/BalanceContext"; // Import BalanceProvider

const App = () => {
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
                    <BalanceProvider>  {/* Wrap with BalanceProvider */}
                        <Suspense fallback={<div className="flex justify-center items-center h-screen"><FaSpinner className="text-2xl animate-spin text-gray-500" /></div>}> {/* Wrap Routes with Suspense */}
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
                    </BalanceProvider>
                </AuthProvider>
            </Scroll_To_Top>
        </Router>
    );
};

export default App;