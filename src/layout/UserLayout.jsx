import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/footer/Footer";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
