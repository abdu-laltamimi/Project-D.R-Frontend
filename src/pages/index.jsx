

import { font } from "@/fonts";
import Footer from '@/components/footer/Footer';
import Services2 from '@/components/Services2';
import AboutSection from '@/components/AboutUs';
import { Copy } from '@/components/hero/Copy';
import NewsletterCTA from '@/components/email-capture/Booking';
import Image from 'next/image';
import Head from 'next/head';
import Steps from '@/components/Steps';
import Calendly from '@/components/Calendly';
import Careers from '@/components/Careers';
import OurPlans from '@/components/OurPlans';
export default function Home() {
  return (
      <>
    <Head>
        <meta name="description" content="My Maternal Hub|| Providing Midwife And Post-natalServices in Greater Manchester" />
        <meta name="author" content="My Maternal Hub" />
        <meta name="theme-color" content="#27272a" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={`${font.className} min-h-screen bg-[#FFFAFA]`}>

        <Copy />
          <AboutSection />
          {/* <Services2 /> */}
          <Steps />
          <OurPlans />
          <NewsletterCTA />
          <Calendly />
          <Careers />
        <footer>
          
          <Footer />
        </footer>
      </main>
    </>
  );
}


