import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin_up_Header from "../Pages/SignIn_Header";
import Sign_In from "../Pages/Sign_In";
import Sign_Up from "../Pages/Sign_Up";
import RedirectIfLoggedIn from "./RedirectIfLoggedIn";
import ForgotPassword from "../Pages/ForgotPassword";
import Newpassword from "../Pages/Newpassword";
import Error404 from "../Dashboard/pages/Error404"; // Import the Error404 component

const LogRoute = () => {
  return (
    <>
      <div className="min-h-screen bg-center bg-cover background-image">
        {/* Shared Header */}
        <Signin_up_Header />
        {/* Page Routes */}
        <Routes>
          <Route
            path="signin"
            element={
              <RedirectIfLoggedIn>
                <Sign_In />
              </RedirectIfLoggedIn>
            }
          />
          <Route
            path="signup"
            element={
              <RedirectIfLoggedIn>
                <Sign_Up />
              </RedirectIfLoggedIn>
            }
          />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="newpassword" element={<Newpassword />} />
          {/* Catch-all route for unmatched paths */}
        </Routes>
      </div>
    </>
  );
};

export default LogRoute;
