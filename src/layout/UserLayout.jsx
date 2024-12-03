import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/common/navbar/Navbar";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default UserLayout;
