import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const RecentProjects = () => {
  const projects = [
    {
      title: "House Renovations",
      description:
        "Complete transformations of homes, modernizing spaces with precision and care.",
      image: "/11.png",
    },
    {
      title: "Bathroom Refurb",
      description:
        "Elegant and functional bathroom refurbishments with premium materials and finishes.",
      image: "/afterBath.jpg",
    },
    {
      title: "Kitchen Refurb",
      description:
        "Tailored kitchen renovations featuring state-of-the-art appliances and modern designs.",
      image: "/kitchen.jpg",
    },
    // {
    //   title: "Loft & Garage Conversions",
    //   description:
    //     "Maximizing space with bespoke designs for loft and garage conversions.",
    //   image: "/loft-conversion.jpg",
    // },
    // {
    //   title: "Basement Conversions",
    //   description:
    //     "Transforming basements into functional and stylish living spaces.",
    //   image: "/basement.jpg",
    // },
  ];

  return (
    <section className=" text-white py-16 px-6 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold pb-4">
          Recent Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-400">
          Check out some of our recent standout projects, showcasing our
          expertise and craftsmanship.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-zinc-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Project Image */}
            <div
              className="h-52 bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            ></div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-4">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <Link href="/projects">
          <button className="px-6 py-3 bg-white hover:bg-zinc-700 text-zinc-900 hover:text-white text-lg font-semibold rounded-full transition duration-300">
            Explore All Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default RecentProjects;
