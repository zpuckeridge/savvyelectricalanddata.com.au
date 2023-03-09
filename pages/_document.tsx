import { Html, Head, Main, NextScript } from "next/document";
import Script form "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script defer data-domain="savvyelectricalanddata.com.au" src="https://analytics.speedy.af/js/script.js" />
      <body className="max-w-6xl mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
