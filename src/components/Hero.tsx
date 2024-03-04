'use client';
import React, { useRef, useState, useEffect } from 'react'
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
import { upwork, graduate } from '../../public';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Spline = React.lazy(() => import('@splinetool/react-spline'));


interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-15, -35, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });



    return (

        <div className="parallax">
            <motion.div className="scroller gap-6 big-text text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-blue-300" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}





const Hero = () => {


    const scrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

    const developerJokes = [
        "Why do programmers prefer dark mode?<br>Because light attracts bugs!",
        "Why do programmers prefer dark chocolate?<br>Because it's bitter, like their code reviews!",
        "Why did the developer go broke?<br>Because he used up all his cache!",
        "Why do programmers prefer iOS development?<br>Because they love a good 'app'-le joke!",
        "How do you comfort a JavaScript bug?<br>You console it!",
        "Why don't programmers like nature?<br>It has too many bugs!",
        "Why did the developer break up with Git?<br>It couldn't commit!",
        "Why do programmers always mix up work and fun?<br>Because they find everything 'byte'-ful!",
        "Why do programmers prefer cats?<br>They are purr-fect for debugging!"
    ];


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % developerJokes.length);
        }, 15000); // 15 seconds
        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [developerJokes.length]);



    useEffect(() => {
        gsap.set('.hero-section', { autoAlpha: 1 });
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".one", {
            scrollTrigger: {
                trigger: ".two",
                start: "center 30%",
                end: "bottom 0%",
                scrub: 1,
            },
            x: -300,
            duration: 2,
            ease: 'none'
        });

        gsap.to(".two", {
            scrollTrigger: {
                trigger: ".two",
                start: "center 30%",
                end: "bottom 0%",
                scrub: 1,
            },
            x: 300,
            duration: 2,
            ease: 'none'
        });

        gsap.to(".hero", {
            scrollTrigger: {
                trigger: ".hero",
                start: "center 0%",
                end: "bottom 0%",
                scrub: 1,
            },
            y: -300,
            duration: 2,
            ease: 'none'
        });

    }, []);

    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const delay = 1000; // 2 seconds delay

        const timeoutId = setTimeout(() => {
            setShouldRender(true);
        }, delay);

        return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
    }, []);


    return (
        <section id='Home' className='hero-section relative h-[100vh] max-w-[100vw] overflow-hidden  '>
            <div className="hero absolute w-full m-auto flex items-center justify-center h-screen lg:z-10 z-0  ">
                {/* <img src={hero.src} alt="Your Image" className=" absolute inset-0 m-auto sm:h-[70vh] h-[50vh] top-80 mt-[60px] " /> */}

                <Spline
                    className="inset-0 m-auto sm:h-[70vh] h-[50vh] sm:top-80 mt-[60px] top-[240px]"
                    id="cube"
                    scene="https://prod.spline.design/y9kG3baUI0jXscIP/scene.splinecode"

                />

            </div>
            <div className='m-auto max-w-[1600px] p-4  flex md:flex-row flex-col w-full'>

                <div className='one md:w-1/2 w-full md:mt-48 mt-8'>
                    <p className='heading-2 sm:heading-1 m-auto font-bold '>
                        Hey There,
                    </p>
                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-blue-300 heading-2 sm:heading-1 m-auto font-bold '>
                        I&apos;m Hicham
                    </p>

                    <div className='text-md sm:text-lg font-semibold mt-[15vh] sm:mt-[5vh] hover:cursor-pointer z-[90]' >
                        <p
                            onClick={() => scrollToSection('Contact')}

                            className='px-4 py-2 sm:px-8 sm:py-4 bg-customBlue  w-fit rounded-full items-center flex gap-2'>
                            Let&apos;s Connect
                        </p>
                    </div>

                </div>

                <div className='two md:w-1/2 w-full text-end  align-middle mt-32 sm:mt-48 '>
                    <p className=' heading-2 sm:heading-1 m-auto font-bold '>
                        FULL-STACK
                    </p>
                    <p className='text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-blue-300 heading-2 sm:heading-1 m-auto font-bold '>
                        DEVELOPER
                    </p>
                </div>

            </div>



            <div className='bottom-40 absolute max-w-[100vw] m-auto'>


                <ParallaxText baseVelocity={-1}>Transforming Ideas into Reality -</ParallaxText>
            </div>
        </section>
    )
}



export default Hero