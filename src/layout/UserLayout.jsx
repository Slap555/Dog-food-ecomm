import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer/Footer";
import Navbar from "../components/common/navbar/Navbar";

const UserLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-col gap-10">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default UserLayout;
