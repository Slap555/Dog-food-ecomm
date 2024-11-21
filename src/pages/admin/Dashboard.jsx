import React from "react";
import {
  faBox,
  faMoneyBill1Wave,
  faShoppingCart,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import DashboardCard from "../../components/ui/card/DashboardCard";
import ChartComponent from "../../components/ui/chart/ChartComponent";
import { useFetchDashboard } from "./dashboard.api";

const Dashboard = () => {
  const { data } = useFetchDashboard();

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <DashboardCard
          icon={faMoneyBill1Wave}
          title="Total Revenue"
          value={data?.totalRevenue}
        />
        <DashboardCard
          icon={faBox}
          title="Total Orders"
          value={data?.totalOrders}
        />
        <DashboardCard
          icon={faShoppingCart}
          title="Total Products"
          value={data?.totalProducts}
        />
        <DashboardCard
          icon={faUsers}
          title="Total Customers"
          value={data?.totalUsers}
        />
      </div>

      <div className="mt-4">
        <ChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
