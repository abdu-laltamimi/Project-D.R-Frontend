import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer/Footer";
import { ChevronRight, ArrowRight } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
const AboutUs = () => {
  const services = [
    {
      title: "Design & Build",
      description: "End-to-end project management and execution for new constructions.",
      link: "/services/design-build-services"
    },
    {
      title: "Commercial",
      description: "Specialized solutions for offices, retail, and industrial spaces.",
      link: "/services/commercial-conversions"
    },
    {
      title: "Residential",
      description: "High-end residential constructions and renovations.",
      link: "/services/house-renovations"
    },
    {
      title: "House Extensions",
      description: "Professional oversight ensuring timely and efficient delivery.",
      link: "/services/house-extensions"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      
      {/* Hero Section - Minimalist Professional Approach */}
      <section className="relative h-screen max-h-[800px] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900/80" />
          <img
            src="/modern-building.jpeg"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative h-screen w-full bg-cover bg-center" 
             style={{ 
               backgroundImage: `url('/modern-building.jpeg')`,
               backgroundAttachment: 'fixed', 
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full text-white px-6 md:px-16 place-content-center">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col space-y-2">
                <h3 className="text-xs md:text-sm font-light uppercase tracking-wide text-left"></h3>
                <h1 className="text-4xl md:text-5xl font-extrabold text-left md:text-7xl">
                  RIBA
                  <br />
                  <span className="inline-block relative">
                    Contracting.
                  </span>
                </h1>
                <p className="mt-2 text-sm md:text-lg font-light text-left md:text-2xl max-w-2xl">
                  Building Excellence Across The North West
                </p>
              </div>
              <div className="mt-6 md:mt-8 flex w-1/3 max-w-md flex-col gap-4">
                {/* <Link href="/projects">
                  <motion.div 
                    className="relative hover:text-zinc-300 flex items-center text-left justify-start px-4 py-3 text-sm md:text-lg md:text-xl font-bold bg-transparent border-white rounded cursor-pointer"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    Our Projects
                    <FiArrowRight className="ml-2" />
                  </motion.div>
                </Link> */}
                <Link href="/quote">
                  <motion.div 
                    className="group flex items-center justify-between px-4 w-[200px] py-3 text-sm md:text-base font-bold text-black bg-neutral-200 rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white active:bg-neutral-700 cursor-pointer"
                    whileHover="hover"s
                    animate="rest"
                      initial="rest"
                    >
                    <span>Get A Free Quote</span>
                    <FiArrowRight className="ml-2" />
                  </motion.div>
                </Link>
              </div>
            </div>
            {/* <div className="flex flex-col justify-center self-start md:self-center mt-6 md:mt-0 text-center md:text-right">
              <p className="text-[10px] sm:text-xs md:text-sm uppercase font-light text-center md:text-right pr-0 md:pr-5">- Since 2020</p>
              <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                Design. <br className="hidden sm:block" />
                Build. <br className="hidden sm:block" />
                Refurb.
              </h3>
            </div> */}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-semibold text-white mb-8"
              >
                Crafting Excellence in Construction
              </motion.h2>
              <div className="prose prose-invert">
                <p className="text-lg text-zinc-300 leading-relaxed">
                  For over two decades, RIBA Contracting has been at the forefront of innovative construction solutions, 
                  delivering projects that define the landscape of the North West. Our commitment to excellence and 
                  precision has earned us recognition as an industry leader.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "20+", label: "Years of Excellence" },
                { number: "500+", label: "Projects Delivered" },
                // { number: "98%", label: "Client Satisfaction" },
                { number: "£150M+", label: "Combined Project Value" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 p-6"
                >
                  <div className="text-3xl font-light text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-zinc-800/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <h2 className="text-4xl font-semibold text-white mb-6">Our Expertise</h2>
              <div className="h-px w-16 bg-zinc-700" />
            </div>
            <p className="text-zinc-400 max-w-xl mt-6 lg:mt-0">
              Comprehensive construction and management services tailored to meet the 
              highest industry standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-700">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 p-8 group"
              >
                <h3 className="text-xl text-white mb-4">{service.title}</h3>
                <p className="text-zinc-400 mb-8 min-h-[60px]">{service.description}</p>
                <a 
                  href={service.link}
                  className="inline-flex items-center text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-semibold text-white mb-12">Our Commitment</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Excellence", text: "Uncompromising standards in every project we undertake" },
                { title: "Innovation", text: "Forward-thinking solutions for modern construction challenges" },
                { title: "Integrity", text: "Transparent practices and honest client relationships" }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg text-white mb-4">{value.title}</h3>
                  <p className="text-zinc-400">{value.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-zinc-800/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-semibold text-white mb-8">Begin Your Project</h2>
            <p className="text-zinc-400 mb-12">
              Let's discuss how we can bring your construction vision to life with 
              precision and excellence.
            </p>
            <motion.a
              href="/quote"
              className="inline-flex items-center px-8 py-3 border border-zinc-50 rounded-full text-zinc-100
                       hover:bg-zinc-50 hover:text-zinc-900 font-semibold transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              Schedule A Consultation
              {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;