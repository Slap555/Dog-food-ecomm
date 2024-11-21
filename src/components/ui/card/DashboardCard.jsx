import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm flex items-center">
      <div className="mr-4">
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-lg text-gray-700">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
