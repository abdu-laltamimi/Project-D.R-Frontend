import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFAFA" />

        <link rel="apple-touch-icon" sizes="180x180" href="/maternal.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/maternal.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/maternal.ico" />
        <link rel="icon" href="/maternal.ico" />

      </Head>
      <Component {...pageProps} />
    </>
  );
}
