import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (props) => (
  <div className="site-wrapper h-screen max-h-full flex flex-col">
    <Header {...props}/>

    {props.children}

    <Footer />
  </div>
);

export default Layout;
