import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
    // Website wrapped in div with global color and full viewport
    return (
      <div className='flex justify-center'>
        <Component {...pageProps} />
      </div>
    );
  }
  
  export default MyApp