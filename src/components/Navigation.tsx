'use client'
import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import { AnimatePresence } from 'framer-motion'
const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {

            const scrollY = document.documentElement.scrollTop || window.scrollY;
            const isMobile = window.innerWidth <= 640;

            if (scrollY > 70 || isMobile) {
                setShowMenu(true);

            } else {
                setShowMenu(false);
                setMenuOpen(false);
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className='fixed right-0 top-0 z-[102] max-w-[100vw] '>
            <div className='absolute right-0 max-w-[100vw]'>
                <button
                    className={`absolute flex flex-col items-center justify-center z-30 right-0 mr-6 mt-6 rounded-full bg-customBlue transition-width transition-height ease-in-out duration-500 ${(showMenu) ? ' w-[60px] h-[60px]' : ' w-0 h-0'}`}
                    onClick={toggleMenu}
                >
                    <div className={`h-[2px]  w-[32px] transition-rotate ease-in-out duration-500 bg-white ${menuOpen ? 'rotate-45 mb-[-2px]' : 'mb-2'}`}>
                    </div>
                    <div className={`h-[2px] w-[32px] transition-rotate ease-in-out duration-500  bg-white ${menuOpen ? 'rotate-[135deg]' : ''}`}>
                    </div>
                </button>

                <AnimatePresence mode="wait">
                    {menuOpen && <Nav toggleMenu={toggleMenu} />}
                </AnimatePresence>
            </div>

        </div >

    )
}

export default Navigation