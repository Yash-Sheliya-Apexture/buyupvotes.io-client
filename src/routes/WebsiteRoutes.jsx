import React from "react";
import { Routes, Route } from "react-router-dom";
import Home_Page from "../Pages/Home_Page";
import TermAndConditions from "../Components/TermAndConditions"; // Import TermAndConditions
import Privacy from "../Components/Privacy"; // Import Privacy
import LoginRoutes from "./LoginRoutes";
import ScrollBorder from "../Components/ScrollBorder"; // Import ScrollBorder

const WebsiteRoutes = () => {
  return (
    <>
      <ScrollBorder />
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route
          path="/TermAndConditions"
          element={<TermAndConditions />} // Use the imported TermAndConditions component here
        />
        <Route
          path="/Privacy"
          element={<Privacy />} // Use the imported Privacy component here
        />
        <Route path="/*" element={<LoginRoutes />} />
      </Routes>
    </>
  );
};

export default WebsiteRoutes;
