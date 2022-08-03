import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
    // Website wrapped in div with global color and full viewport
    return (
    <div className="h-screen bg-slate-800">
      <Component {...pageProps} />
    </div>
    );
  }
  
  export default MyApp