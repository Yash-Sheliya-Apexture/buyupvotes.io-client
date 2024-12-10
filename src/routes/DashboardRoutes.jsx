import React from "react";
import { Routes, Route } from "react-router-dom";

// Dashboard Pages
import DashboardHome from "../Dashboard/pages/DashboardHome";
import Sidebar1 from "../Dashboard/components/Sidebar1";
import Dashboard_header from "../Dashboard/components/Dashboard_header";
import UpvoteOrder from "../Dashboard/pages/UpvoteOrder";
import FundPricing from "../Dashboard/pages/FundPricing";
import OrderComment from "../Dashboard/pages/OrderComment";
import DirectMassage from "../Dashboard/pages/DirectMassage";

const DashboardRoutes = () => {
  return (
    <div className="">
      <section className="flex">
        <div className="w-[20%]">
          <Sidebar1 />
        </div>

        <div className="w-[85%] px-3">
          <Dashboard_header />
          <main className="">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="UpvoteOrder" element={<UpvoteOrder />} />
              <Route path="OrderComment" element={<OrderComment />} />
              <Route path="DirectMassage" element={<DirectMassage />} />
              <Route path="FundPrice" element={<FundPricing />} />
            </Routes>
          </main>
        </div>
      </section>
    </div>
  );
};

export default DashboardRoutes;
