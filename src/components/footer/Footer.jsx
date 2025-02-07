import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiMail } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Main Content */}
        <div className="py-32">
          {/* Top Section - Large Text */}
          <motion.div 
            className="mb-32 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Come visit us at our café in the heart of Bramhall.
            </h2>
          </motion.div>

          {/* Bottom Section - Grid */}
          <div className="grid md:grid-cols-12 gap-16">
            {/* Location & Hours */}
            <motion.div 
              className="md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-sm tracking-widest text-neutral-400 mb-6">VISIT US</h3>
              <div className="space-y-6 text-lg font-light">
                <div>
                  <p>22 Bramhall Ln S</p>
                  <p>Stockport</p>
                  <p>SK7 1AB</p>
                </div>
                <div>
                  <p>Mon - Fri: 8am - 5pm</p>
                  <p>Sat: 9am - 5pm</p>
                  <p>Sun: 9am - 4pm</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-sm tracking-widest text-neutral-400 mb-6">CONNECT</h3>
              <div className="space-y-4">
                <motion.a 
                  href="https://www.instagram.com/_cafevalentino/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-lg font-light hover:text-neutral-400 transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  Instagram
                </motion.a>
                <motion.a 
                  href="https://www.tiktok.com/@_cafevalentino" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-lg font-light hover:text-neutral-400 transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  TikTok
                </motion.a>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div 
              className="md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-sm tracking-widest text-neutral-400 mb-6">NEWSLETTER</h3>
              <p className="text-lg font-light mb-6">
                Subscribe for café updates and stories.
              </p>
              <form className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-neutral-800 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors"
                />
              </form>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-400 text-center">
            © {new Date().getFullYear()} Café Valentino. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;