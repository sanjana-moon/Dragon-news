import Link from 'next/link';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center container mx-auto gap-4'>
            <div></div>
            <ul className='flex justify-between items-center gap-4 text-gray-700'>
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about-us"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>

            <div className='flex items-center gap-2'>
                <Image 
                src={userAvatar}
                alt='Avatar'
                height={60}
                width={60}/>
                <button className='btn bg-gray-900 text-white'><Link href={'/login'}>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;