import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Services2 = () => {
  return (
    <section className="relative py-32 bg-[#0C0C0C] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hand.jpeg"
          alt="Food background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0C0C0C]" />
      </div>
      
      <div className="relative z-20 max-w-[1400px] mx-auto px-6">
        {/* Header Text */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-7xl md:text-9xl font-extralight text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to
          </motion.h2>
          <motion.h2 
            className="text-7xl md:text-9xl font-light text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            order?
          </motion.h2>
        </motion.div>

        {/* Delivery Service Buttons */}
        <motion.div 
          className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Uber Eats */}
          <Link href="https://www.ubereats.com/gb/store/cafe-valentino/6G7hbfk8WqOdVI3Dnvtopg?srsltid=AfmBOoqR1LQG3cisCaP_b5hapGH748bXTx3M7xzm5XfeKLFqfW7ppXnB" target="_blank" rel="noopener noreferrer">
            <motion.div 
              className="group relative overflow-hidden bg-white text-black p-8 rounded-sm cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-light">Uber Eats</h3>
                </div>
                <FiArrowRight className="text-2xl transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>

          {/* Just Eat */}
          <Link href="https://www.just-eat.co.uk/restaurants-cafe-valentino-stockport/menu" target="_blank" rel="noopener noreferrer">
            <motion.div 
              className="group relative overflow-hidden border border-neutral-800 text-white p-8 rounded-sm cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-light">Just Eat</h3>
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
