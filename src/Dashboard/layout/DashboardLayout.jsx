import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard_header from "../components/Dashboard_header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 bg-white transition-opacity duration-[2s] opacity-100 z-50 flex justify-center items-center">
          <h2 className="animated-logo lg:text-[70px] text-xlarge" data-text="buyupvotes">
            buyupvotes
          </h2>
        </div>
      )}
      <div
        className={`transition-opacity duration-[1s] ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-wrap flex-1 overflow-y-auto">
            <Dashboard_header />
            <main className="flex-1 p-4 overflow-y-auto">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;


