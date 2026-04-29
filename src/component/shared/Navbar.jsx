'use client'
import Link from 'next/link';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    return (
        <div className='flex justify-between items-center container mx-auto gap-4 py-5'>
            <div></div>
            <ul className='flex justify-between items-center gap-4 text-gray-700'>
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about-us"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>

            {isPending ? <span className="loading loading-spinner loading-lg"></span> :
                user ? <div className='flex items-center gap-2'>
                    <p>Hello, {user.name}</p>
                    <Image
                        src={user.image || userAvatar}
                        alt='Avatar'
                        height={60}
                        width={60} 
                        className='rounded-full h-auto'/>
                    <button onClick={async()=> await authClient.signOut()} className='btn bg-gray-900 text-white'>Logout</button>
                </div> :
                    <button className='btn bg-gray-900 text-white'><Link href={'/login'}>Login</Link></button>
            }
        </div>
    );
};

export default Navbar;