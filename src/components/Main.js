import React from "react";
import hero from "../assets/hero.png"; // Import the image

const Main = () => {
  return (
    <div className="bg-white">
      {/* Hero section with image and text */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
        <img
          src={hero}
          alt="Hero"
          className="w-full h-full object-contain object-center"
        />
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-500 mb-12">
          Why Choose QBee Laundry Services?
        </h2>
        <p className="text-left font-semibold text-lg sm:text-xl md:text-2xl text-orange-500 max-w-full sm:max-w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
          At Qbee Laundry Services, we’ve earned our reputation in Abu Dhabi
          through over 5 years of delivering exceptional laundry care. Our
          experienced team uses advanced techniques and cutting-edge equipment
          to handle your garments with precision, ensuring a perfect clean,
          press, and finish every time. We’ve designed a seamless, hassle-free
          process that includes free pick-up, next-day delivery, and real-time
          tracking—giving you complete peace of mind. Whether you're at home or
          work, we’re easily accessible across Abu Dhabi, offering secure online
          payments and great rates. Trust Qbee for quality, convenience, and
          care in every load.
        </p>
      </div>
    </div>
  );
};

export default Main;
