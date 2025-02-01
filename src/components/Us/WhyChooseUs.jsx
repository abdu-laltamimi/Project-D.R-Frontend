import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel2 from '@/components/Utils/Carousel2';

const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-3"
        >
          {word === "Delivering" || word === "Trust" ? (
            <span className="text-zinc-400">{word}</span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export const WhyChooseUs = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      title: "Hassle-Free Experience",
      description: "We take care of everything – from planning permissions to final handover. One team. One goal. No stress.",
    },
    {
      title: "Guaranteed Quality",
      description: "We stand by our work with a 2-year guarantee (subject to T&Cs), ensuring peace of mind long after your project is complete.",
    },
    {
      title: "Fully Insured & Protected",
      description: "Your project is in safe hands. We're fully insured, giving you total confidence at every stage.",
    },
    {
      title: "Expert In-House Team",
      description: "Our team of skilled engineers, project managers, and consultants delivers precision, quality, and reliability on every job.",
    }
  ];

  const secondaryFeatures = [
    {
      title: "End-to-End Solutions",
      description: "From design and approvals to construction and completion, we manage the entire process – saving you time and hassle.",
    },
    {
      title: "Tailored for You",
      description: "We focus on understanding your needs, ensuring results that match your vision and exceed expectations.",
    },
    {
      title: "Trusted Industry Specialists",
      description: "Through our partnerships with leading specialists, we guarantee accuracy, compliance, and the highest standards of work.",
    }
  ];

  return (
    <section className="py-24">
      {/* <Carousel2 /> */}
      <div className="px-6 md:px-12 lg:px-24 rounded-[40px] bg-zinc-800 py-12">
        <div className="max-w-[1920px] mx-auto">
          {/* Header */}
          <div className="mb-20 max-w-4xl pt-12">
            <motion.span 
              className="inline-block px-4 py-1.5 text-sm font-medium text-zinc-400 rounded-full border border-zinc-500 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              WHY CHOOSE US
            </motion.span>
            <AnimatedText 
              text="Building Excellence Delivering Trust"
              className="text-4xl md:text-5xl lg:text-7xl font-light text-white max-w-4xl leading-tight"
            />
          </div>

          {/* Primary Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                feature={feature}
                index={index}
                isHovered={hoveredFeature === index}
                onHover={() => setHoveredFeature(index)}
                onLeave={() => setHoveredFeature(null)}
              />
            ))}
          </div>

          {/* Secondary Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {secondaryFeatures.map((feature, index) => (
              <FeatureCard 
                key={index + 4}
                feature={feature}
                index={index + 4}
                isHovered={hoveredFeature === (index + 4)}
                onHover={() => setHoveredFeature(index + 4)}
                onLeave={() => setHoveredFeature(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index, isHovered, onHover, onLeave }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    onHoverStart={onHover}
    onHoverEnd={onLeave}
    className="group relative rounded-2xl overflow-hidden"
  >
    <motion.div 
      className="absolute inset-0 bg-white rounded-tr-2xl rounded-bl-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />

    <div className="relative p-8 lg:p-12">
      <div className="space-y-6">
        {/* Number */}
        <span className={`text-sm font-medium transition-colors duration-300 ${
          isHovered ? 'text-zinc-400' : 'text-zinc-600'
        }`}>
          {feature.number}
        </span>

        {/* Title */}
        <h3 className={`text-2xl font-light transition-colors duration-300 ${
          isHovered ? 'text-zinc-900' : 'text-white'
        }`}>
          {feature.title}
        </h3>

        {/* Description */}
        <p className={`transition-colors duration-300 ${
          isHovered ? 'text-zinc-600' : 'text-zinc-400'
        }`}>
          {feature.description}
        </p>

        {/* Bottom Line */}
        <motion.div 
          className={`h-[1px] w-full transition-colors duration-300 ${
            isHovered 
              ? 'bg-gradient-to-r from-zinc-200 to-transparent' 
              : 'bg-gradient-to-r from-zinc-700 to-transparent'
          }`}
        />
      </div>
    </div>
  </motion.div>
);
