import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Phone, Check, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer/Footer";
import Carousel from "@/components/Utils/Carousel";
import Carousel2 from "@/components/Utils/Carousel2";

const HouseExtensions = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "RIBA Contracting transformed our home with a stunning extension. The new space has made such a difference for our family.",
      author: "Ali & Nadia",
    },
    {
      quote: "The team handled everything from design to construction, making the process stress-free. Highly recommended!",
      author: "Maxwell",
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
            {["Single-storey and multi-storey extensions for additional living space.", "Custom designs that integrate seamlessly with your home’s existing architecture.", "Planning and project management from start to finish."].map((item, i) => (
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
            { icon: "✨", text: "Expertise: Experienced builders and architects dedicated to quality." },
            { icon: "⚡", text: "Efficiency: Projects completed on time and within budget." },
            { icon: "🎨", text: "Creativity: Tailored designs to maximise functionality and aesthetics." },
            { icon: "🔑", text: "Comprehensive Service: From planning permissions to final finishes." },
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
          {["Step 1: Initial Consultation - Discuss your vision and goals.", "Step 2: Design and Planning - Create detailed designs and handle permissions.", "Step 3: Construction - Build your extension with expert craftsmanship.", "Step 4: Finishing Touches - Complete the project with high-quality finishes.", "Step 5: Final Handover and Snagging - Ensure your satisfaction with the completed extension and address any final adjustments."].map((step, i) => (
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
          {["Increase your living space and improve your home’s functionality.", "Boost your property’s value and appeal.", "Sustainable building options for eco-conscious homeowners."].map((benefit, i) => (
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
            <h1 className="text-6xl md:text-7xl font-bold mb-6">House Extensions</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Expand your living space with bespoke house extension solutions tailored to your needs.
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
            <img src="/third-extension.png" alt="House extension showcase" className="w-full h-full object-cover" />
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
              className="p-8 rounded-3xl"
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
          <h2 className="text-4xl font-bold text-center mb-12">Our House Extension Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["/second-extension.png", "/main-extension.png" , "/third-extension.png"].map((src, index) => (
              <motion.div
                key={index}
                className="h-[200px] w-full overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={src} alt={`House Extension ${index + 1}`} className="w-full h-full object-cover" />
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
                question: "Do I need planning permission, or will this fall under permitted development rights?",
                answer: "It depends on the size and scope of the extension. We will guide you through whether your project requires planning permission or qualifies under permitted development rights."
              },
              {
                question: "How do I ensure the extension complies with UK building regulations?",
                answer: "We manage compliance with UK building regulations. Inspections and certifications are included in our process."
              },
              {
                question: "Do I need a party wall agreement with my neighbors?",
                answer: "If your project affects a shared boundary, a party wall agreement is required. We can help facilitate agreements to avoid disputes."
              },
              {
                question: "What is the cost of a house extension, and are there ways to save money?",
                answer: "Costs vary based on size and specifications. We provide detailed quotes and suggest ways to optimise costs without compromising on quality."
              },
              {
                question: "How can I ensure the extension blends with my existing home?",
                answer: "Our designs focus on seamless integration with your home’s architecture and style, ensuring a cohesive look."
              },
              {
                question: "Will the construction disrupt my daily life?",
                answer: "We aim to minimise disruption by planning efficiently. In most cases, you can remain in your home during construction."
              },
              {
                question: "How long will the construction take?",
                answer: "Timelines depend on the project’s complexity but typically range from 3 to 6 months. We provide a clear schedule upfront."
              },
              {
                question: "Can the extension include energy-efficient features?",
                answer: "Yes, we offer eco-friendly materials and energy-efficient solutions such as solar panels, insulation, and smart heating systems."
              },
              {
                question: "What should I include in the contract with the builder?",
                answer: "We recommend including timelines, costs, warranties, and detailed specifications to ensure transparency and accountability."
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

export default HouseExtensions;
