import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebarVisibility = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        toggleSidebarVisibility={toggleSidebarVisibility}
      />
      <div className="flex flex-wrap items-start flex-1 overflow-y-auto">
        <div className="w-full">
          <DashboardHeader toggleSidebarVisibility={toggleSidebarVisibility} />
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
