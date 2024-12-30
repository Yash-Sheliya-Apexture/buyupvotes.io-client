import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home_Page from "../Pages/Home_Page";
import TermAndConditions from "../Components/TermAndConditions";
import Privacy from "../Components/Privacy";
import LoginRoutes from "./LoginRoutes";
import ScrollBorder from "../Components/ScrollBorder";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const WebsiteRoutes = () => {
  const location = useLocation();

  // Check if the current path matches any of the excluded routes
  const excludedRoutes = [
    "/signin",
    "/signup",
    "/newpassword",
    "/forgotpassword",
  ];
  const isExcludedRoute = excludedRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!isExcludedRoute && (
        <>
          <Header />
          <ScrollBorder />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/terms-and-conditions" element={<TermAndConditions />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/*" element={<LoginRoutes />} />
      </Routes>

      {!isExcludedRoute && <Footer />}
    </>
  );
};

export default WebsiteRoutes;
