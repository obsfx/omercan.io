import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics*/}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-10B5E0EP0C"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-10B5E0EP0C');
            `,
          }}
        />
      </Head>
      <body>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
