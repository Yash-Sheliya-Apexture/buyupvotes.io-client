import React from "react";
import HeroSecrtion from "../components/DashboardHome/HeroSecrtion";
import DataSection from "../components/DashboardHome/DataSection";
import OrderTable from "../components/OrderTable/OrderTable";

const DashboardHome = () => {
  return (
    <main className="container mx-auto">
      <HeroSecrtion />
      <DataSection />
      <OrderTable />
    </main>
  );
};

export default DashboardHome;
