import React from "react";
import HeroSecrtion from "../components/DashboardHome/HeroSecrtion";
import DataSection from "../components/DashboardHome/DataSection";
import OrderTable from "../components/OrderTable/OrderTable";
import NewHeroSection from "../components/DashboardHome/NewHeroSection";

const DashboardHome = () => {
  return (
    <div className="container mx-auto">
      <HeroSecrtion />
      <DataSection />
      <OrderTable />
    </div>
  );
};

export default DashboardHome;
