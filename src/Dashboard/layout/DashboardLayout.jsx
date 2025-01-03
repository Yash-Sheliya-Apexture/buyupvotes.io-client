// import React from "react";
// import Sidebar from "../components/Sidebar";
// import Dashboard_header from "../components/dashboard_header";
// import { Outlet } from "react-router-dom";

// const DashboardLayout = () => {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex flex-wrap items-start flex-1 overflow-y-auto">
//         <div className="w-full">
//           <Dashboard_header />
//           <main className="flex-1 overflow-y-auto">
//             <Outlet />
//           </main>          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;


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