
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteRoutes from "./routes/WebsiteRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import ProtectedRoute from "./routes/ProtectedRoute"; // Import ProtectedRoute

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<WebsiteRoutes />} /> {/* Default website routes */}
        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute element={<DashboardRoutes />} /> // Protecting dashboard
            // <DashboardRoutes />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
