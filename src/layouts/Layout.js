import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = props => (
  <div className="site-wrapper flex flex-col h-full">
    <Header />

    {props.children}

    <Footer />
  </div>
);

export default Layout;
