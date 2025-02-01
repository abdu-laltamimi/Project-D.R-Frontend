import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AboutSection = () => {
  return (
    <section className="pt-24">
      <div className="px-6 md:px-12 lg:px-24 rounded-[40px] bg-white py-12">
        <motion.div 
          className="max-w-[1920px] mx-auto"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
        >
          {/* Header */}
          <div className="mb-20 max-w-4xl pt-12">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-7xl font-light text-zinc-900 max-w-4xl leading-tight"
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.25, 0.25, 0, 1]
                  }
                }
              }}
            >
Bringing thoughtful design to  <span className="text-zinc-500">every space</span> you call <span className="text-zinc-900">home</span>            </motion.h2>
          </div>

          {/* Main Content */}
          <motion.div 
            className="group relative overflow-hidden"
            variants={fadeIn}
          >
            <div className="p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left Column - Image */}
                <motion.div 
                  className="relative aspect-[16/9] rounded-br-3xl rounded-tl-3xl overflow-hidden"
                  variants={{
                    initial: { 
                      scale: 0.8,
                      opacity: 0,
                      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
                    },
                    animate: { 
                      scale: 1,
                      opacity: 1,
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                      transition: {
                        duration: 1.2,
                        ease: [0.25, 0.25, 0, 1]
                      }
                    }
                  }}
                >
                  <Image 
                    src="/decor.jpg"
                    alt="Architectural Excellence"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-zinc-900/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </motion.div>

                {/* Right Column - Content */}
                <motion.div 
                  className="space-y-8"
                  variants={stagger}
                >
                  <motion.div 
                    className="space-y-6"
                    variants={stagger}
                  >
                    <motion.h3 
                      className="text-4xl font-medium text-zinc-900"
                      variants={fadeIn}
                    >
                      Our Commitment to Excellence
                    </motion.h3>
                    <motion.p 
                      className="text-zinc-600 leading-relaxed"
                      variants={fadeIn}
                    >
                      At RIBA Contracting, every project starts with you. Whether you're expanding your home, renovating a space, or starting from the ground up, we bring <span className="text-zinc-900">expertise, reliability, and care</span> to turn your ideas into reality.
                    </motion.p>
                    <motion.p 
                      className="text-zinc-600 leading-relaxed"
                      variants={fadeIn}
                    >
                      From the first conversation to the final brick, we ensure a seamless, <span className="text-zinc-900">stress-free experience</span>—delivering spaces that are built to inspire and built to last.
                    </motion.p>
                    <motion.div 
                      className="pt-8"
                      variants={fadeIn}
                    >
                      <Link href="/about-us">
                        <motion.button 
                          className="group inline-flex items-center gap-4"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.span 
                            className="text-sm text-zinc-900 tracking-wide"
                            whileHover={{ x: 2 }}
                          >
                            Learn More
                          </motion.span>
                          <motion.span 
                            className="text-zinc-900"
                            whileHover={{ x: 5 }}
                          >
                            →
                          </motion.span>
                        </motion.button>
                      </Link>
                    </motion.div>
                    <motion.div 
                      className="h-[1px] w-full bg-gradient-to-r from-zinc-200 to-transparent"
                      variants={{
                        initial: { scaleX: 0, originX: 0 },
                        animate: { 
                          scaleX: 1,
                          transition: {
                            duration: 0.8,
                            delay: 0.5
                          }
                        }
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;