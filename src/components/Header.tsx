'use client'
import React, { useRef } from 'react'
import { logo } from '../../public';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

const sections = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Header = () => {


    const scrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const app = useRef<HTMLInputElement>(null);
    const blur = useRef<HTMLInputElement>(null);

    useGSAP(() => {
        gsap.set('#logo', { visibility: 'visible', y: '49vh', x: '50vw', xPercent: -50, scale: 2, })
        gsap.set('#logo', {})

        // use selectors...
        const tls = gsap.timeline({ defaults: { duration: 1 } });
        tls.to('#logo img', { rotation: 720, duration: 1 })
            .to('#logo', { y: 0, x: 0, xPercent: 0, scale: 1 })
            .to('.div-blur', { y: '-100vh' }, '<')
            .set('.header', { visibility: 'visible' }, '<')

    }, {});
    return (
        <>
            <div ref={app} className='header sticky z-[101] w-full h-[68px] flex justify-between  p-5 invisible'>
                <div id="logo" className='group flex gap-2 pl-2'>
                    <img src={logo.src} className='w-[32px] group-hover:animate-spinOnce' alt="" />
                    <Link href={"#"} className=' text-lg font-bold group-hover:' >
                        Code <span className='text-customBlue'>By</span>  Hicham
                    </Link>
                </div>
                <div id="navigation" className=' justify-between sm:mr-6 mb-1 sm:flex hidden '>
                    {sections.map((section, index) => (
                        <p
                            key={index}
                            onClick={() => scrollToSection(section)}
                            className=' group relative text-gray-300 hover:text-white overflow-hidden  mr-6 hover:cursor-pointer'>
                            {section}
                            <span className='absolute inset-x-0 w-[0px] group-hover:w-full ease-in-out transition-border-b duration-700  bottom-0  border-b-2 border-b-customBlue'></span>
                        </p>
                    ))}

                </div>

            </div>

            <div ref={blur} className='div-blur absolute  w-[100vw] h-[100vh] z-[100] top-0 bg-dark-color'>

            </div>

        </>
    )
}

export default Header