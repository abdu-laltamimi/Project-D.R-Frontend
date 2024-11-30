import React from "react";
import { motion } from "framer-motion";

export const RecentProjects = () => {
  const projects = [
    {
      title: "Modern Kitchen Renovation",
      description:
        "A complete kitchen transformation with modern designs and state-of-the-art appliances.",
      image: "kitchen.jpg",
    },
    {
      title: "Residential Building Refurbishment",
      description:
        "Refurbished a multi-unit residential building with high-end finishes.",
      image: "building.jpg",
    },
    {
      title: "Luxury Bathroom Remodel",
      description:
        "A sleek and elegant bathroom renovation featuring premium materials and fixtures.",
      image: "bath.jpg",
    },
    {
      title: "Home Extension",
      description:
        "Added a spacious extension to a family home, creating more room for living and entertaining.",
      image: "extension.jpg",
    },
  ];

  return (
    <section className="bg-zinc-800 text-white py-12 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold pb-4">
          Recent Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-400">
          Explore some of our latest work in renovations, refurbishments, and
          building projects.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.6 }} // Reduced stagger
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 }, // Smaller offset
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.6, // Smooth and longer duration
              ease: "easeInOut",
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="will-change-transform bg-zinc-800 rounded-sm shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500 ease-in-out">
      <div
        className="h-52 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-zinc-400 text-sm font-light">{description}</p>
      </div>
    </div>
  );
};
