import React, { useState } from "react";
import { motion } from "framer-motion";
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin'],
  display: 'swap',
});

const NewsletterCTA = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch("/api/sendEmail", { // Calls your backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('submitted');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-[#FFFAFA] text-black">
      <div className="py-32 max-w-[1600px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32">
              <motion.h2 
                className={`${nunito.className} text-4xl md:text-5xl text-neutral-700 mb-6 font-normal`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-[#6CA3A5] font-semibold">Interested</span> in getting to <span className="text-[#C8A9B9] font-semibold">know more?</span>             
              </motion.h2>
              <motion.p 
                className="text-neutral-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We're committed to providing the best post-natal care for you and your family. Fill out the form, and let’s connect to explore how our services can support your needs.
              </motion.p>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {status === 'submitted' ? (
              <motion.div 
                className="h-full flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-light">Thank you for your interest in our services!</h3>
                  <p className="text-neutral-600">We'll get back to you as soon as possible.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div className="space-y-8">
                  <motion.div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-neutral-300 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-neutral-900 transition-colors"
                      required
                    />
                  </motion.div>
                  <motion.div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-neutral-300 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-neutral-900 transition-colors"
                      required
                    />
                  </motion.div>
                  <motion.div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-transparent border-b border-neutral-300 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-neutral-900 transition-colors"
                      required
                    />
                  </motion.div>
                  <motion.div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full bg-transparent border-b border-neutral-300 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                      rows="3"
                      required
                    />
                  </motion.div>
                </motion.div>
                <motion.button
                  type="submit"
                  className="group flex items-center gap-2 text-sm tracking-wider bg-[#003845] hover:bg-[#6CA3A5] hover:text-[#003845] font-normal transition-all duration-300 text-white px-4 py-2 rounded-full"
                >
                  {status === 'loading' ? "SENDING..." : "SUBMIT"}
                </motion.button>
                {status === 'error' && (
                  <p className="text-red-600 mt-2">Failed to send message. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
