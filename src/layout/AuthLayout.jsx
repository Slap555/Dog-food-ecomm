import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/sidebar/Sidebar";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-5 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
