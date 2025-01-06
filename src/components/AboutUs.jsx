import React from "react";
import Link from 'next/link';
import Carousel from "./Utils/Carousel";

export const AboutUs = () => {
  return (
    <section className="bg-zinc-800 text-white">
      {/* Two Column Layout for Heading and Image */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center h-screen overflow-hidden">
        
        {/* Left Column (Staggered Heading and Text) */}
        <div className="col-span-1 z-10 px-8 py-16 max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Turning Your Ideas Into Reality
          </h2>
          
          <p className="mt-8 text-base font-light md:text-xl">
            At RIBA Contracting, every project starts with you. Whether you're expanding your home, renovating a space, or starting from the ground up, we bring expertise, reliability, and care to turn your ideas into reality.
          </p>
          <p className="mt-4 text-base font-light md:text-xl">
            From the first conversation to the final brick, we ensure a seamless, stress-free experience—delivering spaces that are built to inspire and built to last.
          </p>
          <p className="text-xl font-semibold text-zinc-200 mt-8">
            Let's build something amazing together.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <button className="py-3 px-8 bg-white text-zinc-900 hover:bg-zinc-700 hover:text-white font-semibold text-lg rounded-full transition duration-300">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column (Hand Cutout Image in Overlapping Container) */}
        <div className="relative col-span-1">
          <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2">
            <img
              src="/hand.png"
              alt="Hand"
              className="w-[800px] h-auto drop-shadow-xl transform hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Carousel />
    </section>
  );
};

export default AboutUs;
