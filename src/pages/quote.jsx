import Example from "@/components/NavBar";
import React, { useState } from "react";
import Link from "next/link"; // Import Next.js Link for navigation
import Footer from "@/components/footer/Footer";
const Quote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-800 to-zinc-950 text-gray-100 flex flex-col items-center justify-center pt-20">
      {/* Navbar */}
      {/* <Example to="/" /> */}
      <Link href="/" className="absolute top-8 left-8">
        <div className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back Home</span>
        </div>
      </Link>
      {/* Main Container */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-3xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2">
        {/* Left Side - Image & Content */}
        <div className="hidden lg:block relative">
          <img
            src="/mannew.png" // Replace with your image path
            alt="Contact Us"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl font-bold">Capturing Moments, Creating Memories</h2>
            <p className="mt-2 text-gray-300">
              Get in touch today and start your journey with us.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-center">Get a Free Quote</h2>
          <p className="text-gray-400 text-center mt-2">
            Fill in the form below, and we’ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div className="flex gap-4">
              {/* Full Name */}
              <div className="flex-1">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                />
              </div>
              {/* Phone */}
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(123) 456-7890"
                  className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border-white border text-white py-3 px-4 rounded-md hover:bg-white hover:text-black transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>

          {/* Social Login */}

        </div>
      </div>

      {/* Back to Home Button */}
   

      {/* Additional Information */}
      <div className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
        <p className="text-gray-400 mt-4">
          We provide tailored solutions with quick turnarounds. Our team is
          committed to delivering the highest quality service for your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-4 bg-gray-800 rounded-lg shadow">
            <h4 className="text-lg font-bold">Tailored Solutions</h4>
            <p className="text-gray-400 mt-2">
              We craft personalized solutions for each client.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow">
            <h4 className="text-lg font-bold">Quick Turnarounds</h4>
            <p className="text-gray-400 mt-2">
              Your inquiry will be handled swiftly and efficiently.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow">
            <h4 className="text-lg font-bold">Expert Team</h4>
            <p className="text-gray-400 mt-2">
              Work with a team of seasoned professionals.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quote;
