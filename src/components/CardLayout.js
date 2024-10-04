import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-orange-100 p-6 rounded-lg shadow-md text-center w-full max-w-sm mx-auto">
      {/* Icon/Illustration Placeholder */}
      <div className="bg-white p-4 w-16 h-16 mx-auto rounded-full mb-4">
        {/* Image/Icon placeholder */}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
    </div>
  );
};

const CardLayout = () => {
  const cards = [
    {
      title: "Ironing",
      description:
        "Ibibammd hthdhdhadf hdhudhdhdhf rtyhdhd-fuhf nbthbighkajt vyshth-vfhfvh",
    },
    {
      title: "Ironing",
      description:
        "Ibibammd hthdhdhadf hdhudhdhdhf rtyhdhd-fuhf nbthbighkajt vyshth-vfhfvh",
    },
    {
      title: "Ironing",
      description:
        "Ibibammd hthdhdhadf hdhudhdhdhf rtyhdhd-fuhf nbthbighkajt vyshth-vfhfvh",
    },
    {
      title: "Ironing",
      description:
        "Ibibammd hthdhdhadf hdhudhdhdhf rtyhdhd-fuhf nbthbighkajt vyshth-vfhfvh",
    },
    {
      title: "Ironing",
      description:
        "Ibibammd hthdhdhadf hdhudhdhdhf rtyhdhd-fuhf nbthbighkajt vyshth-vfhfvh",
    },
  ];

  return (
    <div className="bg-white py-12 px-4">
      {/* Section 1 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
            Eco friendly washing & Drying process
          </h2>
          <p className="text-gray-600 text-sm md:text-base text-center lg:text-left">
            Jbvsbibsunds dfjsiegsidjfdijg diflgkafothier eryitpowautre08eri...
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ServiceCard
            title={cards[0].title}
            description={cards[0].description}
          />
          <ServiceCard
            title={cards[1].title}
            description={cards[1].description}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
        <div className="flex justify-center">
          <ServiceCard
            title={cards[2].title}
            description={cards[2].description}
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
            Personalized care for every Fabric
          </h2>
          <p className="text-gray-600 text-sm md:text-base text-center lg:text-left">
            Jbvsbibsunds dfjsiegsidjfdijg diflgkafothier eryitpowautre08eri...
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
            Excellent Laundry & Dry cleaning
          </h2>
          <p className="text-gray-600 text-sm md:text-base text-center lg:text-left">
            Jbvsbibsunds dfjsiegsidjfdijg diflgkafothier eryitpowautre08eri...
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <ServiceCard
            title={cards[3].title}
            description={cards[3].description}
          />
          <ServiceCard
            title={cards[4].title}
            description={cards[4].description}
          />
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
