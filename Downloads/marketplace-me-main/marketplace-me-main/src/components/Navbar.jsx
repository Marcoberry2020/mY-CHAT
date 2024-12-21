import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="font-bold text-lg">Marketplace</span>
        </div>
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products, services"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <span className="material-icons">shopping_cart</span>
          </button>
          <div className="relative">
            <button className="flex items-center">
              <span className="bg-blue-600 text-white rounded-full h-8 w-8 flex justify-center items-center">
                SK
              </span>
              <span className="ml-2 hidden sm:block">GHS 1,600</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
