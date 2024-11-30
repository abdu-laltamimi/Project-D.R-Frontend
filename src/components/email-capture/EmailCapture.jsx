import React from "react";
import { FaTools, FaUsers, FaCheckSquare, FaBalanceScale } from "react-icons/fa";
import Link from "next/link";

export const Services = () => {
  return (
    <section className="bg-zinc-800 text-white px-6 md:px-16">

      <div className="relative grid grid-cols-1 md:grid-cols-2">
        {/* Left Column (Image with Gradient Overlay) */}
        <div
          className="col-span-1 relative h-[50vh] md:h-[70vh] overflow-hidden shadow-xl"
          style={{
            backgroundImage: `url('toilet.jpg')`, // Replace with your image path
            backgroundSize: "cover",

            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
        </div>

        {/* Right Column (Centered Services List) */}
        <div className="col-span-1 z-10 flex flex-col justify-center items-center text-left p-6">
          <h2 className="text-4xl md:text-5xl font-extrabold pb-4">
            Our Services
          </h2>
          <ul className="space-y-3 text-base md:text-lg list-disc list-inside">
            <li>Complete Remodeling</li>
            <li>Kitchen Remodeling</li>
            <li>Bathroom Remodeling</li>
            <li>Home Interior</li>
            <li>Flooring</li>
          </ul>
          <Link href="/services" className="mt-4 px-6 py-2 bg-transparent border border-white hover:bg-zinc-50 hover:text-black text-white text-sm md:text-base rounded-lg shadow-md">
            Explore More
          </Link>
        </div>
      </div>

      {/* Services Grid Section */}
      <ServicesGrid />

      {/* CTA Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Column (Image) */}

        {/* Right Column (Text Content) */}
        <div className="text-gray-300 p-10 flex flex-col justify-center">
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
    Riba Contracting
  </h2>
  <p className="text-lg leading-relaxed mb-4">
    <strong>Riba Contracting</strong> is a full-service building and
    construction company dedicated to transforming residential and
    commercial spaces to meet the needs and desires of clients across
    Manchester, England.
  </p>
  <p className="text-lg leading-relaxed mb-4">
    We specialize in delivering high-quality renovations, extensions,
    refurbishments, and new builds. Whether you're looking to add a
    spacious extension, remodel your interiors, or start a project from
    scratch, Riba Contracting ensures precision, quality, and
    excellence every step of the way.
  </p>
  <p className="text-lg leading-relaxed mb-4">
    Based in <strong>Manchester</strong>, we cater to clients across
    surrounding areas with a professional approach tailored to your
    needs. Simply get in touch, and our team will be ready to bring
    your vision to life.
  </p>
  {/* <button className="mt-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm md:text-base rounded-lg shadow-md">
  Contact Riba Contracting
</button> */}

</div>


<div
  className="h-72 md:h-auto overflow-hidden shadow-lg"
  style={{
    backgroundImage: `url('crane.jpg')`, // Replace with your image path
    backgroundSize: "cover",
    
    backgroundPosition: "center",
  }}
></div>
      </div>
    </section>
  );
};

// Services Grid Layout with Borders
export const ServicesGrid = () => {
  return (
    <section className="bg-zinc-900 text-white">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <ServiceCard
          icon={<FaTools size={50} />}
          title="Vast Experience"
        />
        <ServiceCard
          icon={<FaUsers size={50} />}
          title="Professional Team"
        />
        <ServiceCard
          icon={<FaCheckSquare size={50} />}
          title="High Finish"
        />
        <ServiceCard
          icon={<FaBalanceScale size={50} />}
          title="Sustainable & Accountable"
        />
      </div>
    </section>
  );
};

// Individual Service Card Component with Custom Borders
const ServiceCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="text-[#003d4d] mb-4">{icon}</div>
      <h3 className="text-lg md:text-xl font-light">{title}</h3>
    </div>
  );
};
