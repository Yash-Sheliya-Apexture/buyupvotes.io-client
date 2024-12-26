import React from "react";
import HeroSecrtion from "./HeroSecrtion";
import DataSection from "./DataSection";
import Ordertable from "./Ordertable";

const DashboardHome = () => {
  return (
    <div className="lg:container mx-auto">
      <HeroSecrtion />
      <DataSection />
      <Ordertable />
    </div>
  );
};

export default DashboardHome;
