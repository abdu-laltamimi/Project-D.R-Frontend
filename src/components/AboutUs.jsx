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
    <section className="py-32 bg-[#0C0C0C] text-white">
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
            Our Story
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
              <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-8">
                More than just a café, we're a sanctuary where every cup tells a story and every visit becomes a cherished memory.
              </p>
              <div className="h-[1px] w-16 bg-neutral-700" />
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="md:col-span-7 space-y-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Feature Image */}
            <motion.div 
              className="aspect-[16/9] relative overflow-hidden rounded-sm"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/cup.jpeg"
                alt="Café ambience"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Menu Links */}
            <div className="grid gap-12">

                <motion.div 
                  onClick={() => window.open(menu.drinks, "_blank")}
                  className="group flex items-center justify-between cursor-pointer border-b border-neutral-800 pb-8"
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3 className="text-2xl font-light mb-2">Drinks Menu</h3>
                    <p className="text-neutral-400">Artisanal coffee & specialty beverages</p>
                  </div>
                  <FiArrowRight className="text-2xl transform group-hover:translate-x-2 transition-transform" />
                </motion.div>


              {/* Food Menu */}

                <motion.div 
                  onClick={() => window.open(menu.food, "_blank")}
                  className="group flex items-center justify-between cursor-pointer border-b border-neutral-800 pb-8"
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3 className="text-2xl font-light mb-2">Food Menu</h3>
                    <p className="text-neutral-400">Fresh pastries & seasonal dishes</p>
                  </div>
                  <FiArrowRight className="text-2xl transform group-hover:translate-x-2 transition-transform" />
                </motion.div>

            </div>

            {/* Replace Additional Content with Values Section */}
            <motion.div 
              className="grid md:grid-cols-3 gap-8 pt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="group p-6  hover:bg-white/5 transition-all duration-500"

              >
                <FiCoffee className="text-2xl text-neutral-400 mb-6 group-hover:text-white transition-colors" />
                <h4 className="text-lg font-light mb-3">Craft & Quality</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Every bean is carefully selected and roasted to perfection in small batches.
                </p>
              </motion.div>

              <motion.div 
                className="group p-6  hover:bg-white/5 transition-all duration-500"
              >
                <FiHeart className="text-2xl text-neutral-400 mb-6 group-hover:text-white transition-colors" />
                <h4 className="text-lg font-light mb-3">Passion & Care</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Our dedication to the perfect cup drives everything we do.
                </p>
              </motion.div>

              <motion.div 
                className="group p-6  hover:bg-white/5 transition-all duration-500"
              >
                <FiUsers className="text-2xl text-neutral-400 mb-6 group-hover:text-white transition-colors" />
                <h4 className="text-lg font-light mb-3">Community</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Creating a space where connections flourish over great coffee.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;