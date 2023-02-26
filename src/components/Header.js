import Logo from '../components/Logo';
import Language_Buttons from '../components/Language_Buttons';

const Header = (props) => (
    <div className="w-full inline-grid grid-cols-2">
        <Logo />
        <Language_Buttons {...props}/>
    </div>
);

export default Header;