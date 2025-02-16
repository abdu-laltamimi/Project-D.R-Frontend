import { InlineWidget } from "react-calendly";
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  subsets: ['latin'],
  display: 'swap',
});
const Calendly = () => {
  return (
    <div className=" py-20 px-8 ">
    <div className="flex flex-col md:flex-row items-center gap-12 max-w-8xl mx-auto">
      <div className="w-full xl:w-1/2 text-center md:text-left ">
        <h3 className={`${nunito.className} text-4xl md:text-6xl text-[#6CA3A5] font-semibold mb-4`}>Book a <span className="text-[#c8a9b9] font-semibold">Consultation.</span>

        </h3>
        <p className="text-lg text-black mb-6 md:text-left text-center">
          Schedule a 15-minute session with us to discuss how we can support you on your journey.
        </p>
        <p className="text-sm text-white opacity-75">We are here to provide personalized guidance and care at your convenience.</p>
      </div>
      <div className="w-full xl:w-1/2 rounded-lg overflow-hidden">
        <InlineWidget url="https://calendly.com/abdul-alt-seamlessideas/30min?hide_gdpr_banner=1" styles={{ width: "100%", height: "600px" }} pageSettings={{ hideEventTypeDetails: false, backgroundColor: "#FFFAFA",   }} />
      </div>
    </div>
  </div>
  );
};

export default Calendly;