import React, { useState } from 'react';
// asset imports
import logo from '../assets/logo.webp'
import tiktok from '../assets/tiktok.webp'
import instagram from '../assets/gram.webp'
import xtwitter from '../assets/x.webp'
import snapchat from '../assets/snapchat.webp'
import flag from '../assets/flag.webp'
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-transparent text-white p-4 absolute top-0 left-0 right-0 z-20 ">
            {/* Web NavBar */}
            <div className="flex justify-between items-center md:px-24 px-1">
                <img src={logo} className='max-w-full h-auto' alt="The Groves" />
                <div className="md:hidden ml-20">
                    <button onClick={toggleMenu} className="text-mainColor text-3xl focus:outline-none">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
                <div>
                    <div className="hidden md:flex items-center gap-6">
                        <img src={tiktok} className='w-6 h-6' alt="Tiktok" />
                        <img src={instagram} className='w-6 h-6' alt="instagram" />
                        <img src={xtwitter} className='w-6 h-6' alt="xtwitter" />
                        <img src={snapchat} className='w-6 h-6' alt="snapchat" />

                        <button className='main-cta'>Log in</button>

                        <i class="fa-solid fa-angle-down text-white text-lg"></i>
                        <img src={flag} className='w-8 h-6' alt="English" />
                        <h4 className='text-white'>English</h4>
                    </div>
                </div>
            </div>
            {/* Nav items */}
            <div className="hidden md:block w-full border-t-[1px] border-b-[1px] border-white mt-4">
                <div className="flex justify-center items-center gap-24 py-4">
                    <a href="" className='text-white'>DINE WITH US</a>
                    <a href="" className='text-white'>PLAN YOUR VISIT</a>
                    <a href="" className='text-white'>EVENTS</a>
                    <a href="" className='text-white'>VIEW GROVES MAP</a>
                    <a href="" className='text-white'>OUR STORY</a>
                    <a href="" className='text-white'>CONTACT US</a>
                </div>
            </div>
            {/* Off-canvas menu */}
            <div className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gradient-to-r from-[#283606] to-[#0F1500] md:hidden`}>
                <div className="p-3">
                    <div className='flex justify-between px-2'>
                        <img src={logo} className='max-w-full h-auto' alt="The Groves" />
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <i class="fa-solid fa-xmark text-mainColor text-4xl"></i>
                        </button>
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-1 text-sm ">
                    <a href="" className='text-white my-2 border-t-[1px] border-white py-2 px-6 '>DINE WITH US</a>
                    <a href="" className='text-white my-2 border-t-[1px] border-white py-2 px-6'>PLAN YOUR VISIT</a>
                    <a href="" className='text-white my-2 border-t-[1px] border-white py-2 px-6'>EVENTS</a>
                    <a href="" className='text-white my-2 border-t-[1px] border-white py-2 px-6'>VIEW GROVES MAP</a>
                    <a href="" className='text-white my-2 border-t-[1px] border-white py-2 px-6'>OUR STORY</a>
                    <a href="" className='text-white my-2 border-t-[1px] border-b-[1px] border-white py-4 px-6'>CONTACT US</a>
                    <div className='flex justify-start gap-3 items-center px-6 mt-4'>
                        <i class="fa-solid fa-angle-down text-white text-lg"></i>
                        <img src={flag} className='w-8 h-6' alt="English" />
                        <h4 className='text-white'>English</h4>
                    </div>
                    <div className='px-6 mt-4'>
                        <button className='bg-gradient-to-b from-[#AD8749] to-[#DCBB75] py-4 px-8 w-32 text-white rounded-2xl'>Log in</button>
                    </div>
                    <div className='mt-20 px-6 flex justify-start gap-3'>
                        <img src={tiktok} className='w-6 h-6' alt="Tiktok" />
                        <img src={instagram} className='w-6 h-6' alt="instagram" />
                        <img src={xtwitter} className='w-6 h-6' alt="xtwitter" />
                        <img src={snapchat} className='w-6 h-6' alt="snapchat" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
