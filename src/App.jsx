import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteRoutes from "./routes/WebsiteRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import ProtectedRoute from "./routes/ProtectedRoute"; // Import ProtectedRoute
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the CSS for react-toastify
import { AuthProvider } from "./auth/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
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
        <Routes>
          <Route path="/*" element={<WebsiteRoutes />} />{" "}
          {/* Default website routes */}
          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute element={<DashboardRoutes />} /> // Protecting dashboard
              // <DashboardRoutes />
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
