import { font } from "@/fonts";
import Footer from '@/components/footer/Footer';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function SurveyPage() {
  return (
    <>
      <Head>
        <title>Client Survey | My Maternal Hub | Midwife & Postnatal Services</title>
        <meta name="description" content="Share your feedback to help us improve our midwife and postnatal care services. Your input matters!" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="My Maternal Hub" />
        <meta name="theme-color" content="#27272a" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="My Maternal Hub" />
        <meta property="og:title" content="Client Survey | My Maternal Hub" />
        <meta property="og:description" content="Share your feedback to help us improve our midwife and postnatal care services in Greater Manchester." />
        <meta property="og:url" content="https://www.mymaternalhub.co.uk/survey" />
        <meta property="og:image" content="https://www.mymaternalhub.co.uk/images/babyCta.jpeg" />
        <meta property="og:image:alt" content="A caring midwife assisting a newborn baby" />

        <link rel="apple-touch-icon" sizes="180x180" href="/maternal.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/maternal.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/maternal.ico" />
        <link rel="icon" href="/maternal.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link rel="canonical" href="https://www.mymaternalhub.co.uk/survey" />
      </Head>

      <main className={`${font.className} min-h-screen bg-[#FFFAFA]`}>
        {/* Header Section */}

        {/* Survey Content */}
        <section className="container mx-auto py-12 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-roboto mb-3">We Value Your Feedback</h1>
              <p className="text-gray-600 md:text-lg">Your responses help us improve our maternal care services.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Your Google Form Embed */}
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfSfoG-c2Sk6p1IbRQPOHvlQ1Uxxi2RrTayTwbJoOZOt1h0Ew/viewform?embedded=true" 
                width="100%" 
                height="2270" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Thank you for taking the time to share your experience with us!</p>
              <Link href="/" className="inline-block px-6 py-3 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors">
                Return to Home Page
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}