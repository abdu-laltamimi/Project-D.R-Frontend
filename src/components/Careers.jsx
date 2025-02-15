import { Nunito } from 'next/font/google';
import { motion } from 'framer-motion';
import Image from 'next/image';

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin'],
  display: 'swap',
});

const Careers = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative h-[600px] md:h-[700px] w-full">
      {/* Background Image */}
      <div className="absolute hidden md:block inset-0">
        <Image
          src="/babyCta.jpeg"
          alt="Careers"
          layout="fill"
          objectFit="cover"
          className=""
          priority
          quality={100}
        />
        

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/10 "></div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 flex items-center h-full">
        <motion.div
          className="bg-white rounded-2xl bg-opacity-10 backdrop-blur-[10px] p-8 md:p-10 w-[90%] sm:w-[70%] md:w-[45%] lg:w-[35%] ml-6 md:mx-auto shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`${nunito.className} text-3xl font-semibold md:text-white text-[#003845] mb-4`}>
            Join Our Team
          </h2>
          <p className="md:text-neutral-200 text-black text-md mb-6">
            If you're a professional looking to work with us, or seeking support, fill out the form below.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4356] bg-white"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4356] bg-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4356] bg-white"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4356] bg-white"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-[#003845] text-white rounded-full hover:bg-zinc-800 transition-colors duration-300 w-full lg:w-auto "
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
