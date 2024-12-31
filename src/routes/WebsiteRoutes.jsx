import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home_Page from "../Pages/Home_Page";
import TermAndConditions from "../Components/TermAndConditions";
import Privacy from "../Components/Privacy";
import LoginRoutes from "./LoginRoutes";
import ScrollBorder from "../Components/ScrollBorder";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Error404 from "../Dashboard/pages/Error404";
import Pricedata from "../Pages/Pricedata";
import FAQS from "../Pages/FAQS";
import Blogs from "../Pages/Blogs";
import BlogDetails from "../Dashboard/pages/BlogDetails";
import ContactUs from "../Pages/ContactUs";

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

  return (
    <>
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
        <Route path="/pricing" element={<Pricedata />} />
        <Route path="/faqs" element={<FAQS />} />

        <Route path="post">
          <Route index element={<Blogs />} />
          <Route path=":title" element={<BlogDetails />} />
        </Route>
      </Routes>

      {/* Conditionally render footer */}
      {!isExcludedRoute && <Footer />}
    </>
  );
};

export default WebsiteRoutes;
