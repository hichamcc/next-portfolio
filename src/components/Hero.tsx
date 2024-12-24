import React, { useRef, useState, useEffect } from 'react';
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
    const x = useTransform(baseX, (v) => `${wrap(-15, -35, v)}%`);
    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
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
    const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
    const [isJokeVisible, setIsJokeVisible] = useState(true);

    const developerJokes = [
        { setup: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs!" },
        { setup: "Why do programmers prefer dark chocolate?", punchline: "Because it's bitter, like their code reviews!" },
        { setup: "Why did the developer go broke?", punchline: "Because he used up all his cache!" },
        { setup: "How do you comfort a JavaScript bug?", punchline: "You console it!" },
        { setup: "Why do programmers hate to leave their jobs?", punchline: "Because they don’t want to 'commit' to anything else." },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsJokeVisible(false);
            setTimeout(() => {
                setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % developerJokes.length);
                setIsJokeVisible(true);
            }, 500);
        }, 8000);
        return () => clearInterval(intervalId);
    }, [developerJokes.length]);

    useEffect(() => {
      


    }, []);

    const scrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className='hero-section relative min-h-screen max-w-screen overflow-hidden'>
            <div className="hero absolute w-full hidden md:flex items-center justify-center lg:z-0 z-0">
                <Spline
                id="cube"
                    className="w-full h-full max-w-3xl mx-auto transform scale-75 sm:scale-100"
                    scene="https://prod.spline.design/BYuhXK21qo6bU5Xa/scene.splinecode"
                />
            </div>

            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-64'>
                <div className='grid md:grid-cols-2 gap-8 items-center  z-50'>
                    <motion.div 
                        className='one space-y-6'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className=''>
                            <h1 className=' relative z-50 text-4xl sm:text-6xl font-bold'>
                                Hey There,
                            </h1>
                            <h1 className='relative z-50 text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-blue-300'>
                                I&apos;m Hicham
                            </h1>
                        </div>

                        <button
                            onClick={() => scrollToSection('Contact')}
                            className='absolute  px-6 py-3 bg-customBlue rounded-full text-white font-semibold hover:bg-blue-600 transition-colors z-50'
                        >
                            Let&apos;s Connect
                        </button>
                    </motion.div>

                    <motion.div 
                        className='two text-right space-y-2 pt-32 sm:pt-0' 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                            <h2 className='relative z-50 text-4xl sm:text-6xl font-bold'>
                                FULL-STACK
                            </h2>
                            <h2 className='relative z-50 text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-blue-300'>
                                DEVELOPER
                            </h2>
                     
                    </motion.div>
                </div>

                {/* Joke Display */}
                <motion.div 
                    className="absolute bottom-64  left-0 right-0 px-4 z-30"
                    animate={{ opacity: isJokeVisible ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-md mx-auto bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-blue-500/20">
                        <p className="text-sm sm:text-lg font-medium text-blue-400 mb-2">
                            {developerJokes[currentJokeIndex].setup}
                        </p>
                        <p className="text-sm sm:text-lg text-white">
                            {developerJokes[currentJokeIndex].punchline}
                        </p>
                    </div>
                </motion.div>

                <div className='absolute bottom-16 left-0 right-0 w-full'>
                    <ParallaxText baseVelocity={-1}>Transforming Ideas into Reality -</ParallaxText>
                </div>
            </div>
        </section>
    );
};

export default Hero;