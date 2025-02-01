import { motion } from "framer-motion";

const LOGOS = [...Array(3)].flatMap(() => [
  {
    id: crypto.randomUUID(),
    path: "/icons/customer-focused-icon.png",
    alt: "Customer Focused Icon"
  },
  {
    id: crypto.randomUUID(),
    path: "/icons/hassle-free-icon.png",
    alt: "Hassle Free Icon"
  },
  {
    id: crypto.randomUUID(),
    path: "/icons/planning-icon.png",
    alt: "Planning Icon"
  },
  {
    id: crypto.randomUUID(),
    path: "/icons/health-icon.png",
    alt: "Health Icon"
  }
]);

const Carousel = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Top row */}
      <div className="flex overflow-hidden">
        <InfiniteLoopSlider direction="left">
          {LOGOS.map((logo) => (
            <LogoItem key={logo.id} {...logo} />
          ))}
        </InfiniteLoopSlider>
        <InfiniteLoopSlider direction="left">
          {LOGOS.map((logo) => (
            <LogoItem key={logo.id} {...logo} />
          ))}
        </InfiniteLoopSlider>
      </div>

    </section>
  );
};

const InfiniteLoopSlider = ({ children, direction }) => {
  return (
    <motion.div
      initial={{ x: direction === "right" ? "-100%" : "0%" }}
      animate={{ x: direction === "right" ? "0%" : "-100%" }}
      transition={{
        duration: 35,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ path, alt }) => {
  return (
    <div className="w-32 md:w-48 h-32 md:h-48 flex justify-center items-center rounded-lg hover:bg-zinc-700/10 transition-colors duration-200">
      <img 
        src={path} 
        alt={alt} 
        className="w-24 md:w-36 h-24 md:h-36 object-contain"
      />
    </div>
  );
};

export default Carousel;