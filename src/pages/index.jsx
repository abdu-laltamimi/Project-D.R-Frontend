import Head from 'next/head'
import { EmailCapture, Services } from "@/components/email-capture/EmailCapture";
import { FeatureToggles } from "@/components/feature-toggles/FeatureToggles";
import { Supports } from "@/components/supports/Supports";
import { Hero } from "@/components/hero/Hero";
import { Logos } from "@/components/logos/Logos";
import { ExpandableNavBar } from "@/components/navigation/ExpandableNavBar";
import { NAV_LINKS } from "@/components/navigation/constants";
import { Stats } from "@/components/stats/Stats";
import { BenefitsGrid } from "@/components/benefits-grid/BenefitsGrid";
import { font } from "@/fonts";
import { BlogCarousel } from "@/components/blog/BlogCarousel";
import { CTA, FinalCTA } from "@/components/final-cta/FinalCTA";
import { Pricing } from "@/components/pricing/Pricing";
import { AboutUs } from "@/components/AboutUs";
import Example from "@/components/NavBar";
import { RecentProjects } from "@/components/Projects/RecentProjects";
import { WhyChooseUs } from "@/components/Us/WhyChooseUs";
import Footer from '@/components/footer/Footer';

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

      <main className={`${font.className} min-h-screen overflow-hidden bg-zinc-800`}>
        <header>
          <Example />
          <Hero />
        </header>
        
        <section className="space-y-36 bg-zinc-800 pb-24">
          <AboutUs />
          <Services />
        </section>

        <section>
          <WhyChooseUs />
          <FinalCTA />
        </section>

        <section className="max-w-screen-lg mx-auto bg-zinc-800 px-6">
          <RecentProjects />
        </section>
        <footer>
          
          <Footer />
        </footer>
      </main>
    </>
  );
}


