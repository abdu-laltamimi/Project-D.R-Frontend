import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="My Maternal Hub|| Providing Midwife Services in Greater Manchester" />
        <meta name="author" content="My Maternal Hub" />
        <meta name="theme-color" content="#27272a" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body className="bg-zinc-900 text-zinc-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
