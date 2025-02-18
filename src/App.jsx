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


// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteRoutes from "./routes/WebsiteRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Scroll_To_Top from "./Components/Scroll_To_Top"; // Import the component
import "react-loading-skeleton/dist/skeleton.css";
import { AuthProvider } from "./auth/AuthContext"; // Use AuthContextWeb

const App = () => {
    return (
        <Router>
            {/* ToastContainer added globally */}
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
                    {/* Wrap the Routes with AuthProvider */}
                    <Routes>
                        <Route path="/*" element={<WebsiteRoutes />} />
                        {/* Protected Dashboard Routes */}
                        <Route
                            path="/dashboard/*"
                            element={<ProtectedRoute element={<DashboardRoutes />} />}
                        />
                        <Route
                            path="/admin/*"
                            element={
                                <ProtectedRoute
                                    element={<AdminRoutes />}
                                    requiredRole="admin" // Add this line for AdminRoutes
                                />
                            }
                        />
                    </Routes>
                </AuthProvider>
            </Scroll_To_Top>
        </Router>
    );
};

export default App;