import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiChevronUp } from "react-icons/fi";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-neutral-200 last:border-b">
      <motion.button
        className="w-full py-8 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl md:text-3xl font-light">{question}</span>
        <motion.div
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 ${
            isOpen ? 'bg-black border-black' : 'border-neutral-200 group-hover:border-neutral-400'
          }`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronUp className={`text-xl transition-colors duration-300 ${
            isOpen ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-600'
          }`} />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-neutral-600 text-lg md:text-xl font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('subscribed');
  };

  const faqItems = [
    {
      question: "Can I reserve a table?",
      answer: "We operate on a walk-in basis at all locations, we aim to get people seated as quickly as possible."
    },
    {
      question: "Do you offer catering services?",
      answer: "Yes, we provide catering for events of all sizes. Contact our team for a custom quote."
    },
    {
      question: "What are your opening hours?",
      answer: "We're open Monday to Friday 8am-5pm, Saturday 9am-4pm and Sunday 9am-4pm."
    },
    {
      question: "Do you have vegetarian options?",
      answer: "We offer a wide range of vegetarian and vegan dishes on our menu."
    }
  ];

  return (
    <section className="bg-white text-black">
      {/* Newsletter Section */}
      <div className="py-32 max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Left Column */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32">
              <motion.p 
                className="text-sm tracking-widest text-neutral-500 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                NEWSLETTER
              </motion.p>
              <motion.h2 
                className="text-4xl md:text-5xl font-light mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Want to recieve new updates?
              </motion.h2>
              <motion.p 
                className="text-neutral-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Subscribe for updates on <span className="font-bold">seasonal menus</span>, <span className="font-bold">special events</span>, and <span className="font-bold">café culture stories</span>.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {status === 'subscribed' ? (
              <motion.div 
                className="h-full flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-light">Thank you for subscribing</h3>
                  <p className="text-neutral-600">Welcome to our community.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-neutral-300 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-neutral-900 transition-colors"
                    required
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="group flex items-center gap-2 text-sm tracking-wider"
                  // whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>SUBSCRIBE</span>
                  {/* <FiArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> */}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-32 bg-white ">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-6xl md:text-8xl text-center font-light mb-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Questions?
            </motion.h2>
            
            <div className="mb-24">
              {faqItems.map((item, index) => (
                <FAQItem 
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>

            {/* Contact Link */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-neutral-600 mb-2 text-lg">Still have questions?</p>
              <motion.a
                href="mailto:cafevalentinobramhall@gmail.com"
                className="text-lg font-light text-black border-b-2 border-transparent hover:border-black transition-all duration-300"
                transition={{ duration: 0.3 }}
              >
                Reach out to us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
