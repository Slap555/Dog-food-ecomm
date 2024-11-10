import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
