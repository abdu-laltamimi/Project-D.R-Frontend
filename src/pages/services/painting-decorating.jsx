import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Phone, Check, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer/Footer";
import Carousel from "@/components/Utils/Carousel";
import Carousel2 from "@/components/Utils/Carousel2";

const PaintingDecor = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "RIBA Contracting brought life to our dull walls and gave our home a fresh, modern look. Their designers understood exactly what we needed.",
      author: "Sarah",
    },
    {
      quote: "The attention to detail in both the painting and decorating was outstanding. Highly recommend their services!",
      author: "Frank",
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
            {["Professional painting services for interiors and exteriors.", "Expert decorating to enhance every room.", "Tailored interior design solutions to suit your taste and lifestyle."].map((item, i) => (
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
      title: "Why Choose Us",
      content: (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[
            { icon: "✨", text: "Expertise: Years of experience delivering stunning transformations." },
            { icon: "⚡", text: "Efficiency: Fast turnaround times with impeccable results." },
            { icon: "✅", text: "Comprehensive Service: Painting, decorating, and interior design all under one roof." },
            { icon: "🏆", text: "Attention to Detail: Meticulous craftsmanship in every project." },
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
          {["Step 1: Consultation - Understand your needs and vision.", "Step 2: Interior Design - Adding the finishing touches.", "Step 3: Colour and Design Selection - Tailored palettes and styles.", "Step 4: Painting and Decorating - Expert execution.", "Step 5: Final Review - Ensuring your satisfaction."].map((step, i) => (
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
          {["Beautifully designed spaces that reflect your style.", "Long-lasting finishes and high-quality results.", "Increased property value and appeal."].map((benefit, i) => (
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
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Painting, Decorating, and Interior Design</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Transform your space with expert painting, flawless decorating, and bespoke interior design service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-zinc-700/50 backdrop-blur border border-zinc-50 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-zinc-50 hover:bg-zinc-50 hover:border-zinc-50 hover:text-zinc-900 transition-colors"
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
            <img src="/main-decor.png" alt="Painting showcase" className="w-full h-full object-cover" />
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
          <h2 className="text-4xl font-bold text-center mb-12">Our Painting and Decorating Transformations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {["/decor.png", "/main-decor.png"].map((src, index) => (
              <motion.div
                key={index}
                className="h-[200px] w-full overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={src} alt={`Painting Transformation ${index + 1}`} className="w-full h-full object-cover" />
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
                question: "What kind of painting and decorating services do you offer?",
                answer: "We provide both interior and exterior painting, along with decorating services such as feature walls, resin flooring, and other bespoke decorative elements to elevate your space."
              },
              {
                question: "Can you help me choose colours and designs?",
                answer: "Yes, our interior designers will work with you to select colours and designs that complement your space."
              },
              {
                question: "How much will it cost, and how can I stick to a budget?",
                answer: "Costs vary depending on the project’s specifics, but we provide free, detailed quotes and tailored plans to meet your budget."
              },
              {
                question: "What design styles or colour schemes will suit my home?",
                answer: "Our team considers your home’s architecture and personal preferences to recommend timeless and trend-inspired styles."
              },
              {
                question: "How do I balance trends with timeless elements?",
                answer: "We focus on blending modern trends with classic designs to create a look that remains stylish over time."
              },
              {
                question: "How do I ensure durability and practicality in the design?",
                answer: "We prioritise high-quality materials and practical layouts to ensure long-lasting and functional results."
              },
              {
                question: "Will the project disrupt my daily routine?",
                answer: "We plan projects carefully to minimise disruption, and our team works efficiently to complete the job on time."
              },
              {
                question: "How long will the project take?",
                answer: "Timelines depend on the scope, but we aim to complete projects as quickly as possible without compromising quality."
              },
              {
                question: "Should I hire professionals or attempt DIY?",
                answer: "While some tasks may be manageable on your own, hiring professionals ensures a flawless finish and saves time and effort."
              },
              {
                question: "How do I maintain the design and plan for future updates?",
                answer: "We offer advice on maintaining your new look and provide solutions that accommodate potential future changes."
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

export default PaintingDecor;
