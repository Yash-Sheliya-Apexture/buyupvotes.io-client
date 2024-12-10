import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DataSection = () => {
  const [data, setData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/order.json"); // replace with the actual path
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-2 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-small border border-gray-border p-6 flex justify-between items-center cursor-pointer"
          >
            <div>
              <p className="text-large font-bold text-sub-color mb-2">
                {item.remainingVotes ?? ""}
              </p>
              <p className="text-[20px] text-para-color font-semibold">{item.label}</p>
            </div>
            <div className="text-main-color text-large">
              {item.link ? (
                <Link to={item.link}>
                  <i
                    className={`${item.icon} hover:bg-gray-hover p-3 rounded-full transition-all ease-in duration-150`}
                  ></i>
                </Link>
              ) : (
                <i
                  className={`${item.icon} hover:bg-gray-hover p-3 rounded-full transition-all ease-in duration-150`}
                ></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSection;
