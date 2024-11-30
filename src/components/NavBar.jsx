import React, { useState } from "react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle, FaPhoneAlt } from "react-icons/fa";
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
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 150 ? true : false);
  });

  return (
    <nav
    className={`fixed top-0 z-50 w-full px-6 text-neutral-900 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-zinc-900 py-2 pt-2 text-black "
          : "bg-zinc-900 py-2 pt-3 shadow-none text-black  "
      }`}
  >
  <div className="mx-auto flex max-w-7xl items-center justify-start">
    <Logo className="mr-auto w-52 h-auto" /> {/* Adjust width here to make logo bigger */}
      <div className="hidden gap-6 lg:flex">
        <Links />
        <CTAs />
      </div>
      <MobileMenu />
    </div>
  </nav>  
  );
};
const Logo = ({ className = "", color = "white" }) => {
  return (
    <div className={`flex items-center gap-2 pl-10  ${className}`}>
      <img
        src="/improved.png" // Replace with your actual file name
        alt="Logo"
        className="w-32 h-auto" // Made logo smaller by reducing width from 52 to 32
      />
    </div>
  );
};


const Links = () => {
  return (
    <div className="flex items-center gap-6 text-zinc-900 font-bold">
      {LINKS.map((l) => (
        <a 
          key={l.text} 
          href={l.href} 
          className="relative text-white font-semibold hover:text-gray-400"
        >
          {l.text}
        </a>
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
          {/* Remove <a> from inside the <Link> */}
          <Link href="/quote">
              <div className="flex items-center gap-2 rounded-lg border-2 border-zinc-100 px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black cursor-pointer">
                  <FaUserCircle />
                  <span>Free Quote</span>
              </div>
          </Link>
          <a 
              href="tel:+441234567890"
              className="rounded-lg border-2 border-[#003d4d] bg-[#003d4d] px-4 py-2 font-semibold text-white transition-colors hover:border-zinc-600 hover:bg-zinc-600 hover:text-white"
          >
              <span>Contact Us</span>
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

export default Example;

const LINKS = [
  {
    text: "Services",
    href: "/services",
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "About Us",
    href: "/about",
  },
];
