// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // Dashboard Pages
// import DashboardHome from "../Dashboard/pages/DashboardHome";
// import UpvoteOrder from "../Dashboard/pages/UpvoteOrder";
// import FundPricing from "../Dashboard/pages/FundPricing";
// import ContactUs from "../Dashboard/pages/ContactUs";
// import FAQ from "../Dashboard/pages/FAQ";
// import BlogDetails from "../Dashboard/pages/BlogDetails";
// import Account from "../Dashboard/pages/Account";
// import DashboardLayout from "../Dashboard/layout/DashboardLayout"; // Import DashboardLayout
// import Error404 from "../Dashboard/pages/Error404"; // Import Error404 page
// import Blog from "../Dashboard/pages/Blog";
// import { BalanceProvider } from "../Dashboard/context/BalanceContext"; // Import BalanceProvider

// const DashboardRoutes = () => {
//   return (
//     <BalanceProvider>
//       <Routes>
//         {/* Wrap all dashboard routes inside DashboardLayout */}
//         <Route path="/" element={<DashboardLayout />}>
//           <Route index element={<DashboardHome />} />
//           <Route path="upvoteorder" element={<UpvoteOrder />} />
//           <Route path="pricing" element={<FundPricing />} />
//           <Route path="contactus" element={<ContactUs />} />
//           <Route path="faqs" element={<FAQ />} />

//           {/* Nested Routes for Blog */}
//           <Route path="post">
//             <Route index element={<Blog />} />
//             <Route path=":title" element={<BlogDetails />} />
//           </Route>

//           <Route path="account" element={<Account />} />

//           {/* Catch-all route for unmatched paths */}
//           {/* <Route path="*" element={<Error404 />} /> */}
//           <Route path="/*" element={<Error404 />} />
//         </Route>
//       </Routes>
//     </BalanceProvider>
//   );
// };

// export default DashboardRoutes;



// DashboardRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../Dashboard/layout/DashboardLayout"; // Import DashboardLayout
import { BalanceProvider } from "../Dashboard/context/BalanceContext"; // Import BalanceProvider
import { FaSpinner } from 'react-icons/fa';

// Lazy load Dashboard Pages
const DashboardHome = lazy(() => import("../Dashboard/pages/DashboardHome"));
const UpvoteOrder = lazy(() => import("../Dashboard/pages/UpvoteOrder"));
const FundPricing = lazy(() => import("../Dashboard/pages/FundPricing"));
const ContactUs = lazy(() => import("../Dashboard/pages/ContactUs"));
const FAQ = lazy(() => import("../Dashboard/pages/FAQ"));
const BlogDetails = lazy(() => import("../Dashboard/pages/BlogDetails"));
const Account = lazy(() => import("../Dashboard/pages/Account"));
const Error404 = lazy(() => import("../Dashboard/pages/Error404"));
const Blog = lazy(() => import("../Dashboard/pages/Blog"));


const DashboardRoutes = () => {
    return (
        <BalanceProvider>
            <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-t-4 border-solid rounded-full border-main-color animate-spin"></div>
                </div>
            }>
                <Routes>
                    {/* Wrap all dashboard routes inside DashboardLayout */}
                    <Route path="/" element={<DashboardLayout />}>
                        <Route index element={<DashboardHome />} />
                        <Route path="upvoteorder" element={<UpvoteOrder />} />
                        <Route path="pricing" element={<FundPricing />} />
                        <Route path="contactus" element={<ContactUs />} />
                        <Route path="faqs" element={<FAQ />} />

                        {/* Nested Routes for Blog */}
                        <Route path="post">
                            <Route index element={<Blog />} />
                            <Route path=":title" element={<BlogDetails />} />
                        </Route>

                        <Route path="account" element={<Account />} />

                        {/* Catch-all route for unmatched paths */}
                        <Route path="/*" element={<Error404 />} />
                    </Route>
                </Routes>
            </Suspense>
        </BalanceProvider>
    );
};

export default DashboardRoutes;