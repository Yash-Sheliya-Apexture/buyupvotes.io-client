import React from "react";
import HeroSecrtion from "./HeroSecrtion";
import DataSection from "./DataSection";
import Ordertable from "./ordertable";

const DashboardHome = () => {
  return (
    <div>
      <HeroSecrtion />
      <DataSection />
      <Ordertable />
    </div>
  );
};

export default DashboardHome;
