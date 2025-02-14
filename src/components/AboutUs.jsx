import React from 'react';
import { InlineWidget } from "react-calendly";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="py-32 bg-[#FFFAFA] text-black">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <motion.h2 
            className="text-5xl text-left md:text-7xl font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            What We <span className="text-[#c8a9b9] font-extralight">Promise</span>
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
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-8">
              Private Midwife and Post-natal care at your doorstep
              </p>
              <div className="h-[1px] w-16 bg-neutral-300" />
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-7 space-y-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="grid gap-12">
              {[
                { title: "Midwife at Your Doorstep", desc: "Personalized home visits and dedicated support throughout your pregnancy journey" },
                { title: "Feeding, Bathing & Sleep Support", desc: "Expert guidance for essential newborn care and establishing healthy routines" },
                { title: "Mother's Wellbeing", desc: "Holistic support for physical and emotional health during pregnancy and postpartum" },
                { title: "Infant Development Monitoring", desc: "Professional tracking and guidance for your baby's growth and developmental milestones" }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="group flex items-center justify-between cursor-pointer border-b border-neutral-200 pb-8"
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3 className="text-2xl font-normal mb-2">{service.title}</h3>
                    <p className="text-neutral-600">{service.desc}</p>
                  </div>
                  <FiArrowRight className="text-2xl transform group-hover:translate-x-2 transition-transform" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Calendly Embed */}
        <div className=" py-20 px-8 rounded-">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-8xl mx-auto">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-4xl text-left md:text-6xl font-light mb-4">Book a <span className="text-[#c8a9b9] font-extralight">Consultation</span>

              </h3>
              <p className="text-lg text-black mb-6">
                Schedule a 30-minute session with us to discuss how we can support you on your journey.
              </p>
              <p className="text-sm text-white opacity-75">We are here to provide personalized guidance and care at your convenience.</p>
            </div>
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md border-2 border-white">
              <InlineWidget url="https://calendly.com/abdul-alt-seamlessideas/30min?hide_gdpr_banner=1" styles={{ width: "100%", height: "600px" }} pageSettings={{ hideEventTypeDetails: false, backgroundColor: "#FFFAFA",   }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;