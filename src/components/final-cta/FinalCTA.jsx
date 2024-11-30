import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const FinalCTA = () => {
  return (
    <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="max-w-7xl mx-auto p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life. Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-400 text-black font-medium rounded-lg transition-colors duration-200"
              >
                Get a Free Quote
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
              <Link href="mailto:info@ribacontracting.com" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white hover:text-black font-medium rounded-lg transition-colors duration-200"
              >
                Contact Us
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
  );
};
