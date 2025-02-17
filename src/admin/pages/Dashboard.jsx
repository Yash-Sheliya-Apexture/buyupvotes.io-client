// import React from 'react';
// import { Typography } from '@mui/material';

// const Dashboard = () => {
//     return (
//         <div>
//             <Typography variant="h4">Dashboard</Typography>
//             <Typography variant="body1">Welcome to the Admin Dashboard.</Typography>

//         </div>
//     );
// };

// export default Dashboard;

import React from "react";
import {
  FaShoppingCart,
  FaUsers,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

const DashboardCard = ({ title, value, change, icon, changeType }) => {
  const getIconColor = () => {
    switch (title) {
      case "Total Products":
        return "bg-blue-500";
      case "Total Users":
        return "bg-pink-500";
      case "Total Revenue":
        return "bg-rose-500";
      case "Total Sales":
        return "bg-coral-500";
      default:
        return "bg-gray-500";
    }
  };

  const getChangeColor = () => {
    if (changeType === "increased") {
      return "text-green-500";
    } else if (changeType === "decreased") {
      return "text-red-500";
    } else {
      return "text-gray-500";
    }
  };

  const getChangeIndicator = () => {
    if (changeType === "increased") {
      return "↑";
    } else if (changeType === "decreased") {
      return "↓";
    } else {
      return "";
    }
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between">
          <div className="space-y-2">
            <h3 className="font-medium text-small">{title}</h3>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
          </div>

          <div
            className={`rounded-full w-8 h-8 flex items-center justify-center ${getIconColor()}`}
          >
            {icon === "FaShoppingCart" && (
              <FaShoppingCart className="text-white" />
            )}
            {icon === "FaUsers" && <FaUsers className="text-white" />}
            {icon === "FaMoneyBillWave" && (
              <FaMoneyBillWave className="text-white" />
            )}
            {icon === "FaChartLine" && <FaChartLine className="text-white" />}
          </div>
        </div>

        <div className={`text-small mt-4 ${getChangeColor()}`}>
          {change} {getChangeIndicator()}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h4 className="text-2xl font-semibold mb-2">Dashboard</h4>
      <p className="text-gray-600 mb-4">Welcome to the Admin Dashboard.</p>

      <div className="flex flex-wrap">
        {" "}
        {/* flex-wrap and negative margins for spacing */}
        <DashboardCard
          title="Total Users"
          value="854"
          change="Increased By 2.56%"
          icon="FaShoppingCart"
          changeType="increased"
        />
        <DashboardCard
          title="Total Orders"
          value="31,876"
          change="Increased By 0.34%"
          icon="FaUsers"
          changeType="increased"
        />
        <DashboardCard
          title="Daily Order"
          value="$34,241"
          change="Increased By 7.66%"
          icon="FaMoneyBillWave"
          changeType="increased"
        />
        <DashboardCard
          title="Weekly Order"
          value="1,76,586"
          change="Decreased By 0.74%"
          icon="FaChartLine"
          changeType="decreased"
        />
      </div>
    </div>
  );
};

export default Dashboard;
