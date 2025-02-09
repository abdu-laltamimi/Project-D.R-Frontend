import Head from 'next/head'
import dynamic from 'next/dynamic';

import { font } from "@/fonts";
import Footer from '@/components/footer/Footer';
import Services2 from '@/components/Services2';
import AboutSection from '@/components/AboutUs';
import { Copy } from '@/components/hero/Copy';
import NewsletterCTA from '@/components/email-capture/Booking';


export default function Home() {
  return (
    <>


      <main className={`${font.className} min-h-screen bg-[#FFFAFA]`}>

        <Copy />
          <AboutSection />
          <Services2 />
          <NewsletterCTA />
   
        <footer>
          
          <Footer />
        </footer>
      </main>
    </>
  );
}


