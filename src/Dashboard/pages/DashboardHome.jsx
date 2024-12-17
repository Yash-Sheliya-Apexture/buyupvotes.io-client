import React from "react";
import HeroSecrtion from "./HeroSecrtion";
import DataSection from "./DataSection";
import Ordertable from "./Ordertable";

const DashboardHome = () => {
  return (
    <div className="container mx-auto">
      <HeroSecrtion />
      <DataSection />
      <div className="">
        <Ordertable />
      </div>
    </div>
  );
};

export default DashboardHome;
