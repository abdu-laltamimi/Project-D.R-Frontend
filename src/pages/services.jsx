import React from "react";
import { FaHome, FaIndustry, FaPaintRoller, FaHammer, FaArrowLeft } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { FinalCTA } from "@/components/final-cta/FinalCTA";

const services = [
  {
    title: "Residential Construction",
    description: "Custom home building and residential renovations tailored to your specific needs and preferences.",
    icon: <FaHome className="w-16 h-16 text-[#003d4d]" />,
    image: "/toilet.jpg", // Replace with actual image path
  },
  {
    title: "Industrial Projects",
    description: "Specialized construction services for manufacturing plants, warehouses, and industrial complexes.",
    icon: <FaIndustry className="w-16 h-16 text-[#003d4d]" />,
    image: "/crane.jpg", // Replace with actual image path
  },
  {
    title: "Renovation & Remodeling",
    description: "Complete renovation services for both commercial and residential properties.",
    icon: <FaPaintRoller className="w-16 h-16 text-[#003d4d]" />,
    image: "/afterBath2.jpg", // Replace with actual image path
  },
  {
    title: "House Renovations",
    description: "Transform your home with expert renovation services to enhance comfort and value.",
    icon: <MdRealEstateAgent className="w-16 h-16 text-[#003d4d]" />,
    image: "/reno.jpg", // Replace with actual image path
  },
  {
    title: "House Extensions",
    description: "Add extra space to your home with seamless and stylish extensions.",
    icon: <FaHammer className="w-16 h-16 text-[#003d4d]" />,
    image: "/extension.jpg", // Replace with actual image path
  },
  {
    title: "Kitchen Refurbishment",
    description: "Modernize your kitchen with our expert refurbishment services.",
    icon: <FaHammer className="w-16 h-16 text-[#003d4d]" />,
    image: "/kitchen.jpg", // Replace with actual image path
  },
];

const Services = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-gray-100 pt-10">
      <Link href="/" className="absolute top-8 left-8">
        <div className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
          <FaArrowLeft className="h-6 w-6" />
          <span className="font-medium">Back Home</span>
        </div>
      </Link>

      <div className="max-w-7xl mx-auto">
        <AnimatePresence>
          {isClient && (
            <>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold text-center bg-clip-text text-transparent bg-zinc-50"
              >
                Our Services
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 mt-4 max-w-2xl mx-auto text-center"
              >
                Comprehensive construction solutions tailored to your needs.
              </motion.p>
            </>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group bg-gray-800/50 rounded-md overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 pointer-events-none"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Services;
