import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.link ? (
            <Link
              to={item.link}
              className="hover:underline text-gray-700 font-medium"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-400 font-medium">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="text-gray-400">&bull;</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
