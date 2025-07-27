import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
    <div className="logo flex justify-self-start bg-white rounded m-1 p-3">
        <Image className="mx-1" src="/logo.png" width={32} height={32} alt='Priise.ch Logo'/>
        <Link href="/" className="font-bold text-2xl">
                PRIISE.ch
        </Link>
    </div>
);

export default Logo;