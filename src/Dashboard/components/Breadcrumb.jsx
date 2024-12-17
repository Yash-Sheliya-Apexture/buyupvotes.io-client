import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-xs">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.link ? (
            <Link
              to={item.link}
              className="hover:underline underline-offset-1 text-sub-color font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span className=" text-light-gray font-normal">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="text-light-gray">&bull;</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
