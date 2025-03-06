// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import LoginHeader from "../Pages/LoginHeader";
// import Sign_In from "../Pages/Sign_In";
// import Sign_Up from "../Pages/Sign_Up";
// import RedirectIfLoggedIn from "./RedirectIfLoggedIn";
// import ForgotPassword from "../Pages/ForgotPassword";
// import Newpassword from "../Pages/Newpassword";
// import Error404 from "../Dashboard/pages/Error404"; // Import the Error404 component

// const LogRoute = () => {
//   return (
//     <>
//       <main className="min-h-screen bg-center bg-cover background-image">
//         {/* Shared Header */}
//         <LoginHeader />
//         {/* Page Routes */}
//         <Routes>
//           <Route
//             path="signin"
//             element={
//               <RedirectIfLoggedIn>
//                 <Sign_In />
//               </RedirectIfLoggedIn>
//             }
//           />
//           <Route
//             path="signup"
//             element={
//               <RedirectIfLoggedIn>
//                 <Sign_Up />
//               </RedirectIfLoggedIn>
//             }
//           />
//           <Route path="forgot-password" element={<ForgotPassword />} />
//           <Route path="newpassword" element={<Newpassword />} />
//           {/* Catch-all route for unmatched paths */}
//           <Route path="*" element={<Error404 />} />
//         </Routes>
//       </main>
//     </>
//   );
// };

// export default LogRoute;



import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginHeader from "../Pages/LoginHeader";
const Sign_In = React.lazy(() => import("../Pages/Sign_In"));
const Sign_Up = React.lazy(() => import("../Pages/Sign_Up"));
import RedirectIfLoggedIn from "./RedirectIfLoggedIn";
import ForgotPassword from "../Pages/ForgotPassword";
import Newpassword from "../Pages/Newpassword";
import Error404 from "../Dashboard/pages/Error404"; // Import the Error404 component

const LogRoute = () => {
  return (
    <>
      <main className="min-h-screen bg-center bg-cover background-image">
        {/* Shared Header */}
        <LoginHeader />
        {/* Page Routes */}
        <Routes>
          <Route
            path="signin"
            element={
              <RedirectIfLoggedIn>
                <React.Suspense fallback={<div>Loading...</div>}><Sign_In /></React.Suspense>
              </RedirectIfLoggedIn>
            }
          />
          <Route
            path="signup"
            element={
              <RedirectIfLoggedIn>
                <React.Suspense fallback={<div>Loading...</div>}><Sign_Up /></React.Suspense>
              </RedirectIfLoggedIn>
            }
          />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="newpassword" element={<Newpassword />} />
          {/* Catch-all route for unmatched paths */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </>
  );
};

export default LogRoute;