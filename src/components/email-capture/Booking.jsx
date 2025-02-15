import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiChevronUp } from "react-icons/fi";
import Services2 from '@/components/Services2';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin'],
  display: 'swap',
});
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-neutral-200 bg-white last:border-b">
      <motion.button
        className="w-full py-8 flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl md:text-3xl font-light">{question}</span>
        <motion.div
          className={`w-10 h-10 rounded-full md:rounded-full border flex items-center justify-center transition-colors duration-300 ${
            isOpen ? 'bg-[#6ca3a5] border-[#6ca3a5]' : 'border-neutral-200 group-hover:border-neutral-400'
          }`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronUp className={`text-xl transition-colors duration-300 ${
            isOpen ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-600'
          }`} />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-neutral-600 text-lg md:text-xl font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NewsletterCTA = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitted');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const faqItems = [
  //   {
  //     question: "What services do midwives provide?",
  //     answer: "Midwives offer comprehensive care during pregnancy, labor, and postpartum, including prenatal check-ups, labor support, and breastfeeding assistance."
  //   },
  //   {
  //     question: "Can I have a home birth with a midwife?",
  //     answer: "Yes, many midwives provide home birth services. It's important to discuss your birth plan and preferences during your consultations."
  //   },
  //   {
  //     question: "What if I have a high-risk pregnancy?",
  //     answer: "Midwives can work alongside obstetricians to provide care for high-risk pregnancies, ensuring you receive the best support possible."
  //   },
  //   {
  //     question: "Do midwives support natural childbirth?",
  //     answer: "Absolutely! Midwives are trained to support natural childbirth and can provide various pain management techniques."
  //   }
  // ];

  return (
    <section className="bg-[#FFFAFA] text-black">
      {/* Newsletter Section */}
      <div className="py-32 max-w-[1600px] mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Left Column */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32">
              <motion.p 
                className="text-sm tracking-widest text-neutral-500 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* SURVEY */}
              </motion.p>
              <motion.h2 
                className={`${nunito.className} text-4xl md:text-5xl text-neutral-700 mb-6 font-normal`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
<span className="text-[#6CA3A5] font-semibold">Interested</span> in getting to <span className="text-[#C8A9B9] font-semibold">know more?</span>             </motion.h2>
              <motion.p 
                className="text-neutral-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
We're committed to providing the best post-natal care for you and your family. Fill out the form, and let’s connect to explore how our services can support your needs.
  </motion.p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {status === 'submitted' ? (
              <motion.div 
                className="h-full flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-light">Thank you for your message</h3>
                  <p className="text-neutral-600">We'll get back to you soon.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div className="space-y-8">
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-neutral-300 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-neutral-900 transition-colors"
                      required
                    />
                  </motion.div>
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-neutral-300 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-neutral-900 transition-colors"
                      required
                    />
                  </motion.div>
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-transparent border-b border-neutral-300 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-neutral-900 transition-colors"
                      required
                    />
                  </motion.div>
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full bg-transparent border-b border-neutral-300 py-4 text-black placeholder-neutral-500 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                      rows="3"
                      required
                    />
                  </motion.div>
                </motion.div>
                <motion.button
                  type="submit"
                  className="group flex items-center gap-2 text-sm tracking-wider bg-[#003845] hover:bg-[#6CA3A5] hover:text-[#003845] font-normal transition-all duration-300 text-white px-4 py-2 rounded-full"
                  transition={{ duration: 0.3 }}
                >
                  <span>SUBMIT</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
              {/* <Services2 /> */}
      {/* FAQ Section */}
      {/* <div className="py-32 bg-white ">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-6xl md:text-8xl text-center font-light mb-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Questions?
            </motion.h2>
            
            <div className="mb-24">
              {faqItems.map((item, index) => (
                <FAQItem 
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>

            {/* Contact Link */}
            {/* <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-neutral-600 mb-2 text-lg">Still have questions?</p>
              <motion.a
                href="mailto:midwife@myindependentmidwife.co.uk"
                className="text-lg font-light text-black border-b-2 border-transparent hover:border-[#6ca3a5] transition-all duration-300"
                transition={{ duration: 0.3 }}
              >
                Reach out to us
              </motion.a>
            </motion.div> */}
          {/* </motion.div> */}
 
    </section>
  );
};

export default NewsletterCTA;
