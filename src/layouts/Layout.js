import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = props => (
  <div className="site-wrapper h-screen flex flex-col">
    <Header />

    {props.children}

    <Footer />
  </div>
);

export default Layout;
