import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteRoutes from "./routes/WebsiteRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop"; // Import the component

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
      <ScrollToTop> {/* Wrap the Routes with ScrollToTop */}
        <Routes>
          <Route path="/*" element={<WebsiteRoutes />} />
          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute element={<DashboardRoutes />} />
              // <DashboardRoutes />
            }
          />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;