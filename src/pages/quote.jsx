import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer/Footer";

const Quote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/70 to-zinc-900/30" />
          <img
            src="/modern-building2.jpeg"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-semibold text-5xl lg:text-6xl text-white tracking-tight mb-6">
              Request A Consultation
            </h1>
            {/* <div className="h-px w-24 bg-zinc-500 mb-8" /> */}
            <p className="text-xl text-zinc-300 max-w-xl">
              Let's discuss your project requirements and create a tailored solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-zinc-800 px-4 py-3 text-white 
                               focus:border-zinc-600 focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-zinc-800 px-4 py-3 text-white 
                               focus:border-zinc-600 focus:outline-none transition-colors"
                      placeholder="+44 123 456 7890"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-zinc-800 px-4 py-3 text-white 
                             focus:border-zinc-600 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-zinc-800 px-4 py-3 text-white 
                             focus:border-zinc-600 focus:outline-none transition-colors"
                    required
                  >
                    <option value="" className="bg-zinc-900">Select Project Type</option>
                    <option value="basement-cellar-conversions" className="bg-zinc-900">Basement & Cellar Conversions</option>
                    <option value="bathroom-refurbishment" className="bg-zinc-900">Bathroom Refurbishment</option>
                    <option value="commercial-conversions" className="bg-zinc-900">Commercial Conversions</option>
                    <option value="design-build" className="bg-zinc-900">Design & Build</option>
                    <option value="house-extensions" className="bg-zinc-900">House Extensions</option>
                    <option value="house-renovations" className="bg-zinc-900">House Renovations</option>
                    <option value="investor-focused-services" className="bg-zinc-900">Investor Focused Services</option>
                    <option value="kitchen-refurbishment" className="bg-zinc-900">Kitchen Refurbishment</option>
                    <option value="loft-garage-conversions" className="bg-zinc-900">Loft & Garage Conversions</option>
                    <option value="on-demand-maintenance" className="bg-zinc-900">On-Demand Maintenance</option>
                    <option value="painting-decorating" className="bg-zinc-900">Painting & Decorating</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full bg-transparent border border-zinc-800 px-4 py-3 text-white 
                             focus:border-zinc-600 focus:outline-none transition-colors resize-none"
                    placeholder="Please describe your project requirements..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full border border-zinc-600 text-white py-4 px-8
                           hover:bg-zinc-800 transition-colors duration-300 group"
                  whileHover={{ scale: 1.01 }}
                >
                  <span className="flex items-center justify-center">
                    Submit Request
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - Information */}
            <div className="lg:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-2xl font-light text-white mb-6">Why Choose RIBA</h3>
                  <div className="space-y-8">
                    {[
                      {
                        title: "Expert Consultation",
                        description: "Benefit from our decades of industry experience and technical expertise."
                      },
                      {
                        title: "Tailored Solutions",
                        description: "Custom approaches designed specifically for your project requirements."
                      },
                      {
                        title: "Quality Assurance",
                        description: "Rigorous quality control processes ensuring exceptional results."
                      }
                    ].map((item, index) => (
                      <div key={index} className="border-l-2 border-zinc-800 pl-6">
                        <h4 className="text-lg text-white mb-2">{item.title}</h4>
                        <p className="text-zinc-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-800/30 p-8">
                  <h3 className="text-xl font-light text-white mb-4">Contact Information</h3>
                  <div className="space-y-4 text-zinc-400">
                    <p>Email: contact@ribacontracting.com</p>
                    <p>Phone: +44 (0) 123 456 7890</p>
                    <p>Address: North West, United Kingdom</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;