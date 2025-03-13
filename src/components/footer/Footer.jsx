import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiMail } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin'],
  display: 'swap',
});
const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscriptionStatus('loading');

    try {
      const response = await fetch("/api/emailSubs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscriptionStatus('subscribed');
        setEmail(''); // Reset email field
      } else {
        setSubscriptionStatus('error');
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setSubscriptionStatus('error');
    }
  };

  return (
    <footer className="bg-[#0C0C0C] text-white border-neutral-800">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="py-32">
          <motion.div 
            className="mb-32 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`${nunito.className} text-4xl md:text-5xl font-semibold md:mb-8 mb-4`}>
             <span className="text-[#C8A9B9]">Start </span>Your Post-Natal Journey <span className="text-[#6ca3a5]">Today.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-8 gap-2">
            {/* Location & Hours */}
            {/* <motion.div 
              className="md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-sm tracking-widest text-neutral-400 mb-6">VISIT US</h3>
              <div className="space-y-6 text-lg font-light">
                <div>
                  <p>123 Midwifery Lane</p>
                  <p>Birthing Town</p>
                  <p>BT1 2AB</p>
                </div>
                </div>
            </motion.div> */}

            {/* Social Links */}
            <motion.div 
              className="md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-sm tracking-widest text-neutral-400 mb-6">CONTACT US</h3>
              <div className="space-y-4">
                <motion.a 
                  href="mailto:Contact@mymaternalhub.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-lg font-light hover:text-neutral-400 transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  Contact@mymaternalhub.co.uk
                </motion.a>
                <motion.a 
  href="https://wa.me/447746943715?text=Hi%2C%20I%20would%20like%20to%20find%20out%20more%20about%20the%20services%20you%20provide."
  target="_blank" 
  rel="noopener noreferrer"
  className="block text-lg font-light hover:text-neutral-400 transition-colors duration-300"
  whileHover={{ x: 10 }}
>
  +44 7746 943715
</motion.a>
{/* <motion.a 
  href="https://wa.me/447746943715?text=Hi%2C%20I%20would%20like%20to%20find%20out%20more%20about%20the%20services%20you%20provide."
  target="_blank" 
  rel="noopener noreferrer"
  className="block text-lg font-light hover:text-neutral-400 transition-colors duration-300"
  whileHover={{ x: 10 }}
>
  +44 7506 692599
</motion.a> */}
              </div>
            </motion.div>
            <motion.div 
              className="md:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-sm tracking-widest text-neutral-400 mb-6">NEWSLETTER</h3>
              <p className="text-lg font-light mb-6">
                Subscribe for midwifery updates and birthing stories.
              </p>
              {subscriptionStatus === 'subscribed' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500"
                >
                  Thank you for subscribing!
                </motion.div>
              ) : (
                <form className="relative" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-neutral-800 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors"
                    disabled={subscriptionStatus === 'loading'}
                  >
                    {subscriptionStatus === 'loading' ? 'SENDING...' : '→'}
                  </button>
                  {subscriptionStatus === 'error' && (
                    <p className="text-red-500 text-sm mt-2">Failed to subscribe. Please try again.</p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
        <div className="py-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-400 text-center">
            © {new Date().getFullYear()} My Meternal Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;