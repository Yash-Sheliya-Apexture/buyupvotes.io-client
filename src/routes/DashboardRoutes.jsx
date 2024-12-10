import React from "react";
import { Routes, Route } from "react-router-dom";

// Dashboard Pages
import DashboardHome from "../Dashboard/pages/DashboardHome";
import Sidebar1 from "../Dashboard/components/Sidebar1";
import Dashboard_header from "../Dashboard/components/Dashboard_header";
import UpvoteOrder from "../Dashboard/pages/UpvoteOrder";
import OrderComment from "../Dashboard/pages/OrderComment";
import DirectMassage from "../Dashboard/pages/DirectMassage";
import FundPricing from "../Dashboard/pages/FundPricing";
import ContactUs from "../Dashboard/pages/ContactUs";
import RabbitAccount from "../Dashboard/pages/RabbitAccount";
import FAQ from "../Dashboard/pages/FAQ";
import Blog from "../Dashboard/pages/Blog";

const DashboardRoutes = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="w-[250px]">
        <Sidebar1 />
      </div>

      {/* Right Content Area */}
      <div className="flex-1">
        <Dashboard_header />
        <main className="mx-auto container w-full max-w-screen-xl p-4">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="UpvoteOrder" element={<UpvoteOrder />} />
            <Route path="OrderComment" element={<OrderComment />} />
            <Route path="DirectMassage" element={<DirectMassage />} />
            <Route path="FundPrice" element={<FundPricing />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="RabbitAcc" element={<RabbitAccount />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="Blogs" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardRoutes;
