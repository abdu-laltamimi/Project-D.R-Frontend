import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/footer/Footer";

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
    title: "Luxury Bathroom Renovation",
    location: "Manchester, UK",
    service: "Bathroom Remodel",
    description:
      "Complete transformation of an outdated bathroom into a modern luxury space. Features include a walk-in shower, freestanding bathtub, premium fixtures, and elegant tiling throughout.",
    beforeImage: "/beforeBath.jpg",
    afterImage: "/afterBath.jpg",
  },
  {
    title: "Hardwood Flooring Installation",
    location: "Liverpool, UK",
    service: "Flooring",
    description:
      "Installation of premium hardwood flooring throughout the property. This project included subfloor preparation, installation of high-quality oak planks, and a perfect finish with durable sealant.",
    beforeImage: "/beforeFloor.jpg",
    afterImage: "/afterFloor.jpg",
  },
  {
    title: "Loft Insulation & Conversion",
    location: "Manchester, UK",
    service: "Insulation",
    description:
      "Professional loft insulation installation to improve energy efficiency. Project included clearing the space, installing high-performance insulation materials, and ensuring proper ventilation.",
    beforeImage: "/beforeLoft.jpg",
    afterImage: "/afterLoft.jpg",
  },
  {
    title: "Wall Restoration & Damp Proofing",
    location: "Manchester, UK",
    service: "Restoration",
    description:
      "Comprehensive wall restoration project addressing damp issues and structural repairs. Included damp proofing treatment, replastering, and finishing with moisture-resistant paint.",
    beforeImage: "/beforeWall.jpg",
    afterImage: "/afterWall.jpg",
  },
  {
    title: "Complete Roof Replacement",
    location: "Manchester, UK",
    service: "Roofing",
    description:
      "Full roof replacement project including new tiles, underlayment, and guttering system. Enhanced insulation and ventilation were added to improve energy efficiency.",
    beforeImage: "/beforeRoof2.jpg",
    afterImage: "/afterRoof2.jpg",
  },
  {
    title: "Garden Landscaping & Design",
    location: "Manchester, UK",
    service: "Landscaping",
    description:
      "Complete garden transformation featuring new paving, planted borders, and a custom patio area. Project included drainage solutions, lighting installation, and sustainable planting.",
    beforeImage: "/beforeGarden.jpg",
    afterImage: "/afterGarden.jpg",
  },
];

const Projects = () => {
  // Add state to control initial render
  const [isClient, setIsClient] = React.useState(false);

  // Update client-side state after mount
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-gray-100 pt-10">
      <Link href="/" className="absolute top-8 left-8">
        <div className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-medium">Back Home</span>
        </div>
      </Link>

      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <AnimatePresence>
          {isClient && (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold text-center bg-clip-text text-transparent bg-zinc-50"
              >
                Our Projects
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 mt-4 max-w-2xl mx-auto text-center"
              >
                Discover some of the incredible projects we've completed at Riba
                Contracting, showcasing our expertise in renovations,
                refurbishments, and extensions.
              </motion.p>
            </>
          )}
        </AnimatePresence>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.1, 0.5),
                ease: "easeOut",
              }}
              className="group bg-gray-800/50 rounded-md overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Before/After Slider */}
              <div className="relative h-64 overflow-hidden">
                {isClient && (
                  <ComparisonSlider
                    itemOne={{
                      src: project.beforeImage,
                      alt: `Before ${project.title}`,
                      className: "w-full h-64 object-cover"
                    }}
                    itemTwo={{
                      src: project.afterImage,
                      alt: `After ${project.title}`,
                      className: "w-full h-64 object-cover"
                    }}
                    position={50}
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 pointer-events-none"></div>

                {/* Service Tag */}
                <div className="absolute top-4 right-4 bg-[#003d4d] text-white px-3 py-1 rounded-full text-sm">
                  {project.service}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-purple-400 text-sm mb-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {project.location}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="max-w-7xl mx-auto p-8 md:p-12  ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life. Contact
              us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
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
              <Link
                href="mailto:info@ribacontracting.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-zinc-400 hover:text-black font-medium rounded-lg transition-colors duration-200"
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

        {/* Footer */}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
