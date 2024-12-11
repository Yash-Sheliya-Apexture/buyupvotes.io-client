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
import BlogJson from "../Dashboard/pages/BlogJson";
import BlogDetails from "../Dashboard/pages/BlogDetails";
import Error404 from "../Dashboard/pages/Error404";

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
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<DashboardHome />} />
            <Route path="UpvoteOrder" element={<UpvoteOrder />} />
            <Route path="OrderComment" element={<OrderComment />} />
            <Route path="DirectMassage" element={<DirectMassage />} />
            <Route path="FundPrice" element={<FundPricing />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="RabbitAcc" element={<RabbitAccount />} />
            <Route path="FAQ" element={<FAQ />} />
            {/* Nested Routes for BlogJson */}
            <Route path="blogjson">
              <Route index element={<BlogJson />} />{" "}
              {/* Exact route for BlogJson */}
              <Route path=":id" element={<BlogDetails />} />{" "}
              {/* Dynamic route for BlogDetails */}
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardRoutes;
