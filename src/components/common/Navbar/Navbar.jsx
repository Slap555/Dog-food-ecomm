import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex flex-col w-full p-5 bg-slate-400">
      <ul className="flex w-full justify-between items-center">
        <div className="flex">
          <li className="nav-link">LOGO</li>
        </div>
        <div className="flex space-x-[3rem] mr-4">
          <li className="nav-link">Home</li>
          <li className="nav-link">Shop</li>
          <li className="nav-link">About Us</li>
          <li className="nav-link">Products</li>
          <li className="nav-link">Order Details</li>
          <li className="nav-link">Contact</li>
          <li className="nav-link">FAQ</li>
          <li className="nav-link">!</li>
          <li className="nav-link">!</li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
