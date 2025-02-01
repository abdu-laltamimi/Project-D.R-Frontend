import React, { useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";
import Link from "next/link";

const Example = () => {
  return (
    <>
      <FlyoutNav />
    </>
  );
};

const FlyoutNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Only show navbar after scrolling 150px to account for larger logo
    if (latest > 150) {
      setVisible(true);
    } else if (latest < 50) { // Add buffer for smoother transition
      setVisible(false);
    }
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{ 
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          opacity: { duration: 0.3 }
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Backdrop with better fade */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative max-w-[1440px] mx-auto px-16">
          <div className="flex items-center justify-between py-8">
            {/* Logo */}
            <Link href="/">
              <motion.img
                src="/refurbishLogo.png"
                alt="RIBA"
                className="h-24 w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-16">
              {LINKS.map((link) => (
                <Link 
                  key={link.text} 
                  href={link.href}
                  className="relative group"
                >
                  <span className="text-white/60 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors">
                    {link.text}
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white/20 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link href="/consultation">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white text-black rounded-sm text-sm tracking-[0.2em] uppercase
                           hover:bg-white/90 transition-colors"
                >
                  Consultation
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(true)}
              className="block md:hidden text-white/60 hover:text-white"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="px-16 py-8 flex justify-between items-center">
          <Link href="/">
            <img
              src="/refurbishLogo.png"
              alt="RIBA"
              className="h-24 w-auto"
            />
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/60 hover:text-white"
          >
            <FiX size={28} />
          </button>
        </div>
        
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: isOpen ? 0 : 40, opacity: isOpen ? 1 : 0 }}
          transition={{ delay: 0.15 }}
          className="px-16 py-16 flex flex-col gap-12"
        >
          {LINKS.map((link, i) => (
            <motion.div
              key={link.text}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: isOpen ? 0 : 40, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <Link 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white text-3xl font-light tracking-wider"
              >
                {link.text}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: isOpen ? 0 : 40, opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              href="/consultation"
              onClick={() => setIsOpen(false)}
              className="inline-block px-8 py-3 bg-white text-black 
                       hover:bg-white/90 transition-colors text-sm tracking-[0.2em] uppercase"
            >
              Consultation
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

const Logo = ({ className = "", color = "white", link = "/" }) => {
  return (
    <div className={`flex items-center gap-2 pl-10  ${className}`}>
      <Link href={link}>
        <img
          src="/refurbishLogo.png"
          alt="Logo"
          className="w-32 h-auto"
        />
      </Link>
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6 text-zinc-900 font-bold">
      {LINKS.map((l) => (
        <NavLink
          key={l.text}
          href={l.href}
          FlyoutContent={l.component}
        >
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <a href={href} className="relative text-white font-semibold">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-zinc-700 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      <Link href="/quote">
        <div className="flex items-center gap-2 rounded-lg border-2 border-zinc-100 px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black cursor-pointer">
          Free Quote
        </div>
      </Link>
      <a
        href="tel:+441234567890"
        className="rounded-lg border-2 border-[#003d4d] bg-[#003d4d] px-4 py-2 font-semibold text-white transition-colors hover:border-zinc-600 hover:bg-zinc-600 hover:text-white"
      >
        Contact Us
      </a>
    </div>
  );
};

const MobileMenuLink = ({ children, href, FoldContent, setMenuOpen }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-zinc-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <Link href={href}>
            <span className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              {children}
            </span>
          </Link>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <Link href={href}>
          <div
            onClick={() => setMenuOpen(false)}
            className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          >
            <span>{children}</span>
            <FiArrowRight />
          </div>
        </Link>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl text-white">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6 bg-zinc-900">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-white" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-white p-6">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-center bg-zinc-900 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

const LINKS = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Services",
    href: "/services",
    component: () => (
      <div className="grid gap-1 p-4 py-8 bg-white text-black rounded-lg shadow-md w-64">
        <div>
          <Link href="/services/house-renovations" className="hover:text-zinc-700">
            House Renovations
          </Link>
        </div>
        <div>
          <Link href="/services/bathroom-refurb" className="hover:text-zinc-700">
            Bathroom Refurb
          </Link>
        </div>
        <div>
          <Link href="/services/kitchen-refurbishment" className="hover:text-zinc-700">
            Kitchen Refurb
          </Link>
        </div>
        <div>
          <Link href="/services/painting-decorating" className="hover:text-zinc-700">
            Painting & Decorating
          </Link>
        </div>
        <div>
          <Link href="/services/house-extensions" className="hover:text-zinc-700">
            House Extensions
          </Link>
        </div>
        <div className="mt-4">
          <Link href="/services">
            <button className="w-full py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-700">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    ),
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "About Us",
    href: "/about-us",
  },
];

export default Example;
