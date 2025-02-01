import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const AnimatedText = ({ text, className }) => {
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
          {word === "services" ? (
            <span className="text-zinc-400">{word}</span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const Services2 = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: "Residential Services",
      description: "We provide a wide range of residential services to help you create the home of your dreams.",
      image: "/main-kitchen.png",
      link: "/services/interior-design",
      number: "1",
      subServices: [
        {
          title: "House Renovations",
          description: "Complete renovations to upgrade and modernize your property.",
          link: "/services/house-renovations"
        },
        {
          title: "Bathroom Refurb",
          description: "Transform your bathroom into a modern, luxurious space.",
          link: "/services/bathroom-refurb"
        },
        {
          title: "Kitchen Design",
          description: "Custom kitchen solutions tailored to your lifestyle.",
          link: "/services/kitchen-design"
        }
      ]
    },
    {
      title: "Speciality Conversions",
      description: "We specialise in converting existing spaces into modern, functional living areas.",
      image: "/main-loft.png",
      link: "/services/architecture",
      number: "02",
      subServices: [
        {
          title: "Loft & Garage Conversions",
          description: "Maximise unused spaces with tailored designs for functional living.",
          link: "/services/new-builds"
        },
        {
          title: "Basement & Cellar Conversions",
          description: "Unlock potential with basement transformations offering additional living space.",
          link: "/services/extensions"
        },
        {
          title: "Commercial Conversions",
          description: "Transform commercial spaces for any purpose with expert precision.",
          link: "/services/planning-design"
        }
      ]
    },
    {
      title: "Additional Services",
      description: "We offer a range of additional services to help you create the home of your dreams.",
      image: "/on-demand-maintenance.png",
      link: "/services/property-interior",
      number: "03",
      subServices: [
        {
          title: "On-Demand Maintenance",
          description: "Reliable repairs and property upkeep for landlords and investors – hassle-free.",
          link: "/services/space-planning"
        },
        {
          title: "Design & Build Services",
          description: "A full-service approach: design, approvals, and build – all under one roof.",
          link: "/services/furniture"
        },
        {
          title: "Investor-Focused Services",
          description: "Tailored support for investors to maximise property potential.",
          link: "/services/lighting"
        }
      ]
    }
  ];

  return (
    <section className="py-24">
      <div className="px-6 md:px-12 lg:px-24 rounded-[40px] bg-zinc-800 py-12">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-20 max-w-4xl pt-12">
            <motion.span 
              className="inline-block px-4 py-1.5 text-sm font-medium text-zinc-400 rounded-full border border-zinc-500 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              SERVICES
            </motion.span>
            <AnimatedText 
              text="We provide various services to transform your ideas"
              className="text-4xl md:text-5xl lg:text-7xl font-light text-white max-w-4xl leading-tight"
            />
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="group relative rounded-2xl"
              >
                <motion.div 
                  className="absolute inset-0 bg-white rounded-tr-2xl rounded-bl-2xl "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredService === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative p-12 lg:p-16 transition-colors duration-300">
                  <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">
                    <div className="relative aspect-[16/9] rounded-br-2xl rounded-tl-2xl overflow-hidden">
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-zinc-900/40 to-transparent"
                        animate={{ 
                          opacity: hoveredService === index ? 0 : 1 
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <div className="relative">
                      <div className="space-y-8">
                        <motion.button 
                          className="flex items-center gap-4 w-full group/button cursor-pointer"
                          onClick={() => setExpandedService(expandedService === index ? null : index)}
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h3 
                            className={`text-4xl font-light transition-colors duration-300 ${
                              hoveredService === index ? 'text-zinc-900' : 'text-white'
                            }`}
                          >
                            {service.title}
                          </h3>
                          <div className="relative">
                            <motion.div 
                              className="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                              animate={{ 
                                rotate: expandedService === index ? 45 : 0,
                                backgroundColor: hoveredService === index ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"
                              }}
                            >
                              <span className={`text-lg font-light transition-colors duration-300 ${
                                hoveredService === index ? 'text-zinc-900' : 'text-white'
                              }`}>+</span>
                            </motion.div>
                            
                            {expandedService !== index && (
                              <motion.div
                                className="absolute inset-0 rounded-full"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ 
                                  scale: 1.2, 
                                  opacity: 0,
                                  backgroundColor: hoveredService === index ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"
                                }}
                                transition={{ 
                                  repeat: Infinity,
                                  duration: 1.5,
                                  ease: "easeOut"
                                }}
                              />
                            )}
                          </div>
                        </motion.button>

                        <p className={`text-lg transition-colors duration-300 ${
                          hoveredService === index ? 'text-zinc-600' : 'text-zinc-400'
                        }`}>
                          {service.description}
                        </p>

                        {/* <div className="flex items-center gap-3 text-sm">
                          <div className="flex -space-x-1.5">
                            {service.subServices.map((_, i) => (
                              <div 
                                key={i}
                                className={`w-6 h-6 rounded-full border-2 transition-colors duration-300 ${
                                  hoveredService === index 
                                    ? 'border-zinc-200 bg-white' 
                                    : 'border-zinc-800 bg-zinc-900'
                                }`}
                              />
                            ))}
                          </div>
                          {/* <span className={`transition-colors duration-300 ${
                            hoveredService === index ? 'text-zinc-500' : 'text-zinc-500'
                          }`}>
                            {service.subServices.length} services included
                          </span> */}
                        {/* </div>    */}

                        <div className={`h-[1px] w-full transition-colors duration-300 ${
                          hoveredService === index 
                            ? 'bg-gradient-to-r from-zinc-200 to-transparent' 
                            : 'bg-gradient-to-r from-zinc-700 to-transparent'
                        }`} />
                        
                        <AnimatePresence>
                          {expandedService === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="grid gap-4 pt-6">
                                {service.subServices.map((subService, subIndex) => (
                                  <Link key={subIndex} href={subService.link}>
                                    <motion.div 
                                      className={`group/item relative backdrop-blur-sm rounded-lg p-6 transition-all duration-300 ${
                                        hoveredService === index 
                                          ? 'bg-white/80 hover:bg-white' 
                                          : 'bg-zinc-800/30 hover:bg-zinc-800/50'
                                      }`}
                                      whileHover={{ x: 10 }}
                                    >
                                      <div className="flex justify-between items-center">
                                        <div>
                                          <h4 className={`font-medium mb-1 transition-colors duration-300 ${
                                            hoveredService === index ? 'text-zinc-900' : 'text-white'
                                          }`}>
                                            {subService.title}
                                          </h4>
                                          <p className={`text-sm transition-colors duration-300 ${
                                            hoveredService === index ? 'text-zinc-600' : 'text-zinc-400'
                                          }`}>
                                            {subService.description}
                                          </p>
                                        </div>
                                        <motion.span 
                                          className={`opacity-0 group-hover/item:opacity-100 transition-all duration-300 ${
                                            hoveredService === index ? 'text-zinc-900' : 'text-white'
                                          }`}
                                          initial={{ x: -10 }}
                                          whileHover={{ x: 0 }}
                                        >
                                          →
                                        </motion.span>
                                      </div>
                                    </motion.div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
