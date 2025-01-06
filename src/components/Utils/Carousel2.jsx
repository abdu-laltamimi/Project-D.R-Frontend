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
      initial={{ translateX: reverse ? "0%" : "-100%" }}
      animate={{ translateX: reverse ? "-100%" : "0%" }}
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
    <LogoItem imagePath="/stress-Photoroom.png" />
    <LogoItem imagePath="/health-Photoroom.png" />
    <LogoItem imagePath="/planning-Photoroom.png" />
    <LogoItem imagePath="/customer-Photoroom.png" />


  </>
);



export default Carousel;