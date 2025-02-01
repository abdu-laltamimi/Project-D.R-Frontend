import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export const Copy = () => {
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFull(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen w-full bg-black"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" 
        />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/painting.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Center content */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-[1440px] mx-auto px-16">
            <motion.div 
              initial={{ x: "50%", translateX: "-50%" }}
              animate={{ 
                x: showFull ? "0%" : "50%",
                translateX: showFull ? "0%" : "-50%"
              }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl"
            >
              {/* Main titles */}
              <div className="overflow-hidden ">
                <motion.h1 
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-[15vw] text-white font-extralight leading-[0.85] tracking-loose"
                >
                  RIBA
                </motion.h1>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-[8vw] text-white/80 font-extralight tracking-tight"
                >
                  Contracting
                </motion.div>
              </div>

              {/* Description and Features */}
              <div className="mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: showFull ? 1 : 0, y: showFull ? 0 : 20 }}
                  transition={{ delay: 0.6 }}
                  className="text-white/70 text-2xl mb-6"
                >
                  Building Excellence Across The North West
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showFull ? 1 : 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-[1px] bg-white/20" />
                  <motion.div
                    className="text-white/40 text-sm tracking-[0.2em]"
                  >
                    Design · Build · Refurb
                  </motion.div>
                </motion.div>
              </div>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: showFull ? 1 : 0 }}
                transition={{ delay: 1 }}
                className="flex gap-6 max-w-xl"
              >
                <Link href="/projects" className="flex-1">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-white text-black rounded-sm flex items-center justify-between group"
                  >
                    <span className="text-sm tracking-wider">Projects</span>
                    <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link href="/consultation" className="flex-1">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 border border-white/10 text-white rounded-sm hover:bg-white/5 transition-colors text-sm tracking-wider"
                  >
                    Consultation
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar with line */}
        <div className="relative">
          {/* Horizontal line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: showFull ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute top-0 left-0 right-0 h-[1px] bg-white/10 origin-left"
          />

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: showFull ? 1 : 0 }}
            transition={{ delay: 1.4 }}
            className="py-8"
          >
            <div className="px-16 flex justify-between items-center">
              {/* EST 2020 */}
              <span className="text-white/40 text-sm tracking-wider">EST. 2020</span>

              {/* Scroll indicator */}
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-white/40 text-sm tracking-wider">Scroll</span>
                <FiChevronDown className="text-white/40" />
              </motion.div>

              {/* Social icons */}
              <div className="flex items-center gap-6">
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white/40 hover:text-white/80 transition-colors"
                  >
                    <FaInstagram size={20} />
                  </motion.div>
                </Link>
                <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white/40 hover:text-white/80 transition-colors"
                  >
                    <FaTiktok size={18} />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
