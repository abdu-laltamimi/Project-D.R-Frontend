import React, { useState } from 'react';
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from 'framer-motion';
import { ChevronRight, Phone, Mail, ArrowRight } from 'lucide-react';
import Footer from '@/components/footer/Footer';
import Navbar from "@/components/NavBar";

// Dynamically import ReactCompareSlider with no SSR
const ComparisonSlider = dynamic(
  () =>
    import("react-compare-slider").then((mod) => {
      const { ReactCompareSlider, ReactCompareSliderImage } = mod;
      return function Comparison(props) {
        return (
          <ReactCompareSlider
            {...props}
            itemOne={<ReactCompareSliderImage {...props.itemOne} />}
            itemTwo={<ReactCompareSliderImage {...props.itemTwo} />}
          />
        );
      };
    }),
  { ssr: false }
);

const projectsData = [
  {
    title: "Floor Revamp",
    category: "Interior",
    description: "A comprehensive renovation project transforming an outdated property into a modern, functional home.",
    beforeImage: "/beforeFloor.jpg",
    afterImage: "/afterFloor.jpg",
  },
  {
    title: "Luxury Bathroom Refurbishment",
    category: "Bathroom",
    description: "Elegant refurbishment of a bathroom with premium fixtures and a spa-inspired design.",
    beforeImage: "/beforeBath.jpg",
    afterImage: "/afterBath.jpg",
  },
  {
    title: "Mini Extension",
    category: "Extension",
    description: "Tailored kitchen renovation featuring modern appliances and bespoke finishes.",
    beforeImage: "/beforeRoof2.jpg",
    afterImage: "/afterRoof2.jpg",
  },
  {
    title: "Loft Insulation & Conversion",
    category: "Conversion",
    description: "Maximized living space by converting unused areas into stylish, functional rooms.",
    beforeImage: "/beforeLoft.jpg",
    afterImage: "/afterLoft.jpg",
  },
  {
    title: "Luxury Bathroom Refurbishment",
    category: "Bathroom",
    description: "Elegant refurbishment of a bathroom with premium fixtures and a spa-inspired design.",
    beforeImage: "/beforeBath2.jpg",
    afterImage: "/afterBath2.jpg",
  },
  {
    title: "Roof Restoration",
    category: "Interior",
    description: "Converted a previously unused basement into a functional living area with a contemporary design.",
    beforeImage: "/beforeRoof.jpg",
    afterImage: "/afterRoof.jpg",
  },
  {
    title: "Luxury Bathroom Refurbishment",
    category: "Bathroom",
    description: "Elegant refurbishment of a bathroom with premium fixtures and a spa-inspired design.",
    beforeImage: "/beforeBath3.png",
    afterImage: "/afterBath3.png",
  },
  {
    title: "Luxury Kitchen Refurbishment",
    category: "Interior",
    description: "Elegant refurbishment of a kitchen with premium fixtures and a spa-inspired design.",
    beforeImage: "/beforeKitchen2.png",
    afterImage: "/afterKitchen2.png",
  },
  {
    title: "Loft Conversion",
    category: "Conversion",
    description: "Maximized living space by converting unused areas into stylish, functional rooms.",
    beforeImage: "/beforeLoft2.png",
    afterImage: "/afterLoft2.png",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <div className="pt-24"> </div>
      {/* Hero Section */}
      <section className="relative pt-24">
        <div className="absolute inset-0 " />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Transforming Spaces
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Discover our portfolio of stunning renovations and transformations that bring dreams to reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-zinc-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-72">
                  <ComparisonSlider
                    itemOne={{
                      src: project.beforeImage,
                      alt: `Before ${project.title}`,
                      className: "w-full h-full object-cover",
                    }}
                    itemTwo={{
                      src: project.afterImage,
                      alt: `After ${project.title}`,
                      className: "w-full h-full object-cover",
                    }}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <div className="absolute top-4 right-4 bg-zinc-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  {/* <button className="mt-4 flex items-center text-sm font-medium text-red-500 hover:text-red-400 transition-colors">
                    View Details <ChevronRight className="w-4 h-4 ml-1" />
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 " />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's bring your vision to life. Our team of experts is ready to help you transform your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group flex items-center justify-center px-8 py-4 text-black bg-zinc-200 hover:bg-zinc-600 hover:text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-zinc-600/25"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex gap-4">
                <Link
                  href="tel:+1234567890"
                  className="flex items-center justify-center px-6 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                </Link>
                <Link
                  href="mailto:info@ribacontracting.com"
                  className="flex items-center justify-center px-6 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default Projects;