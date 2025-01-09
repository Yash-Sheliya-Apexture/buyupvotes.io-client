import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home_Page from "../Pages/Home_Page";
import TermAndConditions from "../Pages/TermAndConditions";
import Privacy from "../Pages/Privacy";
import LoginRoutes from "./LoginRoutes";
import ScrollBorder from "../Components/ScrollBorder";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Error404 from "../Dashboard/pages/Error404";
import Price from "../Pages/Price";
import FAQS from "../Components/FAQS";
import Blogs from "../Pages/Blogs";
import BlogDetails from "../Dashboard/pages/BlogDetails";
import ContactUs from "../Pages/ContactUs";
import Checkout from "../Pages/Checkout";
import { AuthProvider } from "../auth/AuthContextWeb";

const WebsiteRoutes = () => {
  const location = useLocation();

  // Paths where the header and footer should not be shown
  const excludedRoutes = [
    "/signin",
    "/signup",
    "/newpassword",
    "/forgot-password",
  ];

  // Check if the current path matches any excluded route or is a 404
  const isExcludedRoute =
    excludedRoutes.some((route) => location.pathname.startsWith(route)) ||
    (location.pathname !== "/" &&
      !location.pathname.startsWith("/terms-and-conditions") &&
      !location.pathname.startsWith("/privacy-policy") &&
      !location.pathname.startsWith("/pricing") &&
      !location.pathname.startsWith("/faqs") &&
      !location.pathname.startsWith("/post") &&
      !location.pathname.startsWith("/contact-us") &&
      !location.pathname.startsWith("/dashboard"));

  // Check if the current path is a dashboard path

  return (
    <>
      <AuthProvider>
        {/* Conditionally render header and scroll border */}
        {!isExcludedRoute && (
          <>
            <Header />
            <ScrollBorder />
          </>
        )}

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-and-conditions" element={<TermAndConditions />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/*" element={<LoginRoutes />} />
          {/* 404 Route should be the last route */}
          <Route path="*" element={<Error404 />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="post">
            <Route index element={<Blogs />} />
            <Route path=":title" element={<BlogDetails />} />
          </Route>
        </Routes>
        {/* Conditionally render footer */}
        {!isExcludedRoute && <Footer />}
      </AuthProvider>
    </>
  );
};

export default WebsiteRoutes;
