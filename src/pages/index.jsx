import Head from 'next/head'
import dynamic from 'next/dynamic';
import { Hero } from "@/components/hero/Hero";
import Example from "@/components/NavBar";
import { font } from "@/fonts";
import Footer from '@/components/footer/Footer';
import Carousel2 from '@/components/Utils/Carousel2';
import Services2 from '@/components/Services2';
import { Booking } from '@/components/email-capture/Booking';
import AboutSection from '@/components/AboutUs';

const Services = dynamic(() => import('@/components/email-capture/EmailCapture').then(mod => mod.Services), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

const WhyChooseUs = dynamic(() => import('@/components/Us/WhyChooseUs').then(mod => mod.WhyChooseUs), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

const RecentProjects = dynamic(() => import('@/components/Projects/RecentProjects').then(mod => mod.RecentProjects), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

const FinalCTA = dynamic(() => import('@/components/final-cta/FinalCTA').then(mod => mod.FinalCTA), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

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
        
        {/* Favicon */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>

      <main className={`${font.className} min-h-screen bg-white`}>
        <header>
          {/* <Example /> */}
          <Hero />
        </header>
          <AboutSection />
          <Booking />
          <Services2 />
          {/* <Services /> */}

          <Carousel2 />
          <WhyChooseUs />
          {/* <FinalCTA /> */}



          <RecentProjects />
        <footer>
          
          <Footer />
        </footer>
      </main>
    </>
  );
}


