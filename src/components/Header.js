import Logo from '../components/Logo';
import Language_Buttons from '../components/Language_Buttons';
import Link from 'next/link';

const Header = () => (
    <div className="headerWrapper">
        <Logo />
        <Link href={{pathname: "/add"}}><a>Add</a></Link>
        <Language_Buttons />
    </div>
);

export default Header;