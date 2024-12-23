import React from "react";
import { Routes, Route } from "react-router-dom";

// Dashboard Pages
import DashboardHome from "../Dashboard/pages/DashboardHome";
import UpvoteOrder from "../Dashboard/pages/UpvoteOrder";
import OrderComment from "../Dashboard/pages/OrderComment";
import DirectMassage from "../Dashboard/pages/DirectMassage";
import FundPricing from "../Dashboard/pages/FundPricing";
import ContactUs from "../Dashboard/pages/ContactUs";
import RabbitAccount from "../Dashboard/pages/RabbitAccount";
import FaQ from "../Dashboard/pages/FaQ";
import Blog from "../Dashboard/pages/Blog";
import BlogDetails from "../Dashboard/pages/BlogDetails";
import Error404 from "../Dashboard/pages/Error404";
import Account from "../Dashboard/pages/Account";
import DashboardLayout from "../Dashboard/layout/DashboardLayout"; // Import DashboardLayout
import { AuthProvider } from "../auth/AuthContext";

const DashboardRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Wrap all dashboard routes inside DashboardLayout */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="UpvoteOrder" element={<UpvoteOrder />} />
          <Route path="OrderComment" element={<OrderComment />} />
          <Route path="DirectMassage" element={<DirectMassage />} />
          <Route path="FundPrice" element={<FundPricing />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="RabbitAcc" element={<RabbitAccount />} />
          <Route path="FAQ" element={<FaQ />} />

          {/* Nested Routes for Blog */}
          <Route path="blogjson">
            <Route index element={<Blog />} />
            <Route path=":id" element={<BlogDetails />} />
          </Route>

          <Route path="Account" element={<Account />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default DashboardRoutes;
