import React from "react";
import Link from "next/link";

export const Services = () => {
  return (
    <section className=" text-white px-6 md:px-16">
      <div className="relative grid grid-cols-1 md:grid-cols-2">
        {/* Left Column (Image with Gradient Overlay) */}
        <div
          className="col-span-1 relative h-[50vh] md:h-[70vh] overflow-hidden shadow-xl"
          style={{
            backgroundImage: `url('4.png')`, // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
        </div>

        {/* Right Column (Text Content) */}
        <div className="col-span-1 z-10 flex flex-col justify-center text-left p-6 md:p-10">
          <h2 className="text-4xl md:text-5xl font-extrabold pb-4 leading-tight">
            Hassle-Free Planning to Completion – From Dream to Reality
          </h2>
          <p className="text-lg md:text-xl leading-relaxed font-light mb-4">
            At RIBA Contracting, we make construction simple and stress-free.
            With our dedicated in-house team of engineers, project managers, and
            planning specialists, we take care of everything – from securing
            planning permissions and approvals to delivering a flawless final
            build.
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-light mb-4">
            We collaborate with industry experts and work closely with you to
            transform your vision into reality – on time, on budget, and without
            the hassle. At RIBA Contracting, your project is handled seamlessly
            from start to finish.
          </p>
          <p className="text-lg md:text-xl font-semibold text-zinc-300 leading-relaxed">
            Let us manage the hard work – you enjoy the results.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <button className="px-6 py-3 bg-white  text-zinc-900 hover:bg-zinc-700 hover:text-white text-lg font-semibold rounded-full shadow-lg transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
