import React from "react";
import Breadcrumb from "../Dashboard/components/Breadcrumb";

const BreadcrumbHeader = ({ title, breadcrumbs }) => {
  return (
    <section className="Heading-wrap">
      <div className="container mx-auto">
        <div className="mainbread">
          <h1 className="mb-2 font-bold text-sub-color text-basic">{title}</h1>
          <div className="flex items-center space-x-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbHeader;
