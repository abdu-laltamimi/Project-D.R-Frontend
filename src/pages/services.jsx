import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import { FinalCTA } from "@/components/final-cta/FinalCTA";
import Navbar from "@/components/NavBar";

const services = [
  {
    title: "House Renovations",
    description: "Complete renovations to upgrade and modernize your property with precision and care.",
    image: "/11.png",
    link: "/services/house-renovations",
  },
  {
    title: "Bathroom Refurb",
    description: "Complete renovations to upgrade and modernize your property with precision and care.",
    image: "/main-bathroom.png",
    link: "/services/bathroom-refurb",
  },
  {
    title: "Kitchen Refurb",
    description: "Tailored kitchen design and installation for modern, functional, and beautiful spaces",
    image: "/kitchen.jpg",
    link: "/services/kitchen-refurbishment",
  },
  {
    title: "Painting & Decorating",
    description: "Professional interior and exterior finishes to refresh and enhance your property",
    image: "/decor.png",
    link: "/services/painting-decorating",
  },
  {
    title: "House Extensions",
    description: "Expertly designed extensions that seamlessly integrate with your property",
    image: "/house-extension.png",
    link: "/services/house-extensions",
  },
  {
    title: "Loft & Garage Conversions",
    description: "Maximise unused spaces with tailored designs for functional living",
    image: "/garage.png",
    link: "/services/loft-garage-conversions",
  },
  {
    title: "Basement & Cellar Conversions",
    description: "Unlock potential with basement transformations tailored to your needs",
    image: "/basement-conversion.png",
    link: "/services/basement-cellar-conversions",
  },
  {
    title: "Commercial Conversions",
    description: "Transform commercial spaces for any purpose with expert precision",
    image: "/commercial.png",
    link: "/services/commercial-conversions",
  },
  {
    title: "On-Demand Maintenance",
    description: "Reliable repairs and property upkeep for landlords and investors – hassle-free.",
    image: "/on-demand-maintenance.png",
    link: "/services/on-demand-maintenance",
  },
  {
    title: "Design & Build Services",
    description: "A full-service approach: design, approvals, and build – all under one roof.",
    image: "/design2.png",
    link: "/services/design-build-services",
  },
  {
    title: "Investor-Focused Services",
    description: "Tailored support for investors to maximise property potential.",
    image: "/investor-focused.png",
    link: "/services/investor-focused-services",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including residential construction, industrial projects, renovations, house extensions, and kitchen refurbishments.",
  },
  {
    question: "Do you provide free quotes?",
    answer: "Yes, we provide free quotes for all our services. Contact us today to discuss your project.",
  },
  {
    question: "Are your services insured?",
    answer: "Yes, all our services are fully insured to provide you with peace of mind.",
  },
  {
    question: "How long does a typical project take?",
    answer: "The duration of a project depends on its scope and complexity. We ensure timely completion without compromising on quality.",
  },
];

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-gray-100 pt-32">
        {/* <Link href="/" className="absolute top-8 left-8">
        <div className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
          <FaArrowLeft className="h-6 w-6" />
          <span className="font-medium">Back Home</span>
        </div>
      </Link> */}

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Explore Our Services
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Discover a variety of expert services tailored to meet your needs.
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group bg-gray-800/50 rounded-md overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link href={service.link}>
                  <button className="mt-4 px-6 py-2 bg-zinc-500 hover:bg-zinc-600 text-white rounded-lg transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <FinalCTA />
      <Footer />
    </div>
    </div>
  );
}

export default Services;
