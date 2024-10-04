import React from "react";
import next from "../assets/next.png";

const Solution = () => {
  return (
    <div className="bg-orange-100">
      {/* Hero Image Section */}
      <div className="relative w-full">
        <img
          src={next}
          alt="next"
          className="w-full h-auto max-h-[600px] object-cover" // Ensure the height is responsive
        />
      </div>

      {/* Lower Section - Orange Background */}
      <div className="bg-orange-500 py-16 text-center">
        {/* Heading */}
        <h3 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-8">
          Laundry Solution for a Busy Life
        </h3>

        {/* Flexbox to display paragraphs vertically */}
        <div className="flex flex-col justify-center items-center gap-8 mx-auto max-w-4xl px-4">
          {/* Paragraph 1 */}
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-lg text-justify">
            At Qbee Laundry Services, we understand that modern life can be
            fast-paced and demanding, leaving little time for everyday chores
            like laundry. That's why we offer a full range of convenient
            services tailored to make your life easier. From professional
            laundry and ironing to dry cleaning, tailoring, carpet care, and
            even shoe care, we handle it all—so you don’t have to.
          </p>

          {/* Paragraph 2 */}
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-lg text-justify">
            Our hassle-free process includes easy scheduling, free pickup and
            delivery, and real-time tracking, ensuring your garments and
            household items are cleaned, pressed, and returned to you without
            any stress. Whether you're balancing work, family, or personal
            commitments, Qbee is here to take laundry off your to-do list,
            giving you more time for what really matters.
          </p>

          {/* Paragraph 3 */}
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-lg text-justify">
            Experience the convenience of a laundry solution designed for your
            busy life with Qbee Laundry Services — efficient, reliable, and
            tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solution;
