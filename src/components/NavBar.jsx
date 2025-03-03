import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative top-0 left-0 right-0 z-50 px-6 bg-white"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between h-auto">
            <Link href="/" className="text-white text-xl tracking-wide hover:opacity-70 transition-opacity">
              <Image src="/logo.svg" alt="Logo" width={150} height={150} />
            </Link>
            <div className="flex items-center gap-4 md:flex-row md:gap-18 md:pr-8">
              <Link href="https://calendly.com/abdul-alt-seamlessideas/15min?hide_gdpr_banner=1" className="text-white hidden md:block text-md tracking-wider font-light hover:opacity-70 bg-[#003845] transition-opacity rounded-full px-6 py-2">
                Book a Call
              </Link>
              <a href="/survey"  target="_blank" rel="noopener noreferrer" className="text-white text-md md:block tracking-wider font-light hover:opacity-70 bg-[#003845] transition-opacity rounded-full px-6  py-2 ">
                Take a Survey
              </a>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default NavBar;
