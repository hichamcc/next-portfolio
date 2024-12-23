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

    const skills = [laravel,react, next, tailwind, nodejs, angular,  php, symfony,codeigniter, aws,  framer, git];


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
            <div className="py-12 px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                    <div 
                        key={index} 
                        className="group relative overflow-hidden"
                    >
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 md:p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-700 hover:border-blue-500">
                        <div className="flex items-start space-x-4 mb-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                            {service.icon && (
                                <img 
                                src={service.icon.src} 
                                className="w-12 h-12" 
                                alt={`${service.name} icon`}
                                />
                            )}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                            {service.name}
                            </h3>
                        </div>
                        
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {service.description}
                        </p>
                        
                        <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-blue-500/20 pointer-events-none transition-all duration-300" />
                        
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            {/* tagcloud-container */}
            <div className="w-full py-8 md:py-16 px-4">
                <div className="grid grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
                    {skills.map((image, index) => (
                    <div 
                        key={index} 
                        className="relative aspect-square p-2 md:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
                    >
                        <div className="flex items-center justify-center h-full">
                        <Image
                            src={image}
                            alt={`Skill ${index + 1}`}
                            width={200}
                            height={200}
                            className="object-contain w-full h-full"
                        />
                        </div>
                    </div>
                    ))}
                </div>
            </div>



        </section>)
}

export default Skills