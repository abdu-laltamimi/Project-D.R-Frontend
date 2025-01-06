import React, { useState } from "react";

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Hassle-Free Experience",
      description:
        "We take care of everything – from planning permissions to final handover. One team. One goal. No stress.",
      icon: "✅",
    },
    {
      title: "Guaranteed Quality",
      description:
        "We stand by our work with a 2-year guarantee (subject to T&Cs), ensuring peace of mind long after your project is complete.",
      icon: "🛠️",
    },
    {
      title: "Fully Insured & Protected",
      description:
        "Your project is in safe hands. We’re fully insured, giving you total confidence at every stage.",
      icon: "🛡️",
    },
    {
      title: "Expert In-House Team",
      description:
        "Our team of skilled engineers, project managers, and consultants delivers precision, quality, and reliability on every job.",
      icon: "👷",
    },
    {
      title: "End-to-End Solutions",
      description:
        "From design and approvals to construction and completion, we manage the entire process – saving you time and hassle.",
      icon: "📜",
    },
    {
      title: "Tailored for You",
      description:
        "We focus on understanding your needs, ensuring results that match your vision and exceed expectations.",
      icon: "🎯",
    },
    {
      title: "Trusted Industry Specialists",
      description:
        "Through our partnerships with leading specialists, we guarantee accuracy, compliance, and the highest standards of work.",
      icon: "🔗",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-zinc-800 text-white py-24 px-6 md:px-16">
      <h2 className="text-4xl text-center md:text-5xl font-bold mb-8">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column (Image) */}
        <div
          className="h-[600px] w-full overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url('7.png')`, // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>

        {/* Right Column (Accordion) */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-zinc-700 rounded-lg overflow-hidden"
            >
              {/* Accordion Header */}
              <div
                className="flex items-center justify-between px-6 py-4 cursor-pointer bg-zinc-900 hover:bg-zinc-700 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{feature.icon}</span>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                </div>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Accordion Content */}
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-400">
                  {feature.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
