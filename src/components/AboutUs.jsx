import React from 'react';
import { InlineWidget } from "react-calendly";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight } from "react-icons/fi";
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin'],
  display: 'swap',
});
const AboutSection = () => {
  return (
    <section className="py-32 bg-[#FFFAFA] text-black">
      <div className={`${nunito.className} max-w-[1400px] mx-auto px-6`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <motion.h2 
            className="text-6xl text-left md:text-7xl font-normal text-[#6CA3A5]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            What We <span className="text-[#c8a9b9] font-semibold">Promise.</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-16 mb-32">
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32">
              <p className="text-2xl md:text-4xl text-neutral-600 leading-relaxed mb-8">
              Private Midwife and Post-natal care at your doorstep.
              </p>
              {/* <div className="h-[1px] w-16 bg-neutral-300" /> */}
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-7 space-y-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid gap-12 md:text-center text-left">
              {[
                { title: "Midwife at Your", desc: "Personalized home visits and dedicated support throughout your pregnancy journey", lastWord: "Doorstep" },
                { title: "Feeding, Bathing & Sleep", desc: "Expert guidance for essential newborn care and establishing healthy routines", lastWord: "Support" },
                { title: "Mother's", desc: "Holistic support for physical and emotional health during pregnancy and postpartum", lastWord: "Wellbeing" },
                { title: "Infant Development", desc: "Professional tracking and guidance for your baby's growth and developmental milestones", lastWord: "Monitoring" }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="group flex flex-col items-center justify-between cursor-pointer text-left md:text-center pb-8"
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3 className={`${nunito.className} text-2xl md:text-4xl font-normal mb-2 text-[#6CA3A5]`}>
                      {service.title} <span className="text-[#c8a9b9] font-semibold">{service.lastWord}</span>
                    </h3>
                    <p className={`${nunito.className} text-neutral-600`}>{service.desc}</p>
                  </div>
                  {/* <FiArrowRight className="text-2xl transform group-hover:translate-x-2 hidden md:block transition-transform" /> */}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


</div>

    </section>
  );
};

export default AboutSection;