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
      <Head>
        <title>Your Company Name - Web Development & Design Services</title>
        <meta name="description" content="Professional web development and design services. Custom websites, web applications, and digital solutions for your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Standard meta tags */}
        <meta charSet="utf-8" />
        <meta name="author" content="Your Company Name" />
        <meta name="theme-color" content="#27272a" /> {/* matches zinc-800 */}
        
      </Head>

      <main className={`${font.className} min-h-screen bg-white`}>

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


