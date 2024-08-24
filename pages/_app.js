import 'tailwindcss/tailwind.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    // Website wrapped in div with global color and full viewport
    return (
      <div className="h-screen bg-slate-800">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>My awesome PWA app</title>
          <meta name="description" content="Best PWA app in the world!" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="mask-icon" href="/icons/mask-icon.svg" color="#FFFFFF" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/touch-icon-ipad.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/touch-icon-iphone-retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/touch-icon-ipad-retina.png"
          />
          <link rel="manifest" href="/public/manifest.json" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://yourdomain.com" />
          <meta name="twitter:title" content="My awesome PWA app" />
          <meta name="twitter:description" content="Best PWA app in the world!" />
          <meta name="twitter:image" content="/icons/twitter.png" />
          <meta name="twitter:creator" content="@DavidWShadow" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="My awesome PWA app" />
          <meta property="og:description" content="Best PWA app in the world!" />
          <meta property="og:site_name" content="My awesome PWA app" />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta property="og:image" content="/icons/og.png" />
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
  
  export default MyApp