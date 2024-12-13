import React from "react";
import Sidebar1 from "../components/Sidebar1";
import Dashboard_header from "../components/Dashboard_header";
import { Outlet } from "react-router-dom"; // Used to render nested routes

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <Sidebar1 />
      {/* Right Content Area */}
      <div className="flex flex-col flex-1">
        {/* Dashboard Header */}
        <Dashboard_header />
        
        {/* Main content area, where nested routes will be displayed */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
          {/* Outlet will render the nested route components */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
