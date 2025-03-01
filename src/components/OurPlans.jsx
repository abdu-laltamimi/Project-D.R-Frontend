import React from 'react';
import { motion } from 'framer-motion';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin'],
  display: 'swap',
});

const OurPlans = () => {
  return (
    <section className="py-32 bg-[#FFFAFA] text-black">
      <div className={`${nunito.className} max-w-[1400px] mx-auto px-6`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <motion.h2 
            className="text-6xl text-left md:text-center md:text-7xl font-normal text-[#6CA3A5]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Care <span className="text-[#c8a9b9] font-semibold">Plans.</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 md:px-24 md:gap-16 xl:gap-26 gap-8">
          {[
            // {
            //   title: "Premium Care",
            //   features: [
            //     "Weekly scheduled visits",
            //     "3-hour care sessions",
            //     "Dedicated care professional",
            //     "Comprehensive support plan",
            //     "Priority scheduling"
            //   ]
            // },
            {
              title: "On-Demand Care",
              features: [
                "You decide what you need",
                "Flexible hourly booking",
                "Pricing depends on the hours",
                "Book in 1 hour slots"
              ],
              highlight: true
            },
            {
              title: "Packaged Care",
              features: [
                "Tailored care plan to your needs",
                "Flexible hours",
                "Pricing depends on the packaged plan",
                "Hours depend on the package"
              ]
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl p-8 shadow-2xl hover:shadow-xl transition-all duration-300 ${
                plan.highlight ? 'border-2 border-[#6CA3A5] shadow-[0px_0.1px_0px_0.2px_#6CA3A5]' : ''
              }`}
            >
              <h3 className={`text-2xl font-normal ${
                plan.highlight ? 'text-[#c8a9b9]' : 'text-[#6CA3A5]'
              } mb-6`}>{plan.title}</h3>
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <p key={idx} className="text-neutral-600 flex items-center">
                    <span className="text-[#c8a9b9] mr-2">✓</span>
                    {feature}
                  </p>
                ))}
              </div>
              <button 
                className="w-full bg-[#6CA3A5] text-white py-3 px-6 rounded-lg hover:bg-[#5b8a8c] transition-colors duration-300"
                onClick={() => {
                  const message = encodeURIComponent(
                    `Hi, I would like to find out more about your ${plan.title}`
                  );
                  window.open(`https://wa.me/447506692599?text=${message}`, '_blank');
                }}
              >
                Find Out More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPlans;
