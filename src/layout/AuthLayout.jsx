import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/common/sidebar/Sidebar";
import { useUser } from "../contexts/UserContext";
import { getItem } from "../utils/localStorageHandler";
import Loading from "../components/ui/loading/Loading";

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

  if (!user) {
    return <Loading />;
  }

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
