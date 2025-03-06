// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WebsiteRoutes from "./routes/WebsiteRoutes";
// import DashboardRoutes from "./routes/DashboardRoutes";
// import AdminRoutes from "./routes/AdminRoutes";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Scroll_To_Top from "./Components/Scroll_To_Top"; // Import the component
// import "react-loading-skeleton/dist/skeleton.css";

// const App = () => {
//   return (
//     <Router>
//       {/* ToastContainer added globally */}
//       <ToastContainer
//         autoClose={3000}
//         hideProgressBar={false}
//         closeOnClick
//         draggable
//         pauseOnHover
//         theme="light"
//         toastStyle={{ fontFamily: "InterDisplay, sans-serif" }}
//       />
//       <Scroll_To_Top> {/* Wrap the Routes with ScrollToTop */}
//         <Routes>
//           <Route path="/*" element={<WebsiteRoutes />} />
//           {/* Protected Dashboard Routes */}
//           <Route
//             path="/dashboard/*"
//             element={
//               // <ProtectedRoute element={<DashboardRoutes />} />
//               <DashboardRoutes />
//             }
//           />
//           <Route path="/admin/*" element={<AdminRoutes />} />
//         </Routes>
//       </Scroll_To_Top>
//     </Router>
//   );
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
// import Scroll_To_Top from "./Components/Scroll_To_Top"; // Import the component
// import "react-loading-skeleton/dist/skeleton.css";
// import { AuthProvider } from "./auth/AuthContext";

// const App = () => {
//   return (
//     <Router>
//       {/* ToastContainer added globally */}
//       <ToastContainer
//         autoClose={3000}
//         hideProgressBar={false}
//         closeOnClick
//         draggable
//         pauseOnHover
//         theme="light"
//         toastStyle={{ fontFamily: "InterDisplay, sans-serif" }}
//       />
//       <Scroll_To_Top>
//         <AuthProvider> {/* Wrap the Routes with AuthProvider */}
//           <Routes>
//             <Route path="/*" element={<WebsiteRoutes />} />
//             {/* Protected Dashboard Routes */}
//             <Route
//               path="/dashboard/*"
//               element={
//                 <ProtectedRoute element={<DashboardRoutes />} />
//               }
//             />
//             <Route path="/admin/*" element={<AdminRoutes />} />
//           </Routes>
//         </AuthProvider>
//       </Scroll_To_Top>
//     </Router>
//   );
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
// import Scroll_To_Top from "./Components/Scroll_To_Top"; // Import the component
// import "react-loading-skeleton/dist/skeleton.css";
// import { AuthProvider } from "./auth/AuthContextWeb";

// const App = () => {
//     return (
//         <Router>
//             {/* ToastContainer added globally */}
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
//                 <AuthProvider> {/* Wrap the Routes with AuthProvider */}
//                     <Routes>
//                         <Route path="/*" element={<WebsiteRoutes />} />
//                         {/* Protected Dashboard Routes */}
//                         <Route
//                             path="/dashboard/*"
//                             element={
//                                 <ProtectedRoute element={<DashboardRoutes />} />
//                             }
//                         />
//                         <Route path="/admin/*" element={<AdminRoutes />} />
//                     </Routes>
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
// import Scroll_To_Top from "./Components/Scroll_To_Top"; // Import the component
// import "react-loading-skeleton/dist/skeleton.css";
// import { AuthProvider } from "./auth/AuthContext";

// const App = () => {
//   return (
//     <Router>
//       {/* ToastContainer added globally */}
//       <ToastContainer
//         autoClose={3000}
//         hideProgressBar={false}
//         closeOnClick
//         draggable
//         pauseOnHover
//         theme="light"
//         toastStyle={{ fontFamily: "InterDisplay, sans-serif" }}
//       />
//       <Scroll_To_Top>
//         <AuthProvider>
//           {/* Wrap the Routes with AuthProvider */}
//           <Routes>
//             <Route path="/*" element={<WebsiteRoutes />} />
//             {/* Protected Dashboard Routes */}
//             <Route
//               path="/dashboard/*"
//               element={
//                 <ProtectedRoute element={<DashboardRoutes />} />
//               }
//             />
//             <Route
//               path="/admin/*"
//               element={
//                 <ProtectedRoute
//                   element={<AdminRoutes />}
//                   requiredRole="admin" // Add this line for AdminRoutes
//                 />
//               }
//             />
//           </Routes>
//         </AuthProvider>
//       </Scroll_To_Top>
//     </Router>
//   );
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
// import Scroll_To_Top from "./Components/Scroll_To_Top"; // Import the component
// import "react-loading-skeleton/dist/skeleton.css";
// import { AuthProvider } from "./auth/AuthContextWeb"; // Use AuthContextWeb

// const App = () => {
//     return (
//         <Router>
//             {/* ToastContainer added globally */}
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
//                     {/* Wrap the Routes with AuthProvider */}
//                     <Routes>
//                         <Route path="/*" element={<WebsiteRoutes />} />
//                         {/* Protected Dashboard Routes */}
//                         <Route
//                             path="/dashboard/*"
//                             element={<ProtectedRoute element={<DashboardRoutes />} />}
//                         />
//                         <Route
//                             path="/admin/*"
//                             element={
//                                 <ProtectedRoute
//                                     element={<AdminRoutes />}
//                                     requiredRole="admin" // Add this line for AdminRoutes
//                                 />
//                             }
//                         />
//                     </Routes>
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
// import Scroll_To_Top from "./Components/Scroll_To_Top"; // Import the component
// import "react-loading-skeleton/dist/skeleton.css";
// import { AuthProvider } from "./auth/AuthContext"; // Use AuthContextWeb

// const App = () => {
//     return (
//         <Router>
//             {/* ToastContainer added globally */}
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
//                     {/* Wrap the Routes with AuthProvider */}
//                     <Routes>
//                         <Route path="/*" element={<WebsiteRoutes />} />
//                         {/* Protected Dashboard Routes */}
//                         <Route
//                             path="/dashboard/*"
//                             element={<ProtectedRoute element={<DashboardRoutes />} />}
//                         />
//                         <Route
//                             path="/admin/*"
//                             element={
//                                 <ProtectedRoute
//                                     element={<AdminRoutes />}
//                                     requiredRole="admin" // Add this line for AdminRoutes
//                                 />
//                             }
//                         />
//                     </Routes>
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
//                     <Routes>
//                          {/* Protected Dashboard Routes */}
//                         <Route
//                             path="/dashboard/*"
//                             element={<ProtectedRoute element={<DashboardRoutes />} />}
//                         />
//                         {/* Protected Admin Routes */}
//                         <Route
//                             path="/admin/*"
//                             element={
//                                 <ProtectedRoute
//                                     element={<AdminRoutes />}
//                                     requiredRole="admin"
//                                 />
//                             }
//                         />
//                         <Route path="/*" element={<WebsiteRoutes />} />
//                     </Routes>
//                 </AuthProvider>
//             </Scroll_To_Top>
//         </Router>
//     );
// };

// export default App;


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
                    <Suspense fallback={<div>Loading...</div>}> {/* Wrap Routes with Suspense */}
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
                </AuthProvider>
            </Scroll_To_Top>
        </Router>
    );
};

export default App;