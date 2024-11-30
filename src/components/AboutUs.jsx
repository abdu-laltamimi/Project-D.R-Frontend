import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const AboutUs = () => {
  return (
    <section className="bg-zinc-800 text-white py-12 px-6 md:px-16">
      {/* Two Column Layout for Heading and Image */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        
        {/* Left Column (Staggered Heading and Text) */}
        <div className="col-span-1 z-10">
          <h2 className="text-5xl md:text-7xl pb-5 font-extrabold leading-tight tracking-tight">
            We <br />
            Believe <br />
            in Quality <span className="text-5xl font-bold">. <div className=""> </div></span>
          </h2>
          
          {/* Updated Text for Responsive View */}
          <p className="mt-4 text-lg md:text-2xl">
            We prioritize precision and attention to detail. Whether you're extending, renovating, or starting a new architectural project, we bring your vision to life with quality craftsmanship.
          </p>
          <p className="mt-2 text-base md:text-xl">
            From concept to completion, our focus is on delivering results that exceed expectations. We believe in a professional approach that ensures every detail meets the highest standards of quality.
          </p>
        </div>

        {/* Right Column (Parallax Image with Rounded Corners and Gradient Overlay) */}
        <div className="col-span-1 relative h-[50vh] md:h-[70vh] border border-[#006b8e]  overflow-hidden shadow-xl" 
          style={{
            backgroundImage: `url('hero.jpg')`,  // Replace with your image path
            // backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div> {/* Subtle gradient overlay */}
        </div>
      </div>

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export const Stats = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <Stat num={20} suffix="+" subheading="Units Ready" />
        <Stat num={2} suffix="K+" subheading="Clients" />
        <Stat num={40} suffix="K+" subheading="Projects" />
      </div>
    </section>
  );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-full flex-col items-center">
      <p className="mb-2 text-center text-5xl font-medium">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="text-center text-xl font-medium">{subheading}</p>
    </div>
  );
};
