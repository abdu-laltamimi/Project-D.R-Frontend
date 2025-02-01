import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AnimatedText = ({ text, className }) => {
  // Split text into words
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-3"
        >
          {word === "transformations" ? (
            <span className="text-zinc-500">{word}</span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "House Extension",
      description:
        "Complete house extension, modernizing spaces with care.",
      details: [
        "Full structural renovations",
        "Interior and exterior remodeling",
        "Modern design implementation",
        "Energy efficiency upgrades"
      ],
      image: "/modern-extension.jpeg",
      category: "Residential",
      size: "large"
    },
    {
      title: "Bathroom Refurb",
      description:
        "Elegant and functional bathroom refurbishments with premium materials and finishes.",
      details: [
        "Premium fixture installation",
        "Waterproofing solutions",
        "Custom tiling work",
        "Modern design implementation"
      ],
      image: "/afterBath.jpg",
      category: "Interior",
      size: "small"
    },
    {
      title: "Kitchen Refurb",
      description:
        "Tailored kitchen renovations featuring state-of-the-art appliances and modern designs.",
      details: [
        "Custom cabinetry",
        "High-end appliance installation",
        "Lighting design",
        "Space optimization"
      ],
      image: "/kitchen.jpg",
      category: "Interior",
      size: "small"
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
    <section className="pt-24">
      <div className="px-6 md:px-12 lg:px-24 rounded-[40px] bg-white py-12">
        <div className="max-w-[1920px] mx-auto">
          {/* Header */} <motion.span 
              className="inline-block px-4 py-1.5 text-sm font-medium text-zinc-900 rounded-full border border-zinc-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              PORTFOLIO
            </motion.span>
          <div className="mb-20 max-w-4xl pt-4">
            <AnimatedText 
              text="Recent transformations that inspire"
              className="text-4xl md:text-5xl lg:text-7xl font-light text-zinc-900 max-w-4xl leading-tight"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className={`group relative ${project.size === 'large' ? 'md:col-span-2' : ''}`}
              >
                <div className="relative rounded-3xl overflow-hidden">
                  {/* Project Image */}
                  <div className={`relative ${
                    project.size === 'large' ? 'aspect-[21/9]' : 'aspect-[16/9]'
                  }`}>
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div 
                      className="absolute inset-0 bg-black transition-opacity duration-300"
                      style={{
                        opacity: hoveredProject === index ? 0.85 : 0
                      }}
                    />
                  </div>

                  {/* Default Content */}
                  <div 
                    className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end transition-opacity duration-300"
                    style={{
                      opacity: hoveredProject === index ? 0 : 1
                    }}
                  >
                    <div className="relative z-10">
                      <span className="text-sm font-medium text-white/70 mb-4 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Hover Content */}
                  <AnimatePresence>
                    {hoveredProject === index && (
                      <motion.div 
                        className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="max-w-xl">
                          <span className="text-sm font-medium text-white/70 mb-4 block">
                            {project.category}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                            {project.title}
                          </h3>
                          <p className="text-white/80 mb-6">
                            {project.description}
                          </p>
                          <ul className="space-y-2">
                            {project.details.map((detail, i) => (
                              <motion.li 
                                key={i}
                                className="text-white/70 flex items-center gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <span className="text-white">•</span>
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-end mt-16">
            <Link href="/projects">
              <motion.button 
                className="group inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-base font-light">View all projects</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
