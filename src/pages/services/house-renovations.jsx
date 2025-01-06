import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Phone, Star, Check, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/footer/Footer";
import Carousel from "@/components/Utils/Carousel";
import Carousel2 from "@/components/Utils/Carousel2";
const HouseRenovations = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "RIBA Contracting exceeded our expectations. Our home feels brand new!",
      author: "Lara & Mohamed",
    },
    {
      quote: "From start to finish, the process was smooth and professional. Highly recommended!",
      author: "Sarah",
    },
    {
      quote: "The team was professional and delivered excellent results. We love our new space!",
      author: "Belal",
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
            {["Full-scale renovations to transform your home.", "Room upgrades tailored to your style.", "Bespoke solutions designed for your needs."].map((item, i) => (
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
      title: "Why Choose Us for House Renovations",
      content: (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[
            { icon: "✨", text: "Expertise: Skilled professionals with years of experience." },
            { icon: "🛠️", text: "Quality Materials: We use only the best for long-lasting results." },
            { icon: "🤝", text: "Commitment: Dedicated to delivering excellence." }
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
          {["Consultation - Understand your needs and goals.", "Design - Custom plans to suit your home.", "Renovation - Execution with professionalism.", "Final Review - Perfecting every detail."].map((step, i) => (
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
          {["Transform your space to suit your lifestyle.", "Increase your property value.", "Enjoy a home that reflects your unique needs."].map((benefit, i) => (
            <div key={i} className="flex items-start space-x-3 bg-zinc-700/30 p-4 rounded-lg">
              <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
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
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              House Renovations
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Complete renovations to upgrade and modernise your property with precision and care.
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
            <img 
              src="/11.png" 
              alt="Renovation showcase"
              className="w-full h-full object-cover"
            />
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
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
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
            className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-3xl"
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

      <section className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">Our House Renovations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {["/main-reno.png", "/second-reno.png"].map((src, index) => (
              <motion.div
                key={index}
                className="h-[200px] w-full overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={src} alt={`Bathroom Transformation ${index + 1}`} className="w-full h-full object-cover" />
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
                question: "How long does a home renovation take?",
                answer: "Timelines vary based on project size, but most renovations are completed within 6-12 weeks. We will provide a clear schedule during the planning phase."
              },
              {
                question: "What about legal permissions and planning?",
                answer: "We partner with experienced architects and engineers to handle planning permissions, building regulations, and all legal requirements. You can rest assured that all work will comply with UK standards."
              },
              {
                question: "What is the cost of a renovation?",
                answer: "We provide a free, detailed quote tailored to your project during the consultation. Our solutions are designed to meet your budget without compromising on quality."
              },
              {
                question: "Do you offer a warranty for your work?",
                answer: "Yes, we offer a one-year warranty for any defects related to our work, subject to terms and conditions. This gives you peace of mind knowing we stand by the quality of our work."
              },
              {
                question: "How do you ensure health and safety compliance?",
                answer: "Health and safety are a top priority. We adhere strictly to CDM (Construction Design and Management) regulations and employ best practices to ensure a safe working environment for our team and your property."
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

export default HouseRenovations;
