import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("cartItems");
    localStorage.removeItem("user");
    // Optionally, redirect to login page
    window.location.href = "/login";
  };

  return (
    <nav className="flex flex-col w-full p-5 bg-blue-400 bg-opacity-50 font-medium">
      <ul className="flex w-full justify-between items-center">
        {/* Logo */}
        <div className="flex">
          <li className="nav-link">LOGO</li>
        </div>

        {/* Navbar Links */}
        <div className="flex space-x-[3rem] mr-4">
          <li className="nav-link">
            <a href="/">Home</a>
          </li>
          <li className="nav-link">
            <a href="/products">Products</a>
          </li>
          <li className="nav-link">About Us</li>
          <li className="nav-link">
            <a href="/cart">Cart</a>
          </li>
          <li className="nav-link">
            <a href="/order-detail">Order Details</a>
          </li>
          <li className="nav-link">Contact</li>
          <li className="nav-link">FAQ</li>
          <li className="nav-link">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>

          {/* Profile Icon with Dropdown */}
          <li className="nav-link">
            {!isLoggedIn ? (
              <a href="/login">Login</a>
            ) : (
              <div className="z-50 relative group cursor-pointer">
                {/* Profile Icon */}
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="text-2xl text-black"
                />

                {/* Dropdown Menu */}
                <div className="absolute right-1 hidden w-32 bg-gray-100 text-gray-800 shadow-md rounded-md group-hover:flex flex-col ">
                  <a
                    href="/profile"
                    className="px-4 py-2 hover:bg-gray-200 hover:rounded-md text-gray-600"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    onClick={handleLogout}
                    className="px-4 py-2 hover:bg-gray-200 hover:rounded-md  text-gray-600"
                  >
                    Logout
                  </a>
                </div>
              </div>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
