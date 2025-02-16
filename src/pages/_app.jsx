import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
      <meta name="description" content="My Maternal Hub|| Providing Midwife And Post-natal Services in Greater Manchester" />
        <meta name="author" content="My Maternal Hub" />
        <meta name="theme-color" content="#27272a" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
