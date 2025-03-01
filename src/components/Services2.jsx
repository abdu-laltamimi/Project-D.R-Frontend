import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Services2 = () => {
  return (
    <section className="relative py-32 rounded-lg md:rounded-3xl mx-0 sm:mx-0 md:mx-2 lg:mx-7 bg-[#0C0C0C] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta.jpeg"
          alt="Food background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0C0C0C]" />
      </div>
      
      <div className="relative z-20 max-w-[1400px] mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-extralight text-white mb-2 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Start Your
          </motion.h2>
          <motion.h2 
            className="text-6xl md:text-8xl font-light text-[#c8a9b9] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Journey?
          </motion.h2>
        </motion.div>

        <motion.div 
          className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/" target="_blank" rel="noopener noreferrer">
            <motion.div 
              className="group relative overflow-hidden bg-white text-black p-8 rounded-sm cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-light">Book a Midwife</h3>
                </div>
                <FiArrowRight className="text-2xl transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>

          <Link href="/" target="_blank" rel="noopener noreferrer">
            <motion.div 
              className="group relative overflow-hidden border border-neutral-800 text-white p-8 rounded-sm cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-light">Book a Call</h3>
                </div>
                <FiArrowRight className="text-2xl transform group-hover:translate-x-1  transition-transform" />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services2;
