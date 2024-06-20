import Header from '../components/Header';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/react";  // Adding Vercel analytics

const Layout = (props) => (
  <div className="site-wrapper h-screen max-h-full flex flex-col">
    <Header {...props}/>

    {props.children}
    <Analytics/>
    <Footer />
  </div>
);

export default Layout;
