import React from "react";

export const WhyChooseUs = () => {
    const features = [
        {
          title: "Tailored Renovations",
          description:
            "We specialize in bespoke renovations designed to meet your unique needs, combining creativity and craftsmanship.",
        },
        {
          title: "Architectural Excellence",
          description:
            "Our team collaborates with top architects to deliver structurally sound and visually stunning results.",
        },
        {
          title: "Innovative Designs",
          description:
            "From modern concepts to timeless styles, our designs focus on functionality and elegance for every project.",
        },
        {
          title: "Commitment to Quality",
          description:
            "With attention to detail and premium materials, we ensure your space reflects the highest standards of quality.",
        },
      ];
      

  return (
    <section className="bg-zinc-800 text-white py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column (Image) */}
        <div
          className="h-[400px] border border-[#006b8e] overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url('stairs.jpg')`, // Replace with your image path
            backgroundSize: "contain",
            // backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        ></div>



        {/* Right Column (Features List) */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
