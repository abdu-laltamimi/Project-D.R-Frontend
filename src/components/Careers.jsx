import { Nunito } from 'next/font/google';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

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

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch("/api/joinMidwives", { // Calls the backend API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('submitted');
        setFormData({ fullName: '', email: '', phone: '', message: '' }); // Reset form fields
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          className="bg-white rounded-2xl bg-opacity-10 backdrop-blur-[3px] p-8 md:p-8 w-[90%] sm:w-[70%] md:w-[45%] lg:w-[35%]  mx-auto md:mx-auto shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`${nunito.className} text-3xl font-bold md:text-white text-[#003845] mb-4`}>
            Join Our Team
          </h2>
          <p className="md:text-neutral-200 text-black text-md mb-6">
            If you're a qualified midwife and looking for flexible work, fill out the form below.
          </p>

          {status === 'submitted' ? (
            <motion.div 
              className="h-full flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-light text-black md:text-white">Thank you for your application!</h3>
                <p className="text-neutral-600 md:text-neutral-200">We will review your details and get back to you.</p>
              </div>
            </motion.div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4356] bg-white"
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4356] bg-white"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4356] bg-white"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D4356] bg-white"
                required
              ></textarea>

              <button
                type="submit"
                className="px-6 py-2 bg-[#003845] text-white rounded-full hover:bg-zinc-800 transition-colors duration-300 w-full lg:w-auto "
              >
                {status === 'loading' ? "SENDING..." : "Submit"}
              </button>

              {status === 'error' && (
                <p className="text-red-600 mt-2">Failed to send application. Please try again.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
