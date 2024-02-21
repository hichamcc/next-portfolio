import React, { useRef, useState, useEffect } from 'react'
import Heading from './Heading'
import { website_1, website_2, website_3, website_4, website_5 } from '../../public'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Projects = () => {




    useEffect(() => {
        gsap.set('.project-1', { x: "20vw" });
        gsap.set('.project-2', { x: '-20vw' });
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".project-1", {
            scrollTrigger: {
                trigger: ".four",
                start: "top 100%",
                end: "bottom 50%",
                scrub: 1,
            },
            x: "-10vw",
            duration: 3,
            ease: 'none'
        });

        gsap.to(".project-2", {
            scrollTrigger: {
                trigger: ".four",
                start: "top 80%",
                end: "bottom 30%",
                scrub: 1,
            },
            x: "10vw",
            duration: 3,
            ease: 'none'
        });

    })

    return (
        <section id='Projects' className='four Projects overflow-hidden'>
            <Heading title='Projects' trigger='Projects' />

            <div className='project-1 gap-4 flex w-[100vw] lg:w-[100vw]  overflow-hidden '>
                <div className='w-1/3 drop-shadow-md rounded-sm group overflow-hidden relative group '>
                    <img src={website_1.src} alt="" className='hover:bg-black absolute hover:rotate-[2deg] hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-500' />

                </div>
                <div className='w-1/3  drop-shadow-md rounded-sm group overflow-hidden relative'>
                    <img src={website_2.src} alt="" className='hover:rotate-[2deg] hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-500' />

                </div>
                <div className='w-1/3  drop-shadow-md rounded-sm group overflow-hidden relative'>
                    <img src={website_3.src} alt="" className='hover:rotate-[2deg] hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-500' />

                </div>
            </div>
            <div className='project-2 gap-4 flex  w-[100vw] lg:w-[100vw] overflow-hidden mt-4'>
                <div className='w-[34%] drop-shadow-md rounded-sm group overflow-hidden relative'>
                    <img src={website_4.src} alt="" className='hover:rotate-[2deg] hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-500' />

                </div>
                <div className='w-[34%]  drop-shadow-md rounded-sm group overflow-hidden relative'>
                    <img src={website_5.src} alt="" className='hover:rotate-[2deg] hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-500' />

                </div>
                <div className='w-[34%]  drop-shadow-md rounded-sm group overflow-hidden relative'>
                    <img src={website_2.src} alt="" className='hover:rotate-[2deg] hover:scale-105 hover:cursor-pointer transition-all ease-in-out duration-500' />

                </div>

            </div>

        </section >)
}

export default Projects