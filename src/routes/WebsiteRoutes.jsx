import React from "react";
import { Routes, Route } from "react-router-dom";

// Website Pages
import Home_Page from "../Pages/Home_Page";
import Sign_In from "../Pages/Sign_In";
import Sign_Up from "../Pages/Sign_Up";
import RedirectIfLoggedIn from "./RedirectIfLoggedIn"; // Import RedirectIfLoggedIn

const WebsiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home_Page />} />
      {/* Protect Sign In and Sign Up pages */}
      <Route
        path="/signin"
        element={
          <RedirectIfLoggedIn>
            <Sign_In />
          </RedirectIfLoggedIn>
        }
      />

      <Route
        path="/signup"
        element={
          <RedirectIfLoggedIn>
            <Sign_Up />
          </RedirectIfLoggedIn>
        }
      />
    </Routes>
  );
};

export default WebsiteRoutes;
