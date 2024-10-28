"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { FileClock, Home, Settings, WalletCards ,Users} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { FaUserFriends } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from next/link

function SideNav() {
    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Leads',
            icon: Users, // Replace with the appropriate icon component
            path: '/dashboard/leads'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/settings'
        },
    ];

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='h-screen p-5 shadow-sm border bg-white'>
            <div className='flex justify-center'>
                <Image src={'/logo.svg'} alt="logo" width={100} height={100} priority />
            </div>
            <hr className='my-6 border' />
            <div className='mt-5'>
                {MenuList.map((menu, index) => (
                    <Link key={index} href={menu.path} passHref>
                        <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer
                            ${path === menu.path ? 'bg-primary text-white' : ''}`}>
                            <menu.icon className='h-7 w-7' />
                            <h2 className='text-lg font-bold'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
