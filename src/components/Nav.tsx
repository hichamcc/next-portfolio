import React from 'react'
import { motion } from "framer-motion"
import { smoothScrollToElement } from '@/lib/smooth-scroll'

interface NavProps {
    toggleMenu: () => void;
}

const Nav: React.FC<NavProps> = ({ toggleMenu }) => {

    const sections = ['Home', 'About', 'Skills', 'Projects', 'Pricing', 'Contact'];
    
    const scrollToSection = async (sectionId: string) => {
        toggleMenu(); // Close menu immediately for better UX
        
        // Wait a bit for menu close animation, then scroll
        setTimeout(async () => {
            await smoothScrollToElement(sectionId, {
                duration: 1200,
                offset: -80,
                onComplete: () => {
                    // Optional: Add any completion logic here
                }
            });
        }, 300);
    };
    const slide = {
        initial: {
            x: "80px"
        },
        enter: (i: number) => ({
            x: "0px",
            transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 0.1 * i }

        }),
        exit: (i: number) => ({
            x: "80px",
            transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: 0.1 * i }

        }),
    }

    const menuSlide = {
        initial: {
            x: "100%"
        },
        enter: {
            x: "0px",
            transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] }

        },
        exit: {
            x: '100%',
            transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] }

        }
    }
    return (
        <motion.div
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            className={`relative max-w-[100vw] z-20  h-[100vh]  w-[400px]  bg-black overflow-hidden`}>
            <div id="navigation" className='flex flex-col justify-between h-[50vh] pt-[100px]'>
                {sections.map((section, index) => (
                    <motion.div key={index}
                        custom={index}
                        variants={slide} animate="enter" exit="exit" initial="initial"
                    >
                        <p
                            onClick={() => scrollToSection(section)}
                            className='text-white heading-1 pl-6 hover:cursor-pointer '>
                            {section}
                        </p>
                    </motion.div>

                ))}

            </div>
        </motion.div>
    )
}

export default Nav