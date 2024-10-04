import React from "react";
import Footer from "../components/Footer";
import service from "../assets/service.png";

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full mb-0 px-3">
        <img
          src={service}
          alt="Our Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Card & Form Section */}
      <div className="max-w-7xl mx-auto mt-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6 lg:px-8">
        {/* Contact Info Card */}
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto mt-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-orange-500">Qbee Laundry</h2>
            <div className="flex justify-center items-center space-x-3 mt-2">
              {/* Instagram Logo */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="h-6 w-6"
              />
              {/* Instagram Profile Link */}
              <a
                href="https://www.instagram.com/qbee_laundry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-500 text-lg"
              >
                @qbee_laundry
              </a>
            </div>

            <p className="text-gray-700 text-lg mt-2">
              +971 58989 6600, +971 50 8768 143
            </p>
            <p className="text-gray-700 text-lg">
              Shabiya 12, Mussafah, Abu Dhabi, UAE
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Your Message "
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 w-full"
          >
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
