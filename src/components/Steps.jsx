import { Nunito } from 'next/font/google';
import { FaLaptop, FaUser, FaGlobe, FaComments, FaCalendarAlt, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';
const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin'],
  display: 'swap',
});

const steps = [
  { icon: <FaLaptop size={40} className="text-[#6CA3A5]" />, title: 'Step 1', description: 'Go to the website' },
  { icon: <FaUser size={40} className="text-[#6CA3A5]" />, title: 'Step 2', description: 'Create an account or log in' },
  { icon: <FaGlobe size={40} className="text-[#6CA3A5]" />, title: 'Step 3', description: 'Search for professionals in your area & check their availability' },
  { icon: <FaComments size={40} className="text-[#6CA3A5]" />, title: 'Step 4', description: 'Make contact with professionals and discuss requirements' },
  { icon: <FaCalendarAlt size={40} className="text-[#6CA3A5]" />, title: 'Step 5', description: 'Confirm a plan and arrange a start date' },
  { icon: <FaHome size={40} className="text-[#6CA3A5]" />, title: 'Step 6', description: 'Professional arrives at your home!' },
];

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


const Steps = () => {
  return (
    <section className="py-48 px-8 rounded-lg bg-white">
      <div className="max-w-[1440px] mx-auto text-center">
        <motion.h3
         variants={fadeInUp}
         initial="hidden"
         animate="visible"
         custom={0.4}
          className={`${nunito.className} text-4xl md:text-5xl max-w-5xl mx-auto text-neutral-800 font-semibold mb-12`}
        >
          An Easy Journey To Post-natal Care <span className="text-[#C8A9B9]">In Your Home</span>
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 md:gap-12 text-center ">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col transition-all duration-300 items-center hover:text-neutral-900 hover:scale-105">
              {step.icon}
              <h4 className={`${nunito.className} mt-4 md:text-3xl text-xl font-semibold text-neutral-700 `}>{step.title}</h4>
              <p className={`${nunito.className} mt-2 text-neutral-800 text-md max-w-[1440px]`}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
