import React from 'react'
import { motion } from "framer-motion"
interface NavProps {
    toggleMenu: () => void; // Adjust the type based on your actual function signature
}

const Nav: React.FC<NavProps> = ({ toggleMenu }) => {

    const sections = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
    const scrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            toggleMenu();
        }
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