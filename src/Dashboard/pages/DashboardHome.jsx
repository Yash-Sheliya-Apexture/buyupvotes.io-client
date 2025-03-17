// import React from "react";
// import HeroSecrtion from "../components/DashboardHome/HeroSecrtion";
// import DataSection from "../components/DashboardHome/DataSection";
// import OrderTable from "../components/OrderTable/OrderTable";

// const DashboardHome = () => {
//   return (
//     <div className="container mx-auto">
//       <HeroSecrtion />
//       <DataSection />
//       <OrderTable />
//     </div>
//   );
// };

// export default DashboardHome;



// DashboardHome.jsx
import React, { memo } from "react";
import HeroSecrtion from "../components/DashboardHome/HeroSecrtion";
import DataSection from "../components/DashboardHome/DataSection";
import OrderTable from "../components/OrderTable/OrderTable";

const DashboardHome = memo(() => {
    return (
        <div className="container mx-auto">
            <HeroSecrtion />
            <DataSection />
            <OrderTable />
        </div>
    );
});

DashboardHome.displayName = 'DashboardHome'; // Optional: helps with debugging in React DevTools

export default DashboardHome;