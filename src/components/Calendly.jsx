import { useState } from 'react';
import { Nunito } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin'],
  display: 'swap',
});

const Calendly = () => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState({ loading: false, error: null, success: false });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    journeyStage: '',
    services: [],
    budget: '',
    weeklyHours: '',
    considerations: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit booking. Please try again.');
      }
      
      setStatus({ loading: false, error: null, success: true });
      setFormData({
        fullName: '',
        email: '',
        journeyStage: '',
        services: [],
        budget: '',
        weeklyHours: '',
        considerations: []
      });
      setStep(1);
    } catch (error) {
      setStatus({ 
        loading: false, 
        error: error.message || 'Something went wrong. Please try again.', 
        success: false 
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMultiSelect = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked 
        ? [...prev[name], value]
        : prev[name].filter(item => item !== value)
    }));
  };

  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const transition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div>
            <div className="mb-4">
              <label className={`${nunito.className} block text-gray-700 text-sm font-bold mb-2`} htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#6CA3A5]"
                required
              />
            </div>

            <div className="mb-4">
              <label className={`${nunito.className} block text-gray-700 text-sm font-bold mb-2`} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#6CA3A5]"
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="mb-4">
              <label className={`${nunito.className} block text-gray-700 text-sm font-bold mb-2`} htmlFor="journeyStage">
                What stage are you at in your journey of looking for private in-home midwifery services?
              </label>
              <select
                name="journeyStage"
                value={formData.journeyStage}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#6CA3A5]"
                required
              >
                <option value="">Select an option</option>
                <option value="exploring">Just exploring options</option>
                <option value="ready">Ready to book a consultation</option>
                <option value="comparing">Comparing different providers</option>
                <option value="immediate">Looking for immediate support</option>
              </select>
            </div>

            <div className="mb-4">
              <label className={`${nunito.className} block text-gray-700 text-sm font-bold mb-2`} htmlFor="services">
                What specific services are you interested in?
              </label>
              <div className="space-y-2">
                {['Breastfeeding support', 'Helping the baby sleep', 
                  'Looking after the baby in your home while you rest', 
                  'Bathing the baby', 'C-section care and support', 'Other'
                ].map((service) => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service}
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleMultiSelect}
                      className="mr-2"
                    />
                    <label htmlFor={service}>{service}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="mb-4">
              <label className={`${nunito.className} block text-gray-700 text-sm font-bold mb-2`} htmlFor="budget">
                Based on the hourly rate of £45-60, what budget do you expect to spend in total?
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#6CA3A5]"
                required
              >
                <option value="">Select a budget</option>
                <option value="1000">£1,000</option>
                <option value="1500">£1,500</option>
                <option value="2000">£2,000</option>
                <option value="3000">£3,000</option>
              </select>
            </div>

            <div className="mb-4">
              <label className={`${nunito.className} block text-gray-700 text-sm font-bold mb-2`} htmlFor="weeklyHours">
                How many hours a week do you think you would require the service?
              </label>
              <select
                name="weeklyHours"
                value={formData.weeklyHours}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#6CA3A5]"
                required
              >
                <option value="">Select hours per week</option>
                <option value="2x2">2 visits a week for 2 hours each</option>
                <option value="3x2">3 visits a week for 2 hours each</option>
                <option value="5x1.5">5 days a week for 1.5 hours each</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
                <label className={`${nunito.className} block text-gray-700 text-sm font-bold mb-2`} htmlFor="considerations">
                Main factors for choosing a midwifery provider:
              </label>
              <div className="space-y-2">
                {['Experience', 'Location from you', 'Price'].map((factor) => (
                  <div key={factor} className="flex items-center">
                    <input
                      type="checkbox"
                      id={factor}
                      name="considerations"
                      value={factor}
                      checked={formData.considerations.includes(factor)}
                      onChange={handleMultiSelect}
                      className="mr-2"
                    />
                    <label htmlFor={factor}>{factor}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (status.success) {
    return (
      <div className="py-20 md:px-8 px-2">
        <div className="max-w-[1500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
          >
            <div className="text-[#6CA3A5] text-5xl mb-4">✓</div>
            <h3 className={`${nunito.className} text-2xl font-semibold mb-4 text-[#6CA3A5]`}>
              Thank You for Your Booking Request!
            </h3>
            <p className="text-gray-600 mb-6">
              We've received your consultation request and will get back to you shortly.
            </p>
            <button
              onClick={() => setStatus({ loading: false, error: null, success: false })}
              className="bg-[#6CA3A5] text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-[#5b8a8c] transition-colors"
            >
              Submit Another Request
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  const renderFormButtons = () => (
    <motion.div 
      className="flex justify-between pt-4 mt-4 border-t border-gray-100"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {step > 1 && (
        <motion.button
          type="button"
          onClick={prevStep}
          disabled={status.loading}
          className="bg-gray-50 text-gray-700 font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          Back
        </motion.button>
      )}
      <motion.button
        type="submit"
        disabled={status.loading}
        className={`${step === 1 ? 'w-full' : 'ml-auto'} bg-[#6CA3A5] text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-[#5b8a8c] transition-colors disabled:opacity-50 flex items-center justify-center`}
        whileHover={{ scale: status.loading ? 1 : 1.02 }}
        whileTap={{ scale: status.loading ? 1 : 0.98 }}
      >
        {status.loading ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          step === 3 ? 'Submit' : 'Next'
        )}
      </motion.button>
    </motion.div>
  );

  const renderError = () => (
    status.error && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm"
      >
        {status.error}
      </motion.div>
    )
  );

  return (
    <div className="py-20 md:px-8 px-2">
      <div className="flex flex-col md:flex-row items-start gap-12 max-w-[1500px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full xl:w-1/2 text-center md:text-left "
        >
          <h3 className={`${nunito.className} text-5xl md:text-6xl text-[#6CA3A5] font-semibold mb-4`}>
            Book a <span className="text-[#c8a9b9] font-semibold">Consultation.</span>
          </h3>
          <p className="text-lg text-black mb-6 md:text-left text-center">
            Tell us about your needs and we'll get back to you to schedule a consultation.
          </p>
          <p className="text-sm text-gray-600">
            We are here to provide personalized guidance and care at your convenience.
          </p>
        </motion.div>
        
        <div className="w-full xl:w-1/2">
          <form 
            onSubmit={step === 3 ? handleSubmit : nextStep} 
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-[500px] flex flex-col"
          >
            {renderError()}
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                <div className="flex items-center">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center">
                      <motion.div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step >= num ? 'bg-[#6CA3A5] text-white' : 'bg-gray-100 text-gray-400'
                        }`}
                        initial={false}
                        animate={{
                          scale: step === num ? 1.1 : 1,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {num}
                      </motion.div>
                      {num < 3 && (
                        <motion.div 
                          className="w-12 h-1 bg-gray-100"
                          initial={false}
                          animate={{
                            backgroundColor: step > num ? '#6CA3A5' : '#f3f4f6'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence mode="wait" initial={false} custom={step}>
                <motion.div
                  key={step}
                  custom={step}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="absolute inset-0 pr-4 custom-scrollbar overflow-y-auto"
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>
            {renderFormButtons()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Calendly;