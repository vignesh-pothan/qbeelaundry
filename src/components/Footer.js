import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path as needed

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-black text-white py-8 relative">
      {" "}
      {/* Reduced padding */}
      {/* Desktop Version */}
      <div className="max-w-6xl mx-auto px-4 hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {" "}
        {/* Adjusted gap */}
        {/* Logo Section */}
        <div className="flex flex-col items-start mt-8 -ml-10">
          <img src={logo} alt="Qbee Laundry Logo" className="w-32 mb-4" />
        </div>
        {/* Company Links Section */}
        <div>
          <h3 className="text-orange-500 font-bold text-lg">Company</h3>
          <ul className="mt-4 space-y-1">
            {" "}
            {/* Reduced spacing */}
            <li>
              <Link to="/" className="text-white hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Services
              </Link>
            </li>{" "}
            <li>
              <Link to="/pricing" className="text-white hover:text-orange-500">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Services Section */}
        <div>
          <h3 className="text-orange-500 font-bold text-lg">Services</h3>
          <ul className="mt-4 space-y-1 text-white">
            {" "}
            {/* Reduced spacing */}
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Laundry
              </Link>
            </li>
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Ironing
              </Link>
            </li>
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Dry Cleaning
              </Link>
            </li>
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Tailoring
              </Link>
            </li>
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Carpet Care
              </Link>
            </li>
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Shoe Care
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Info Section */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-orange-500 font-bold text-lg">Contact Info</h3>
          <p className="mt-4 text-white">
            Shabiya 12,Mussafah <br />
            Abu Dhabi, UAE <br />
            Landline : +971 2 517 5886 <br />
            Mobile : +971 58989 6600 <br />
            Email : info@qbeelaundry.com, contact@qbeelaundry.com
          </p>
        </div>
      </div>
      {/* Mobile Version */}
      <div className="md:hidden flex flex-col items-center mt-6 space-y-4">
        {" "}
        {/* Adjusted spacing */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Qbee Laundry Logo" className="w-28 mb-2" />{" "}
        </div>
        <div>
          <h3 className="text-orange-500 font-bold text-lg">Company</h3>
          <ul className="mt-3 space-y-1 text-center">
            {" "}
            {/* Reduced spacing */}
            <li>
              <Link to="/" className="text-white hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-white hover:text-orange-500">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-orange-500 font-bold text-lg">Services</h3>
          <ul className="mt-3 space-y-1 text-center">
            {" "}
            {/* Reduced spacing */}
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Laundry
              </Link>
            </li>
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Ironing
              </Link>
            </li>
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Dry Cleaning
              </Link>
            </li>
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Tailoring
              </Link>
            </li>
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Carpet Care
              </Link>
            </li>
            <li>
              <Link
                to="/OurService"
                className="text-white hover:text-orange-500"
              >
                Shoe Care
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-orange-500 font-bold text-lg">Contact Info</h3>
          <p className="mt-3 text-white text-center">
            Shabiya 12,Mussafah <br />
            Abu Dhabi, UAE <br />
            Landline : +971 2 517 5886 <br />
            Mobile : +971 58989 6600 <br />
            Email : info@qbeelaundry.com, contact@qbeelaundry.com
          </p>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="mt-3 pt-3 flex justify-between items-center px-3">
        {" "}
        {/* Removed border */}
        {/* Left: Rights Reserved */}
        <p className="text-white text-sm">
          &copy; {currentYear} Qbee Laundry, All rights reserved.
        </p>
        {/* Right: Developed By */}
        <p className="text-white text-sm">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/arijit-bhowmik-2132a01b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            @BhowmikzAR
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
