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
      // videoRef.current.playbackRate = 0.5;
      
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
        className="absolute top-0 left-0 right-0 z-50 px-6 bg-white"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between h-auto pb-4">
            {/* Logo */}
            <Link href="/" className="text-white text-xl tracking-wide hover:opacity-70 transition-opacity">
              <Image src="/logo.svg" alt="Logo" width={200} height={200} />
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-4 md:gap-18 pr-8">
              <Link href="https://mymaternalhub.co.uk/survey/" className="text-white hidden md:block text-md tracking-wider font-light hover:opacity-70 bg-[#003845] transition-opacity rounded-full px-6 py-2">
                MidWife Survey
              </Link>
              <a href="mailto:midwife@myindependentmidwife.co.uk" className="text-white text-md hidden md:block tracking-wider font-light hover:opacity-70 bg-[#003845] transition-opacity rounded-full px-6 py-2 block ">
                Contact Us
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
          className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black/30 z-10" 
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
          <source src="/baby.mp4" type="video/mp4" />
        </video>

      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y }}
        className="relative z-20 h-full flex flex-col items-center justify-center px-6"
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
                  className="text-neutral-300 tracking-[0.2em] text-xs mb-8"
                >
                  EST. 2022
                </motion.p>
                
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.4}
                  className="overflow-hidden"
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-tight leading-none mb-8">
                    <span className="text-[#6ca3a5] font-extralight">My</span><br />
                    <span className="text-[#c8a9b9] font-light">Maternal</span><br />
                    <span className="text-[#6ca3a5] font-extralight">Hub</span><br />
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
                 Nurturing every journey with compassion, care, and unwavering support.
                </motion.p>
              </div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <Link href="https://www.myindependentmidwife.co.uk/book-a-discovery-call" target="_blank" rel="noopener noreferrer">
                  <button className="group flex inline-flex items-center gap-4 text-white border border-neutral-700 px-8 py-4 hover:bg-white/10 transition-colors">
                    <span className="text-sm tracking-wider">Begin Your Birth Journey</span>
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
              className=" hidden md:block"
            >
              <div className="border border-neutral-700 p-16 backdrop-blur-md bg-black/20">
                <div className="space-y-12">
                  <div>
                    <p className="text-neutral-400 text-xs tracking-[0.2em] mb-4">RECOGNITION</p>
                    <p className="text-white text-xl font-light leading-relaxed">
                      Best Private Midwifery Care Provider
                    </p>
                    <p className="text-[#6ca3a5] font-light">United Kingdom, 2024</p>
                  </div>

                  {/* <div className="w-16 h-[1px] bg-neutral-700" /> */}

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <svg className="w-20 h-5" viewBox="0 0 100 20">
                        {[...Array(5)].map((_, i) => (
                          <path
                            key={i}
                            d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218z"
                            transform={`translate(${i * 20}, 0)`}
                            fill="#6ca3a5"
                          />
                        ))}
                      </svg>
                      <span className="text-white text-sm">5.0</span>
                    </div>
                    <p className="text-white text-lg font-light mb-1">Trusted by Mothers</p>
                    <p className="text-neutral-400 font-light text-sm">
                      All 5*  reviews on Trustpilot
                    </p>
                  </div>

                  <div>
                    <p className="text-neutral-400 text-xs tracking-[0.2em] mb-4">EXPERTISE</p>
                    <div className="space-y-3">
                      <p className="text-white text-lg font-light">Personalized Care Plans</p>
                      <p className="text-white text-lg font-light">24/7 Support Access</p>
                      <p className="text-white text-lg font-light">Home Birth Specialists</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
