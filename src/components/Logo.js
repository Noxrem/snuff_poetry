import Link from 'next/link';

const Logo = () => (
    <div className="logo flex justify-self-start bg-white rounded m-1 p-3">
        <Link href="/" className="justify-self-center">
            <a className="text-slate-800 font-bold">
                Gentlemen's Snuff
            </a>
        </Link>
    </div>
);

export default Logo;