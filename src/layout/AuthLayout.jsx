import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/common/sidebar/Sidebar";
import { useUser } from "../contexts/UserContext";
import { getItem } from "../utils/localStorageHandler";
import Loading from "../components/ui/loading/Loading";
import { ToastContainer } from "react-toastify";

const AuthLayout = () => {
  const token = getItem("token");
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else if (user && user.user.role !== "admin") {
      navigate("/");
    }
  }, [user, token, navigate]);

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-5 bg-gray-100">
          <Outlet />
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default AuthLayout;
