import React from "react";
import Footer from "../components/Footer";
import service from "../assets/service.png";

const Ourservice = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 ">
      {/* Header Image */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full mb-8 px-3">
        <img
          src={service}
          alt="Our Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Our Services
          </h1>
        </div>
      </div>
      {/* Introduction Text */}
      <div className="container mx-auto mb-8 text-center px-4 lg:px-24">
        <p className="text-gray-700 text-lg lg:text-xl">
          At QBee Laundry Services, we offer a full range of laundry and care
          solutions designed to fit seamlessly into your busy lifestyle. From
          everyday laundry to specialized garment care, our expert team ensures
          that each item is treated with the highest level of care, using
          state-of-the-art technology and premium products. Discover our
          services below:
        </p>
      </div>
      {/* Services Cards */}
      <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Service 1: Laundry */}
        <div className="bg-[#FFEFE4] p-6 shadow-lg rounded-xl flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-lg font-bold text-orange-500 mb-2">Laundry</h3>
          <p className="text-gray-600 mb-4">
            We provide top-quality laundry services for all types of clothing
            and fabrics. Our team ensures your clothes are thoroughly cleaned
            while maintaining their softness and integrity.
          </p>
          <ul className="text-gray-600 text-left list-disc pl-4">
            <li>Washing with fabric-appropriate detergents</li>
            <li>Careful sorting and stain removal</li>
            <li>Folding and packaging for easy storage</li>
            <li>Same-day and next-day delivery options</li>
          </ul>
        </div>

        {/* Service 2: Ironing */}
        <div className="bg-[#FFEFE4] p-6 shadow-lg rounded-xl flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-lg font-bold text-orange-500 mb-2">Ironing</h3>
          <p className="text-gray-600 mb-4">
            Our professional ironing service is designed to give your clothes a
            sharp and polished finish, with careful attention to detail.
          </p>
          <ul className="text-gray-600 text-left list-disc pl-4">
            <li>Steam and heat pressing for all fabric types</li>
            <li>Hand-finished attention to delicate garments</li>
            <li>Neat folding or hanging based on preference</li>
            <li>Fast turnaround time for convenience</li>
          </ul>
        </div>

        {/* Service 3: Dry Cleaning */}
        <div className="bg-[#FFEFE4] p-6 shadow-lg rounded-xl flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-lg font-bold text-orange-500 mb-2">
            Dry Cleaning
          </h3>
          <p className="text-gray-600 mb-4">
            Our dry cleaning service provides gentle and effective care for
            garments that require special treatment.
          </p>
          <ul className="text-gray-600 text-left list-disc pl-4">
            <li>Safe, non-abrasive cleaning solutions</li>
            <li>Stain removal and fabric care tailored to each garment</li>
            <li>Preservation of fabric integrity and color</li>
            <li>Perfectly pressed and ready-to-wear results</li>
          </ul>
        </div>

        {/* Service 4: Tailoring */}
        <div className="bg-[#FFEFE4] p-6 shadow-lg rounded-xl flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-lg font-bold text-orange-500 mb-2">Tailoring</h3>
          <p className="text-gray-600 mb-4">
            Our expert tailoring service ensures your clothes fit perfectly,
            offering alterations, repairs, and custom adjustments.
          </p>
          <ul className="text-gray-600 text-left list-disc pl-4">
            <li>Hemming, resizing, and custom fitting</li>
            <li>Repairs for zippers, seams, and buttons</li>
            <li>Adjustments for formal wear, casual wear, and uniforms</li>
            <li>Quick turnaround to meet your needs</li>
          </ul>
        </div>

        {/* Service 5: Carpet Care */}
        <div className="bg-[#FFEFE4] p-6 shadow-lg rounded-xl flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-lg font-bold text-orange-500 mb-2">
            Carpet Care
          </h3>
          <p className="text-gray-600 mb-4">
            Our carpet care service deep cleans your home or office carpets,
            removing dirt, stains, and allergens for a fresh look.
          </p>
          <ul className="text-gray-600 text-left list-disc pl-4">
            <li>Deep cleaning and stain removal</li>
            <li>Safe, eco-friendly cleaning products</li>
            <li>Removal of allergens, dust, and bacteria</li>
            <li>Service for both residential and commercial carpets</li>
          </ul>
        </div>

        {/* Service 6: Shoe Care */}
        <div className="bg-[#FFEFE4] p-6 shadow-lg rounded-xl flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-lg font-bold text-orange-500 mb-2">Shoe Care</h3>
          <p className="text-gray-600 mb-4">
            Our shoe care service keeps your shoes in top condition, whether
            it’s cleaning, polishing, or repairs.
          </p>
          <ul className="text-gray-600 text-left list-disc pl-4">
            <li>Cleaning, conditioning, and polishing</li>
            <li>Shoe repairs, including soles, heels, and stitching</li>
            <li>Special care for leather, suede, and delicate materials</li>
            <li>Protection treatments to extend shoe life</li>
          </ul>
        </div>
      </div>
      {/* Spacing before Footer */}
      <div className="py-8" /> {/* Adjust the padding as needed */}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Ourservice;
