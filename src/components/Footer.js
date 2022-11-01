const Footer = () => (
    <div className="footer-wrapper
        w-full
        justify-center
        px-1
        py-1">
        <div className="copyright
            flex justify-center
            rounded
            w-full
            bg-white">© {new Date().getFullYear()} Gentlemen's Snuff</div>
    </div>
);

export default Footer;