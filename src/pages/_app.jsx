import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* SEO Meta Tags */}
        <title>My Maternal Hub | Midwife & Postnatal Services in Greater Manchester</title>
        <meta 
          name="description" 
          content="Expert midwife and postnatal care services in Greater Manchester. Compassionate support for new mothers, home visits, and lactation consulting. Book now!" 
        />
        <meta 
          name="keywords" 
          content="midwife services Greater Manchester, postnatal care Greater Manchester, maternity support, home birth midwife, lactation consultant, newborn care, postnatal care, postnatal support, postnatal services, postnatal care services, postnatal care in Greater Manchester" 
        />
        <meta name="author" content="My Maternal Hub" />
        <meta name="theme-color" content="#27272a" />
        
        {/* Open Graph (Facebook) Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My Maternal Hub | Midwife & Postnatal Care in Manchester" />
        <meta property="og:description" content="Providing trusted midwife and postnatal care services in Greater Manchester. Compassionate and professional support for new mothers." />
        <meta property="og:url" content="https://mymaternalhub.co.uk" />
        <meta property="og:image" content="https://mymaternalhub.co.uk/images/babyCta.jpeg" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Maternal Hub | Midwife & Postnatal Services" />
        <meta name="twitter:description" content="Get expert midwifery and postnatal care in Greater Manchester. Book a consultation today!" />
        <meta name="twitter:image" content="https://mymaternalhub.co.uk/images/babyCta.jpeg" />

        {/* Favicon & App Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/x-icon" href="/maternal.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://mymaternalhub.co.uk" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
