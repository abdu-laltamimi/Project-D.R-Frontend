import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Phone, Check, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer/Footer";
import Carousel from "@/components/Utils/Carousel";
import Carousel2 from "@/components/Utils/Carousel2";

const BasementConversion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "RIBA Contracting transformed our cellar into a beautiful home office. The waterproofing and design were outstanding!",
      author: "Andy B.",
    },
  ];

  const sections = [
    {
      title: "What We Offer",
      content: (
        <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Bespoke basement conversions for additional bedrooms, offices, or recreational spaces.",
              "Structural modifications and waterproofing for lasting durability.",
              "Custom designs that maximise the functionality and aesthetic of your space.",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-3 bg-zinc-700/30 p-4 rounded-lg"
              >
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
            { icon: "✨", text: "Expertise: Specialised in converting underutilised spaces into stunning, practical areas." },
            { icon: "🎨", text: "Creativity: Custom designs to maximise space and functionality." },
            { icon: "📋", text: "Full Service: From planning permissions to the final handover, we manage it all." },
            { icon: "⚡", text: "Efficiency: Timely project delivery with minimal disruption." },
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
        <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {[
            "Step 1: Consultation - Understand your vision and requirements.",
            "Step 2: Design & Planning - Tailored designs and all necessary permissions.",
            "Step 3: Waterproofing - Coordinated with our specialist partners to protect the space from moisture.",
            "Step 4: Construction - Expertly convert the space with attention to detail.",
            "Step 5: Final Touches - Add high-quality finishes to complete the transformation.",
            "Step 6: Final Handover and Snagging - Deliver a flawless result and ensure your satisfaction.",
          ].map((step, i) => (
            <div
              key={i}
              className="flex items-center space-x-4 bg-zinc-700/30 p-4 rounded-lg"
            >
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
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {[
            "Unlock hidden potential in your home with additional functional space.",
            "Increase your property’s value and appeal.",
            "Expert craftsmanship ensures a durable and lasting transformation for your home.",
          ].map((benefit, i) => (
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Basement & Cellar Conversion</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Transform your basement or cellar into a versatile and valuable living space.
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
            <img src="/main-cellar.png" alt="Basement showcase" className="w-full h-full object-cover" />
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
          </div>
        </section>
        <section className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">Our Basement and Cellar Transformations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {["/main-cellar.png", "/second-cellar.png"].map((src, index) => (
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
                question: "Do I need planning permission for a basement or cellar conversion?",
                answer:
                  "Most conversions don’t require planning permission, but we confirm all requirements during the consultation process.",
              },
              {
                question: "Will the existing structure support the conversion without compromising integrity?",
                answer:
                  "The foundations and stability of your property is assessed. If needed, our structural engineer partners will recommend underpinning or reinforcement.",
              },
              {
                question: "Is there sufficient headroom, or will excavation be necessary?",
                answer:
                  "The current ceiling height will be assessed and determine if excavation or structural changes are required to meet building regulations.",
              },
              {
                question: "How is waterproofing managed for the space?",
                answer:
                  "We work with waterproofing specialists who apply proven techniques and materials to ensure your basement remains dry and secure.",
              },
              {
                question: "Does the conversion require a party wall agreement with neighbors?",
                answer:
                  "If your project impacts shared walls or foundations, we can help facilitate party wall agreements to ensure compliance and avoid disputes.",
              },
              {
                question: "What is the intended use of the converted space?",
                answer:
                  "Whether it’s a living area, gym, or home theater, we tailor designs to suit the space’s purpose and your lifestyle.",
              },
              {
                question: "How much does a basement conversion cost?",
                answer:
                  "Costs vary depending on the size and complexity of the project. We provide detailed quotes after an initial consultation.",
              },
              {
                question: "How will natural light and ventilation be introduced?",
                answer:
                  "We incorporate solutions like light wells, sun tunnels, and ventilation systems to enhance comfort and air quality.",
              },
              {
                question: "Can the converted space include plumbing, heating, and electrical systems?",
                answer:
                  "Yes, we upgrade systems as needed to ensure the space is fully functional and meets regulatory standards.",
              },
              {
                question: "How long does the conversion process take?",
                answer:
                  "Typically, basement conversions take 8–12 weeks, depending on the complexity of the project.",
              },
              {
                question: "Will the conversion add value to my property?",
                answer:
                  "Yes, converting a basement or cellar significantly increases property value by adding usable living space.",
              },
              {
                question: "Are there potential challenges specific to basements or cellars?",
                answer:
                  "Challenges such as damp issues or low ceilings are addressed through collaboration with waterproofing specialists and structural adjustments to optimise the space.",
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
      <Footer />
    </div>
  );
};

export default BasementConversion;
