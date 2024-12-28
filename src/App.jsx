import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteRoutes from "./routes/WebsiteRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import speedInsights from '@vercel/speed-insights'; // Import speed insights (default export)

const App = () => {

    useEffect(() => {
        // Initialize speed insights
         speedInsights();
    }, []);

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
            <Routes>
                <Route path="/*" element={<WebsiteRoutes />} />
                {/* Protected Dashboard Routes */}
                <Route
                    path="/dashboard/*"
                    element={
                        <ProtectedRoute element={<DashboardRoutes />} />
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;