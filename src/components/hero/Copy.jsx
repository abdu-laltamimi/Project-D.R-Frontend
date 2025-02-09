import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
export const Copy = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const { scrollY } = useScroll();
  

  const y = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      
      const handleLoad = () => {
        console.log('Video loaded');
        setIsVideoLoaded(true);
      };

      const handleError = (error) => {
        console.error('Video loading error:', error);
        setIsVideoLoaded(false);
      };

      videoRef.current.addEventListener('loadeddata', handleLoad);
      videoRef.current.addEventListener('error', handleError);

      // Force load check
      if (videoRef.current.readyState >= 3) {
        handleLoad();
      }

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleLoad);
          videoRef.current.removeEventListener('error', handleError);
        }
      };
    }
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    })
  };

  return (
    <motion.div 
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 z-50 px-6 mix-blend-difference"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between h-34">
            {/* Logo */}
            <Link href="/" className="text-white text-xl tracking-wide hover:opacity-70 transition-opacity">
              <Image src="/logo.png" alt="Logo" width={150} height={150} />
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-8">
              <Link href="/menu" className="text-white text-sm tracking-wider font-light hover:opacity-70 transition-opacity">
                MENU
              </Link>
              <a href="mailto:cafevalentinobramhall@gmail.com" className="text-white text-sm tracking-wider font-light hover:opacity-70 transition-opacity">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Video Background */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" 
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="object-cover w-full h-full"
          style={{ 
            opacity: isVideoLoaded ? 0.7 : 0,
            transition: 'opacity 1s ease-in-out',
            transform: 'scale(1.1)'
          }}
        >
          <source src="/coffee.mp4" type="video/mp4" />
        </video>

      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y }}
        className="relative z-20 h-full flex items-center justify-center px-6"
      >
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            {/* Left Column */}
            <div className="space-y-16">
              <div>
                <motion.p
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                  className="text-neutral-300 tracking-[0.2em] text-xs mb-12"
                >
                  EST. 2023
                </motion.p>
                
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.4}
                  className="overflow-hidden"
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-tight leading-none mb-8">
                    CAFÉ<br />
                    VALENTINO
                  </h1>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.6}
                  className="w-16 h-[1px] bg-neutral-400 mb-12"
                />

                <motion.p
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.8}
                  className="text-neutral-300 text-lg font-light max-w-md leading-relaxed"
                >
                  A sanctuary of refined taste, where every cup tells a story 
                  of passion and precision.
                </motion.p>
              </div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <Link href="/menu">
                  <button className="group flex inline-flex items-center gap-4 text-white border border-neutral-700 px-8 py-4 hover:bg-white/5 transition-colors">
                    <span className="text-sm tracking-wider">EXPLORE OUR MENU</span>
                    {/* <FiArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> */}
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1.2}
              className="hidden md:block"
            >
              <div className="border border-neutral-900 p-16 backdrop-blur-sm bg-black/20">
                <div className="space-y-20">
                  <div>
                    <p className="text-neutral-400 text-xs tracking-[0.2em] mb-6">HOURS</p>
                    <p className="text-white text-lg font-light">Monday — Friday</p>
                    <p className="text-neutral-400 font-light mb-2">8:00 AM — 5:00 PM</p>
                    <p className="text-white text-lg font-light">Saturday</p>
                    <p className="text-neutral-400 font-light mb-2">9:00 AM — 5:00 PM</p>
                    <p className="text-white text-lg font-light">Sunday</p>
                    <p className="text-neutral-400 font-light">9:00 AM — 4:00 PM</p>
                  </div>
                  <div>
                    <a href="https://www.google.com/maps/dir//22+Bramhall+Ln+S,+Bramhall,+Stockport+SK7+1AF/@53.3577315,-2.2478076,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x487a4d618a2dc087:0x58b5babdb19e3602!2m2!1d-2.1654793!2d53.3577777?entry=ttu&g_ep=EgoyMDI1MDIwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                    <p className="text-neutral-400 text-xs tracking-[0.2em] mb-6">LOCATION</p>
                    <p className="text-white text-lg font-light">22 Bramhall Ln S</p>
                    <p className="text-neutral-400 font-light">Stockport, SK7 1AF</p>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-[1px] h-16 bg-neutral-800"
          />
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};
