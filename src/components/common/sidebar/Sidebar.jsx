import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="w-48 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/account"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "text-white"
            }
          >
            Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/category"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "text-white"
            }
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/products"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "text-white"
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/blogs"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "text-white"
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/orders"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "text-white"
            }
          >
            Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
