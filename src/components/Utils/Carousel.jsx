import { motion } from "framer-motion";

const Carousel = () => {
  return (
    <section className="py-4">
      <div className="flex  overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      {/* <div className="flex overflow-hidden mt-4">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div> */}
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ imagePath }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-32 md:w-48 h-32 md:h-48 flex justify-center items-center hover:bg-zinc-700 transition-colors"
    >
      <img 
        src={imagePath} 
        alt="Company logo" 
        className="w-24 md:w-36 h-24 md:h-36 object-contain"
      />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem imagePath="/proven.png" />
    <LogoItem imagePath="/pricing.png" />
    <LogoItem imagePath="/on-time.png" />
    <LogoItem imagePath="/quality.png" />
  </>
);



export default Carousel;