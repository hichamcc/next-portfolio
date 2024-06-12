import React, { useEffect, useState, useRef } from 'react';
import Heading from './Heading';
import TagCloud from 'TagCloud';
import Image from 'next/image';

import {
    responsive, api, cms, dashboard, process, git,
    figma,
    laravel,
    mysql,
    next,
    tailwind,
    wordpress,
    codeigniter,
    aws,
    angular,
    react,
    bash,
    symfony,
    nodejs,
    php,
    framer
} from '../../public';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';



interface YourComponentProps {
    container: string;
    texts: string[];
    newRadius: number;
}


const Skills: React.FC<YourComponentProps> = ({ container, texts, newRadius }) => {

    const services = [
        {
            name: 'Custom Software Development',
            icon: cms,
            description: 'Tailored solutions including SaaS, CRM, and CMS for optimized business processes.',
        },
        {
            name: 'User-Friendly Dashboards',
            icon: dashboard,
            description: 'Create intuitive and informative dashboards to empower users with actionable insights.',
        },
        {
            name: 'Responsive Websites',
            icon: responsive,
            description: 'Design and develop websites that seamlessly adapt to various devices for a great user experience.',
        },
        {
            name: 'Business Process Streamlining',
            icon: process,
            description: 'Efficiently streamline and automate key business processes for enhanced productivity.',
        }
    ];

    const skills = [react, next, tailwind, nodejs, angular, aws, laravel, framer, git, php, symfony];


    const [radius, setRadius] = useState(300);

    useEffect(() => {
        const container = '.tagcloud-container';
        const texts = [
            'Cloud ', 'CSS', 'JavaScript',
            'Boostrap', 'Tailwind', 'React',
            'NextJS', 'Laravel', 'Symfony', 'Express',
            'Angular', 'NodeJS', 'GSAP', 'MySql', 'PHP',
            'HTML', 'jQuery', 'Wordpress',
            'CodeIgniter', 'Script Shell', 'Figma', 'ElectronJS', 'TWIG', 'Framer Motion'
        ];


        // Determine the radius based on the device width
        const isMobile = window.innerWidth <= 1100; // Adjust the breakpoint as needed
        const newRadius = isMobile ? 200 : 300;

        setRadius(newRadius);

        const tagCloudInstance = TagCloud(container, texts, {
            radius: newRadius,
            initSpeed: 'slow',
            useHTML: true,
        });
        // Cleanup function to destroy the TagCloud instance when the component unmounts or when necessary
        // return () => {
        //     tagCloudInstance.destroy();
        // };

    }, [container, texts, newRadius]);


    useEffect(() => {


    }, []);

    return (
        <section id='Skills' className='three skills max-w-[1600px]  m-auto min-h-[100vh] mt-[128px]'>
            <Heading title='Services & Skills' trigger='skills' />

            <div className='align-middle p-8'>
                <div className='services flex flex-wrap '>
                    {services.map((service, index) => (
                        <div key={index} className=' md:w-1/2 w-full p-2'>
                            <div className=' min-h-[220px] bg-transparent border-1 border-gray-300 border-2 rounded-2xl shadow-sm shadow-light-blue mb-2 p-4 '>
                                <p className=' text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-blue-300 font-bold flex gap-2 items-center'>
                                    {/* <img src={service.icon.src} className='w-[48px]' alt="" /> */}
                                    {service.name}
                                </p>
                                <p className='text-[18px] text-gray-100 '> {service.description}  </p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            {/* tagcloud-container */}
            <div className=' w-full sm:text-2xl text-xl flex-grow mb-16 mt-8 p-2'>
                <div className="flex sm:gap-8 gap-2">
                    {skills.map((image, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <Image src={image} alt={`Image ${index + 1}`} width={200} height={200} className="rounded-md" />
                        </div>
                    ))}
                </div>

            </div>



        </section>)
}

export default Skills