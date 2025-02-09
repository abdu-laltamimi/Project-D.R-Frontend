import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCoffee, FiHeart, FiUsers } from "react-icons/fi";

const AboutSection = () => {
  const menu = {
    drinks: "/drinkMenu.pdf",
    food: "/foodMenu.pdf",
  }
  return (
    <section className="py-32 bg-[#FFFAFA] text-black">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            What We <span className="text-[#c8a9b9] font-extralight">Promise</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-16 mb-32">
          {/* Left Column */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32">
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-8">
              Private Midwife and Post-natal care at your doorstep
              </p>
              <div className="h-[1px] w-16 bg-neutral-300" />
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="md:col-span-7 space-y-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Service Items */}
            <div className="grid gap-12">
              <motion.div 
                className="group flex items-center justify-between cursor-pointer border-b border-neutral-200 pb-8"
                whileHover={{ x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="text-2xl font-normal mb-2">Midwife at Your Doorstep</h3>
                  <p className="text-neutral-600">Personalized home visits and dedicated support throughout your pregnancy journey</p>
                </div>
                <FiArrowRight className="text-2xl transform group-hover:translate-x-2 transition-transform" />
              </motion.div>

              <motion.div 
                className="group flex items-center justify-between cursor-pointer border-b border-neutral-200 pb-8"
                whileHover={{ x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="text-2xl font-normal mb-2">Feeding, Bathing & Sleep Support</h3>
                  <p className="text-neutral-600">Expert guidance for essential newborn care and establishing healthy routines</p>
                </div>
                <FiArrowRight className="text-2xl transform group-hover:translate-x-2 transition-transform" />
              </motion.div>

              <motion.div 
                className="group flex items-center justify-between cursor-pointer border-b border-neutral-200 pb-8"
                whileHover={{ x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="text-2xl font-normal mb-2">Mother's Wellbeing</h3>
                  <p className="text-neutral-600">Holistic support for physical and emotional health during pregnancy and postpartum</p>
                </div>
                <FiArrowRight className="text-2xl transform group-hover:translate-x-2 transition-transform" />
              </motion.div>

              <motion.div 
                className="group flex items-center justify-between cursor-pointer border-b border-neutral-200 pb-8"
                whileHover={{ x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="text-2xl font-normal mb-2">Infant Development Monitoring</h3>
                  <p className="text-neutral-600">Professional tracking and guidance for your baby's growth and developmental milestones</p>
                </div>
                <FiArrowRight className="text-2xl transform group-hover:translate-x-2 transition-transform" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;