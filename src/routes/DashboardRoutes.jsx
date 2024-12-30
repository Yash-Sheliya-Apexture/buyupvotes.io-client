import React from "react";
import { Routes, Route } from "react-router-dom";

// Dashboard Pages
import DashboardHome from "../Dashboard/pages/DashboardHome";
import UpvoteOrder from "../Dashboard/pages/UpvoteOrder";
import FundPricing from "../Dashboard/pages/FundPricing";
import ContactUs from "../Dashboard/pages/ContactUs";
import FAQ from "../Dashboard/pages/FAQ";
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
          <Route path="upvoteorder" element={<UpvoteOrder />} />
          <Route path="fundprice" element={<FundPricing />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="faqs" element={<FAQ />} />

          {/* Nested Routes for Blog */}
          <Route path="blog">
            <Route index element={<Blog />} />
            <Route path=":title" element={<BlogDetails />} />
          </Route>

          <Route path="account" element={<Account />} />
         
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default DashboardRoutes;
