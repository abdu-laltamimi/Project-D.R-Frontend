import Link from "next/link";
import React from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { Button } from "../shared/Button";
import { motion } from "framer-motion";
import DotExpandButton from "../Utils/DotExpandButton";

export const Copy = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center" 
         style={{ 
           backgroundImage: `url('/stairs.jpg')`,
           backgroundAttachment: 'fixed', 
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
      
      {/* Grid Container */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full text-white px-6 md:px-16 place-content-center">
  
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          {/* Layered text */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-xs md:text-sm font-light uppercase tracking-wide text-left">

            </h3>
            <h1 className="text-4xl md:text-5xl font-extrabold text-left md:text-7xl">
              RIBA
              <br />
              <span className="inline-block relative">
                Contracting.
                {/* <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white"></div> */}
              </span>
            </h1>

            <p className="mt-2 text-sm md:text-lg font-light text-left md:text-2xl max-w-2xl">
           Building Excellence Across The North West
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 md:mt-8 flex w-1/3 max-w-md flex-col gap-4">
  {/* First Button: Our Projects */}
  <Link href="/projects">
    <motion.div 
      className="relative hover:text-zinc-300 flex items-center text-left justify-start px-4 py-3 text-sm md:text-lg md:text-xl font-bold bg-transparent border-white rounded cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      Our Projects
      <FiArrowRight className="ml-2" />

    </motion.div>
  </Link>

  {/* Second Button: Book A Free Consultation */}
  <Link href="/consultation">
    <motion.div 
      className="group flex items-center justify-start px-4 py-3 text-sm md:text-base font-bold text-black bg-neutral-200 rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white active:bg-neutral-700 cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <span>Book A Free Consultation</span>
    </motion.div>
  </Link>
</div>

            
            {/* First Button with Hover Animation */}
          
        </div>
  
        {/* Right Section */}
        <div className="flex flex-col justify-center self-start md:self-center mt-6 md:mt-0 text-center md:text-right">
          <p className="text-[10px] sm:text-xs md:text-sm uppercase font-light text-center md:text-right pr-0 md:pr-5">- Since 2020</p>
          <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            Design. <br className="hidden sm:block" />
            Build. <br className="hidden sm:block" />
            Refurb.
          </h3>
        </div>
      </div>
    </div>
  );
};
