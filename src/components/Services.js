import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="py-16 px-4">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-orange-500">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {/* Free Pickup and Delivery */}
        <div className="bg-[#FFEFE4] p-8 shadow-md hover:shadow-lg rounded-xl flex flex-col items-center text-center transition-shadow">
          <h3 className="text-lg font-bold text-orange-500 mb-2">
            Free Pickup and Delivery
          </h3>
          <p className="text-gray-600 mb-4">
            At Qbee Laundry Services, we make laundry easy with our free pick-up
            and delivery service. Simply schedule a time, and our team will
            collect and return your freshly cleaned garments at your
            convenience.
          </p>
          <Link to="/OurService" className="text-orange-500 hover:underline">
            Learn more &gt;
          </Link>
        </div>

        {/* Laundry */}
        <div className="bg-[#FFEFE4] p-8 shadow-md hover:shadow-lg rounded-xl flex flex-col items-center text-center transition-shadow">
          <h3 className="text-lg font-bold text-orange-500 mb-2">Laundry</h3>
          <p className="text-gray-600 mb-4">
            Our expert laundry service ensures your clothes are washed with
            care, using premium detergents and advanced cleaning methods. We
            handle all fabric types, leaving your garments fresh, clean, and
            ready to wear.
          </p>
          <Link to="/OurService" className="text-orange-500 hover:underline">
            Learn more &gt;
          </Link>
        </div>

        {/* Ironing */}
        <div className="bg-[#FFEFE4] p-8 shadow-md hover:shadow-lg rounded-xl flex flex-col items-center text-center transition-shadow">
          <h3 className="text-lg font-bold text-orange-500 mb-2">Ironing</h3>
          <p className="text-gray-600 mb-4">
            We provide professional ironing to keep your clothes wrinkle-free
            and looking sharp. Whether it's your everyday wear or special
            garments, we ensure a flawless finish every time.
          </p>
          <Link to="/OurService" className="text-orange-500 hover:underline">
            Learn more &gt;
          </Link>
        </div>

        {/* Dry Cleaning */}
        <div className="bg-[#FFEFE4] p-8 shadow-md hover:shadow-lg rounded-xl flex flex-col items-center text-center transition-shadow">
          <h3 className="text-lg font-bold text-orange-500 mb-2">
            Dry Cleaning
          </h3>
          <p className="text-gray-600 mb-4">
            For delicate fabrics and specialty items, our dry cleaning service
            offers the perfect solution. We use safe, high-quality processes to
            gently clean your clothes, maintaining their texture and color while
            removing tough stains.
          </p>
          <Link to="/OurService" className="text-orange-500 hover:underline">
            Learn more &gt;
          </Link>
        </div>

        {/* Tailoring */}
        <div className="bg-[#FFEFE4] p-8 shadow-md hover:shadow-lg rounded-xl flex flex-col items-center text-center transition-shadow">
          <h3 className="text-lg font-bold text-orange-500 mb-2">Tailoring</h3>
          <p className="text-gray-600 mb-4">
            Our skilled tailors offer alterations and repairs to keep your
            clothes fitting perfectly. From minor adjustments to major
            alterations, we help you maintain your wardrobe with expert
            craftsmanship.
          </p>
          <Link to="/OurService" className="text-orange-500 hover:underline">
            Learn more &gt;
          </Link>
        </div>

        {/* Carpet Care */}
        <div className="bg-[#FFEFE4] p-8 shadow-md hover:shadow-lg rounded-xl flex flex-col items-center text-center transition-shadow">
          <h3 className="text-lg font-bold text-orange-500 mb-2">
            Carpet Care
          </h3>
          <p className="text-gray-600 mb-4">
            Our carpet care service ensures your home or office carpets stay
            clean and fresh. We use deep-cleaning techniques to remove dirt,
            stains, and allergens, giving your carpets a revitalized look and
            feel.
          </p>
          <Link to="/OurService" className="text-orange-500 hover:underline">
            Learn more &gt;
          </Link>
        </div>

        {/* Shoe Care */}
        <div className="bg-[#FFEFE4] p-8 shadow-md hover:shadow-lg rounded-xl flex flex-col items-center text-center transition-shadow">
          <h3 className="text-lg font-bold text-orange-500 mb-2">Shoe Care</h3>
          <p className="text-gray-600 mb-4">
            Keep your footwear in top condition with our shoe care service. From
            cleaning and polishing to repairs, we ensure your shoes look as good
            as new, ready to step out in style.
          </p>
          <Link to="/OurService" className="text-orange-500 hover:underline">
            Learn more &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
