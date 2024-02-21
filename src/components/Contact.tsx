import React, { useRef } from 'react'
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
import { ContactForm } from './component/contact-form';
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

        <div className="parallax py-4">
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

const Contact = () => {
    return (
        <section id='Contact' className='five mb-4 sm:mb-32  '>
            <div className='mt-16  max-w-[100vw] m-auto '>
                <ParallaxText baseVelocity={-1}>Reach Out -</ParallaxText>
            </div>
            <div className='flex flex-col sm:flex-row mt-16 p-4 align-middle  justify-between items-center'>
                <div className='w-full md:w-1/2'>
                    <p className='text-[32px]  lg:text-[58px] font-bold text-light-blue lg:p-8 p-2'>
                        For any collaborative projects or inquiries feel free to reach out to me.
                    </p>
                </div>
                <div className='w-full md:w-1/2 relative'>
                    <ContactForm />
                </div>
            </div>


        </section >
    )
}

export default Contact