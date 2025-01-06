import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Phone, Check, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer/Footer";
import Carousel from "@/components/Utils/Carousel";
import Carousel2 from "@/components/Utils/Carousel2";

const KitchenRefurbishment = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "RIBA Contracting gave our kitchen a completely new look. It’s beautiful and highly functional now!",
      author: "Paula",
    },
    {
      quote: "The team delivered exactly what we envisioned, and the process was smooth from start to finish.",
      author: "Dalia",
    },
  ];

  const sections = [
    {
      title: "What We Offer",
      content: (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Full kitchen renovations tailored to your needs and preferences.", "Modern designs with maximum functionality.", "High-quality fittings and appliances for a durable result."].map((item, i) => (
              <div key={i} className="flex items-start space-x-3 bg-zinc-700/30 p-4 rounded-lg">
                <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ),
    },
    {
      title: "Why Choose Us for Your Kitchen Refurbishment",
      content: (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[
            { icon: "✨", text: "Expertise: Specialists in creating stunning, functional kitchen spaces." },
            { icon: "⚡", text: "Speed and Efficiency: Quick project turnaround with minimal disruption." },
            { icon: "✅", text: "Quality Assurance: We use premium materials and trusted suppliers." },
            { icon: "🏆", text: "Commitment: Dedicated to delivering a flawless finish." },
          ].map((item, i) => (
            <div key={i} className="bg-zinc-700/30 p-4 rounded-lg">
              <span className="text-2xl mr-2">{item.icon}</span>
              <span className="text-gray-200">{item.text}</span>
            </div>
          ))}
        </motion.div>
      ),
    },
    {
      title: "Our Step-by-Step Process",
      content: (
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {["Step 1: Consultation - Understand your needs and lifestyle.", "Step 2: Design - Bespoke plans to optimise your kitchen layout.", "Step 3: Installation - Professional and efficient fitting.", "Step 4: Final Review - Ensuring your satisfaction."].map((step, i) => (
            <div key={i} className="flex items-center space-x-4 bg-zinc-700/30 p-4 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                {i + 1}
              </div>
              <span className="text-gray-200">{step}</span>
            </div>
          ))}
        </motion.div>
      ),
    },
    {
      title: "Your Benefits",
      content: (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {["A kitchen tailored to your style and daily needs.", "Increase your home’s value and functionality.", "Durable and stylish designs for lasting appeal."].map((benefit, i) => (
            <div key={i} className="flex items-start space-x-3 bg-zinc-700/30 p-4 rounded-lg">
              <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <span className="text-gray-200">{benefit}</span>
            </div>
          ))}
        </motion.div>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" />

        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Kitchen Refurbishment</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Expertly crafted kitchen transformations designed for style, functionality, and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-zinc-700/50 backdrop-blur border border-zinc-50 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-zinc-50 hover:border-zinc-50 hover:text-zinc-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Free Consultation</span>
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-zinc-700/50 backdrop-blur rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-zinc-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <Carousel />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <motion.div
            className="h-[500px] w-full overflow-hidden rounded-xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/main-kitchen.png" alt="Kitchen showcase" className="w-full h-full object-cover" />
          </motion.div>

          {/* Right Column - Accordion */}
          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden bg-zinc-800/50 backdrop-blur border border-zinc-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-zinc-700/50 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1 }}
                      className="px-6 py-4"
                    >
                      {section.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <section className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className=" p-8 rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={testimonialIndex}
            >
              <blockquote className="text-lg text-gray-300 italic mb-4">
                "{testimonials[testimonialIndex].quote}"
              </blockquote>
              <p className="text-right text-gray-400">– {testimonials[testimonialIndex].author}</p>
            </motion.div>

            <div className="flex justify-center mt-6 space-x-4">
              <button
                className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                onClick={handlePrevTestimonial}
              >
                <ArrowLeft className="w-6 h-6 text-gray-400" />
              </button>
              <button
                className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                onClick={handleNextTestimonial}
              >
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">Our Kitchen Transformations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {["/stairs.jpg", "/main-kitchen.png"].map((src, index) => (
              <motion.div
                key={index}
                className="h-[200px] w-full overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={src} alt={`Kitchen Transformation ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </section>

        <Carousel2 />

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How can I make the most of the space available, and will the new layout improve functionality and workflow?",
                answer: "Our designs prioritise efficiency and functionality, optimising space to suit your lifestyle and incorporating industry standards like the kitchen triangle."
              },
              {
                question: "What is the cost of a complete kitchen refurbishment, and are there ways to reduce costs without compromising on quality?",
                answer: "Costs vary based on size and specifications, but we provide a detailed, free quote during your consultation. We also offer tailored solutions to meet your budget while maintaining high-quality standards."
              },
              {
                question: "What are the best materials for countertops, cabinetry, and flooring, and are eco-friendly options available?",
                answer: "We recommend durable, stylish materials like quartz countertops and solid wood or laminate cabinetry. Sustainable options are available for those looking to reduce their environmental impact."
              },
              {
                question: "Should I replace my current appliances, and are smart kitchen technologies worth investing in?",
                answer: "We assess your existing appliances and recommend upgrades if they’re outdated or inefficient. Smart technology can enhance functionality and convenience, making it a worthwhile investment."
              },
              {
                question: "How can I increase storage space effectively, and can the design include features for easier accessibility?",
                answer: "We incorporate innovative storage solutions like pull-out drawers and corner units to maximise space. Accessibility features like adjustable shelving can also be included."
              },
              {
                question: "How long will the refurbishment take, and will I still be able to use the kitchen during the project?",
                answer: "Most projects are completed within 3-5 weeks, and we plan phases to ensure you have access to essential facilities whenever possible."
              },
              {
                question: "Should I hire an interior designer, or is a contractor enough?",
                answer: "Our team includes designers and contractors to cover all aspects of your project."
              },
              {
                question: "Do contractors provide warranties for their work and materials?",
                answer: "Yes, we offer warranties on both our work and materials for your peace of mind."
              },
              {
                question: "Are there specific regulations or permits required for the refurbishment, and will the current systems handle the new design?",
                answer: "We ensure all work complies with building codes and manage any necessary permits. Electrical and plumbing systems are assessed, and upgrades are recommended if needed for safety and functionality."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden bg-zinc-800/50 backdrop-blur border border-zinc-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="px-6 py-4">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default KitchenRefurbishment;
