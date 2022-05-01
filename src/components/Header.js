import Logo from '../components/Logo';
import Language_Buttons from '../components/Language_Buttons';

const Header = () => (
    <div className="w-full inline-grid grid-cols-2">
        <Logo />
        <Language_Buttons />
    </div>
);

export default Header;