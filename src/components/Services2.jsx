import React, { useState } from "react";
import Link from "next/link";

const Services2 = () => {
  const categories = [
    {
      category: "Residential Services",
      services: [
        {
          title: "House Renovations",
          description:
            "Complete renovations to upgrade and modernize your property with precision and care.",
          image: "/house-renovation.png",
          link: "/services/house-renovations",
        },
        {
          title: "Bathroom Refurb",
          description:
            "Complete renovations to upgrade and modernize your property with precision and care.",
          image: "/bathroom.png",
          link: "/services/bathroom-refurb",
        },
        {
          title: "Kitchen Refurb",
          description:
            "Tailored kitchen design and installation for modern, functional, and beautiful spaces.",
          image: "/kitchen.png",
          link: "/services/kitchen-refurbishment",
        },
      ],
    },
    {
      category: "Specialty Conversions",
      services: [
        {
          title: "Loft & Garage Conversions",
          description:
            "Maximise unused spaces with tailored designs for functional living.",
          image: "/loft.png",
          link: "/services/loft-garage-conversions",
        },
        {
          title: "Basement & Cellar Conversions",
          description:
            "Unlock potential with basement transformations tailored to your needs.",
          image: "/basement.png",
          link: "/services/basement-cellar-conversions",
        },
        {
          title: "Commercial Conversions",
          description:
            "Transform commercial spaces for any purpose with expert precision.",
          image: "/house-reno.png",
          link: "/services/commercial-conversions",
        },
      ],
    },
    {
      category: "Additional Services",
      services: [
        {
          title: "On-Demand Maintenance",
          description:
            "Reliable repairs and property upkeep for landlords and investors – hassle-free.",
          image: "/maintenance.png",
          link: "/services/on-demand-maintenance",
        },
        {
          title: "Design & Build Services",
          description:
            "A full-service approach: design, approvals, and build – all under one roof.",
          image: "/design.png",
          link: "/services/design-build-services",
        },
        {
          title: "Investor-Focused Services",
          description:
            "Tailored support for investors to maximise property potential.",
          image: "/investor.png",
          link: "/services/investor-focused-services",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className=" text-white py-16 px-6 md:px-16">
      <h2 className="text-4xl text-center md:text-5xl font-bold mb-12">
        Our Services
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-2 text-lg font-semibold ${
              activeTab === index
                ? "bg-zinc-700 text-white"
                : "bg-zinc-800 text-gray-400"
            } rounded-t-lg transition duration-300`}
            onClick={() => setActiveTab(index)}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className=" rounded-lg shadow-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[activeTab].services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              ></div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {service.description}
                </p>
                <Link href={service.link}>
                  <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-800 text-white text-sm font-semibold rounded transition duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;
