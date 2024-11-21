import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUserCircle,
  faList,
  faBox,
  faBlog,
  faShoppingCart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { removeItem } from "../../../utils/localStorageHandler";

const Sidebar = () => {
  const navigate = useNavigate();
  const baseLinkStyle = "p-2 block w-full ps-4 text-white";
  const activeLinkStyle = "bg-blue-500 rounded-s-lg";

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      removeItem("token");
      navigate("/login");
    }
  };

  return (
    <nav className=" bg-gray-800 text-white min-h-screen py-4">
      <h2 className="text-2xl text-center font-bold mb-6 text-amber-300 text-nowrap px-4">
        <span className="inline md:hidden">FL</span>
        <span className="hidden md:inline">Food Lhotse</span>
      </h2>
      <ul className="space-y-2 ps-4">
        {[
          { path: "/dashboard", name: "Dashboard", icon: faTachometerAlt },
          { path: "/dashboard/account", name: "Account", icon: faUserCircle },
          { path: "/dashboard/category", name: "Categories", icon: faList },
          { path: "/dashboard/products", name: "Products", icon: faBox },
          { path: "/dashboard/blogs", name: "Blog", icon: faBlog },
          { path: "/dashboard/orders", name: "Orders", icon: faShoppingCart },
        ].map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `${baseLinkStyle} ${isActive ? activeLinkStyle : ""}`
              }
            >
              <FontAwesomeIcon icon={item.icon} className="mr-2 " />
              <span className="hidden md:inline">{item.name}</span>
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            to="#"
            className={`${baseLinkStyle} text-red-600`}
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            <span className="hidden md:inline">Logout</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
