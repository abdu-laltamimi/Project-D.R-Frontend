import { font } from "@/fonts";
import Footer from '@/components/footer/Footer';
import Services2 from '@/components/Services2';
import AboutSection from '@/components/AboutUs';
import { Copy } from '@/components/hero/Copy';
import NewsletterCTA from '@/components/email-capture/Booking';;
import Head from 'next/head';
import Steps from '@/components/Steps';
import Calendly from '@/components/Calendly';
import Careers from '@/components/Careers';
import OurPlans from '@/components/OurPlans';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Maternal Hub | Midwife & Postnatal Services in Greater Manchester</title>
        <meta name="description" content="Expert midwife and postnatal care services. Compassionate support for new mothers, home visits, and lactation consulting. Book now!" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="My Maternal Hub" />
        <meta name="theme-color" content="#27272a" />


        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="My Maternal Hub" />
        <meta property="og:title" content="My Maternal Hub | Midwife & Postnatal Care in Manchester" />
        <meta property="og:description" content="Providing trusted midwife and postnatal care services. Compassionate and professional support for new mothers." />
        <meta property="og:url" content="https://www.mymaternalhub.co.uk" />
        <meta property="og:image" content="https://www.mymaternalhub.co.uk/images/babyCta.jpeg" />
        <meta property="og:image:alt" content="A caring midwife assisting a newborn baby" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <meta name="twitter:creator" content="@your_twitter_handle" />
        <meta name="twitter:title" content="My Maternal Hub | Midwife & Postnatal Services" />
        <meta name="twitter:description" content="Get expert midwifery and postnatal care. Book a consultation today!" />
        <meta name="twitter:image" content="https://www.mymaternalhub.co.uk/images/babyCta.jpeg" />
        <meta name="twitter:image:alt" content="A caring midwife assisting a newborn baby" />

        <link rel="apple-touch-icon" sizes="180x180" href="/maternal.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/maternal.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/maternal.ico" />
        <link rel="icon" href="/maternal.ico" />



        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />


        <link rel="canonical" href="https://www.mymaternalhub.co.uk" />
      </Head>

      <main className={`${font.className} min-h-screen bg-[#FFFAFA]`}>
        <Copy />
        <AboutSection />
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
