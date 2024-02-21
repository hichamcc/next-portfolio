import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import TagCloud from 'TagCloud';
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
} from '../../public';
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
            name: 'Business Process Streamlining',
            icon: process,
            description: 'Efficiently streamline and automate key business processes for enhanced productivity.',
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
            name: 'API Integration',
            icon: api,
            description: 'Integrate APIs to connect and enhance the functionality of different software applications.',
        },
    ];

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
        return () => {
            tagCloudInstance.destroy();
        };

    }, [container, texts, newRadius]);


    useEffect(() => {


    }, []);

    return (
        <section id='Skills' className='three skills max-w-[1600px]  m-auto min-h-[100vh] mt-[128px]'>
            <Heading title='Services & Skills' trigger='skills' />

            <div className="flex sm:flex-row flex-col  gap-2 w-full align-middle  items-center justify-between  ">
                <div className='align-middle p-8'>

                    <div className='services'>
                        {services.map((service, index) => (
                            <div className='bg-transparent border-1 border-gray-300 border-2 rounded-2xl shadow-sm shadow-light-blue mb-2 p-4 '>
                                <p key={index} className=' text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-blue-300 font-bold flex gap-2 items-center'>
                                    {/* <img src={service.icon.src} className='w-[48px]' alt="" /> */}
                                    {service.name}
                                </p>
                                <p className='text-[18px] text-gray-100 '> {service.description}  </p>
                            </div>
                        ))}
                    </div>


                </div>
                <div className='sm:w-1/2 w-full tagcloud-container sm:text-2xl text-xl p-8'>

                </div>
            </div>
        </section>)
}

export default Skills