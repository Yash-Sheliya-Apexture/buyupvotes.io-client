import React from "react";
import Breadcrumb from "../Dashboard/components/Breadcrumb";

const HeadingBreadcrumbSection = ({ title, breadcrumbs }) => {
  return (
    <section className="haeding-wrap">
      <div className="container mx-auto">
        <div className="mainbread">
          <h1 className="mb-2 font-bold text-sub-color text-basic uppercase">
            {title}
          </h1>
          <div className="flex items-center space-x-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadingBreadcrumbSection;
