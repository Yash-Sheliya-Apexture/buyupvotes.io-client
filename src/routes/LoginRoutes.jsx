import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin_up_Header from "../Pages/SignIn_Header";
import Sign_In from "../Pages/Sign_In";
import Sign_Up from "../Pages/Sign_Up";
import RedirectIfLoggedIn from "./RedirectIfLoggedIn"; // Import RedirectIfLoggedIn
import ForgotPassword from "../Pages/ForgotPassword";
import Newpassword from "../Pages/Newpassword"; // Import Newpassword

const LogRoute = () => {
  return (
    <div className="bg-center bg-cover background-image min-h-screen">
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
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="newpassword" element={<Newpassword />} />
      </Routes>
    </div>
  );
};

export default LogRoute;
