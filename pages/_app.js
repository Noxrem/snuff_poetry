import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
    // Website wrapped in div with global color and full viewport
    return (
      <div>
        <Component {...pageProps} />
      </div>
    );
  }
  
  export default MyApp