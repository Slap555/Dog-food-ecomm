import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const baseLinkStyle = "p-2 block w-full ps-4 text-white";
  const activeLinkStyle = "bg-blue-500 rounded-s-lg";

  return (
    <nav className="min-w-48 bg-gray-800 text-white min-h-screen ps-4 py-4">
      <h2 className="text-2xl font-bold mb-6 text-amber-300 text-nowrap">
        Food Lhotse
      </h2>
      <ul className="space-y-2">
        {[
          { path: "/dashboard", name: "Dashboard" },
          { path: "/dashboard/account", name: "Account" },
          { path: "/dashboard/category", name: "Categories" },
          { path: "/dashboard/products", name: "Products" },
          { path: "/dashboard/blogs", name: "Blog" },
          { path: "/dashboard/orders", name: "Orders" },
        ].map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `${baseLinkStyle} ${isActive ? activeLinkStyle : ""}`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
