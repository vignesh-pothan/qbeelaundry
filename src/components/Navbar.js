import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-500">Qbee Laundry</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-700 block">
            Home
          </Link>

          <Link to="/OurService" className="hover:text-gray-700 block">
            Services
          </Link>
          <Link to="/pricing" className="hover:text-gray-700 block">
            Pricing
          </Link>
          <Link to="/contact" className="hover:text-gray-700 block">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-40">
          {" "}
          {/* Ensure z-40 for mobile menu */}
          <div className="flex flex-col space-y-1 p-4">
            <Link
              to="/"
              className="hover:text-gray-700 block"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-700 block"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/OurService"
              className="hover:text-gray-700 block"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="hover:text-gray-700 block"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-700 block"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
