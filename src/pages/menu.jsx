import { motion } from "framer-motion";
import { useState } from "react";
import Services2 from "@/components/Services2";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const menus = [
    {
      id: 1,
      title: "Food Menu",
      pdfUrl: "/foodMenu.pdf",
      previewImage: "/food-pic.png",
    },
    {
      id: 2,
      title: "Drinks Menu",
      pdfUrl: "/drinkMenu.pdf",
      previewImage: "/drinks-pic.png",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className=" top-0 left-0 right-0 z-50 px-6 mix-blend-difference"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between h-34">
            <Link
              href="/"
              className="text-white text-xl tracking-wide hover:opacity-70 transition-opacity"
            >
              <Image src="/logo.png" alt="Logo" width={150} height={150} />
            </Link>

            <div className="flex items-center gap-12">
              <Link
                href="/"
                className="text-white text-sm tracking-wider font-light hover:opacity-70 transition-opacity"
              >
                HOME
              </Link>
              <a
                href="mailto:cafevalentinobramhall@gmail.com"
                className="text-white text-sm tracking-wider font-light hover:opacity-70 transition-opacity"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-40 pb-24 px-4 md:px-6"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="max-w-[1400px] mx-auto mb-8"
        >
          <p className="text-neutral-400 tracking-[0.2em] text-xs mb-6">
            A Taste You'll Remember
          </p>
          <h1 className="text-7xl md:text-8xl font-normal tracking-loose">
            MENUS<span className="text-white/50 font-light text-7xl">.</span>
          </h1>
        </motion.div>

        <div className="max-w-[1400px] mx-auto space-y-6 md:space-y-12">
          {menus.map((menu, index) => (
            <motion.div
              key={menu.id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.4 + index * 0.2}
              className="relative group"
            >
              <motion.div className="cursor-pointer overflow-hidden" whileHover="hover">
                <motion.div
                  className="relative h-[50vh] md:h-[70vh] w-full"
                  onClick={() => window.open(menu.pdfUrl, "_blank")}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <img
                    src={menu.previewImage}
                    alt={`${menu.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />

                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                    <h2 className="text-3xl md:text-5xl font-light tracking-wider">
                      {menu.title}
                    </h2>

                    <motion.div
                      initial={{ opacity: 0.8, x: 0 }}
                      whileHover={{ opacity: 1, x: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-4 text-lg md:text-xl"
                    >
                      View Menu
                      <span className="text-2xl">→</span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Services2 />
      <Footer />
    </div>
  );
};

export default Menu;
