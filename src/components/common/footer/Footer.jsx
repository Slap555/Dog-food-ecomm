import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-xl font-bold">Lekali</h1>
            <p className="text-sm">Best Organic Dog Chews</p>
          </div>
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a href="#" className="text-sm hover:text-blue-400">
              Facebook
            </a>
            <a href="#" className="text-sm hover:text-blue-400">
              Instagram
            </a>
            <a href="#" className="text-sm hover:text-blue-400">
              Twitter
            </a>
          </div>
          <div className="text-sm">
            <p>&copy; 2024 Lekali. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
