// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // Dashboard Pages
// import DashboardHome from "../Dashboard/pages/DashboardHome";
// import Sidebar1 from "../Dashboard/components/Sidebar1";
// import Dashboard_header from "../Dashboard/components/Dashboard_header";
// import UpvoteOrder from "../Dashboard/pages/UpvoteOrder";
// import OrderComment from "../Dashboard/pages/OrderComment";
// import DirectMassage from "../Dashboard/pages/DirectMassage";
// import FundPricing from "../Dashboard/pages/FundPricing";
// import ContactUs from "../Dashboard/pages/ContactUs";
// import RabbitAccount from "../Dashboard/pages/RabbitAccount";
// import FAQ from "../Dashboard/pages/FAQ";
// import BlogJson from "../Dashboard/pages/BlogJson";
// import BlogDetails from "../Dashboard/pages/BlogDetails";
// import Error404 from "../Dashboard/pages/Error404";
// import Account from "../Dashboard/pages/Account";

// const DashboardRoutes = ( ) => {
//   return (
//     <div className="flex h-screen">
//       {/* Left Sidebar */}
//       <Sidebar1/>
//       {/* Right Content Area */}
//       <div className="flex-1">
//         <div className="relative overflow-y-auto ">
//           <Dashboard_header/>
//           <main className="p-6">
//             <Routes>
//               <Route path="*" element={<Error404 />} />
//               <Route path="/" element={<DashboardHome />} />
//               <Route path="UpvoteOrder" element={<UpvoteOrder />} />
//               <Route path="OrderComment" element={<OrderComment />} />
//               <Route path="DirectMassage" element={<DirectMassage />} />
//               <Route path="FundPrice" element={<FundPricing />} />
//               <Route path="ContactUs" element={<ContactUs />} />
//               <Route path="RabbitAcc" element={<RabbitAccount />} />
//               <Route path="FAQ" element={<FAQ />} />
//               {/* Nested Routes for BlogJson */}
//               <Route path="blogjson">
//                 <Route index element={<BlogJson />} />{" "}
//                 {/* Exact route for BlogJson */}
//                 <Route path=":id" element={<BlogDetails />} />{" "}
//                 {/* Dynamic route for BlogDetails */}
//               </Route>
//               <Route path="Account" element={<Account />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardRoutes;



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
import FAQ from "../Dashboard/pages/FAQ";
import BlogJson from "../Dashboard/pages/BlogJson";
import BlogDetails from "../Dashboard/pages/BlogDetails";
import Error404 from "../Dashboard/pages/Error404";
import Account from "../Dashboard/pages/Account";
import DashboardLayout from "../Dashboard/layout/DashboardLayout"; // Import DashboardLayout

const DashboardRoutes = () => {
  return (
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
        <Route path="FAQ" element={<FAQ />} />

        {/* Nested Routes for BlogJson */}
        <Route path="blogjson">
          <Route index element={<BlogJson />} />
          <Route path=":id" element={<BlogDetails />} />
        </Route>

        <Route path="Account" element={<Account />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
