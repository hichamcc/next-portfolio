import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Feedback from './Feedback';
import Heading from './Heading';
import Testimonials from './Testimonials';
function About() {

    const introRef = useRef<HTMLInputElement>(null);

    const stats = [
        { number: '5', label: '+ Years Of Experience' },
        { number: '99', label: '% Client Satisfaction' },
        { number: '70', label: '+ Completed Projects' }
      ];
    
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        const text = new SplitType('.wrapper-text', { types: "words" });
        gsap.set(".wrapper", { autoAlpha: 1, visibility: 'visible' });
        gsap.set(text.words, { opacity: 0.1 });


        const initialAnimation = gsap.to(text.words, {
            opacity: 1,
            ease: "power2.in",
            stagger: { from: "start", amount: 2, ease: "power.out" },
            scrollTrigger: {
                trigger: '.about',
                start: "top bottom",
                end: "top 5%",
                scrub: true,
            }
        });

        const counter = gsap.from(".counter", {
            innerText: 0,
            duration: 4,
            snap: {
                innerText: 1
            },
            scrollTrigger: {
                trigger: '.about',
                start: "top 50%",
            }
        });
    }, {});

    return (
        <section id='About' className=' max-w-[1600px] m-auto about p-4 min-h-[100vh]'>
            <Heading title='Who Am I' trigger="about" />
            <div className=' p-4 gap-4 w-full justify-between '>
                <div ref={introRef} className='intro  w-full overflow-hidden'>
                    <div className='wrapper invisible'>

                        <p className='wrapper-text sm:text-4xl text-2xl sm:leading-[52px] text-pretty font-bold intro-text text-bg-white'>
                            Software engineer and full-stack developer.  I have developed a wide range of system management solutions and web applications using various programming languages for small businesses and large organizations.
                        </p>
                    </div>
                </div>
              
                <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 py-8 md:py-16 gap-8">
                {stats.map((stat, index) => (
                    <div 
                    key={index} 
                    className="w-full md:w-1/3 flex flex-col items-center justify-center text-center mb-8 md:mb-0"
                    >
                    <div className="relative">
                        <span className="counter block text-stroke text-6xl sm:text-8xl md:text-9xl font-bold">
                        {stat.number}
                        </span>
                        <p className="bg-black text-base sm:text-lg md:text-xl font-semibold p-2 relative mt-[-20px] sm:mt-[-30px] md:mt-[-38px] mx-auto inline-block">
                        {stat.label}
                        </p>
                    </div>
                    </div>
                ))}
                </div>

            </div>


            <Testimonials />

        </section>
    )
}

export default About