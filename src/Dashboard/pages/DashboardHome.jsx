import React from "react";
import HeroSecrtion from "./HeroSecrtion";
import DataSection from "./DataSection";
import Ordertable from "./ordertable";

const DashboardHome = () => {
  return (
    <div className="container mx-auto">
      <HeroSecrtion />
      <DataSection />
      <div className="pt-10">
        <Ordertable />
      </div>
    </div>
  );
};

export default DashboardHome;
