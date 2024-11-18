import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="flex flex-col w-full p-5  text-[] font-medium">
      <ul className="flex w-full justify-between items-center">
        <div className="flex">
          <li className="nav-link">LOGO</li>
        </div>
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
          <li className="nav-link">Order Details</li>
          <li className="nav-link">Contact</li>
          <li className="nav-link">FAQ</li>
          <li className="nav-link ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li className="nav-link">
            <a href="/login">Login</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
