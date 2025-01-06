import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Phone, Check, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer/Footer";
import Carousel from "@/components/Utils/Carousel";
import Carousel2 from "@/components/Utils/Carousel2";

const CommercialConversions = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "Our new restaurant conversion exceeded our expectations. The space is now fully functional and customer-friendly, perfectly tailored to our business needs!",
      author: "Amin",
    },
    {
      quote: "The office conversion was a game-changer for our business. The new layout has increased productivity and efficiency, allowing us to expand our operations seamlessly.",
      author: "Megan",
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
            {["Office conversions for maximised productivity and modern workspaces.", "Retail space redesigns for improved functionality and customer experience.", "Transformations of warehouses or industrial spaces into versatile, high-performing areas."].map((item, i) => (
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
            { icon: "✨", text: "Expertise: Skilled in transforming commercial properties to meet unique business goals." },
            { icon: "✍️", text: "Tailored Designs: Customised solutions that align with your brand and operational needs." },
            { icon: "✅", text: "Full Compliance: Ensuring adherence to all building and safety regulations." },
            { icon: "⏳", text: "Efficiency: Delivering projects on time and within budget." },
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
          {["Step 1: Consultation - Understand your business requirements and vision.", "Step 2: Design & Planning - Create tailored designs and secure necessary permissions.", "Step 3: Construction - Execute the conversion with precision and professionalism.", "Step 4: Final Touches - Ensure every detail aligns with your business objectives.", "Step 5: Handover - Deliver a fully functional and compliant commercial space."].map((step, i) => (
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
          {["Maximise the potential of your commercial property.", "Enhance operational efficiency with optimised layouts.", "Boost your brand image with a modern and professional environment."].map((benefit, i) => (
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
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Commercial Conversions</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Upgrade your commercial spaces to meet your business needs with innovative and efficient solutions.
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
            <img src="/commercial.png" alt="Commercial showcase" className="w-full h-full object-cover" />
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
        {/* <section className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">Our Commercial Transformations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["/commercial.png", "/second-commercial.png", "/third-commercial.png"].map((src, index) => (
              <motion.div
                key={index}
                className="h-[200px] w-full overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={src} alt={`Commercial Transformation ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </section> */}

        <Carousel2 />

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Do I need planning permission for a commercial conversion?",
                answer:
                  "It depends on the nature of the conversion. We assist in determining requirements and obtaining necessary permissions.",
              },
              {
                question: "Does the project require a change of use application?",
                answer:
                  "In cases of converting from one commercial use to another or to residential, a change of use application may be required. We guide you through this process.",
              },
              {
                question: "How will the conversion comply with building regulations?",
                answer:
                  "We ensure compliance with all UK building regulations, including fire safety, accessibility, ventilation, and insulation.",
              },
              {
                question: "Are there zoning laws or local restrictions to consider?",
                answer:
                  "We evaluate zoning laws and local authority guidelines to ensure the project aligns with all legal requirements.",
              },
              {
                question: "Can you help design a space that aligns with our brand?",
                answer:
                  "Yes, our tailored designs focus on integrating your brand identity into the converted space.",
              },
              {
                question: "How long does a commercial conversion take?",
                answer:
                  "Timelines vary depending on the scope, but we work efficiently to meet agreed deadlines.",
              },
              {
                question: "Will existing utilities support the new purpose?",
                answer:
                  "We assess and upgrade electrical, plumbing, and drainage systems to meet the demands of the new use.",
              },
              {
                question: "What fire safety measures are required?",
                answer:
                  "Fire alarms, sprinklers, and emergency exits are planned to comply with regulations and ensure occupant safety.",
              },
              {
                question: "How will disruption to neighboring properties be managed?",
                answer:
                  "We take measures to minimise noise, dust, and disruptions to neighboring businesses or residents during construction.",
              },
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

export default CommercialConversions;
