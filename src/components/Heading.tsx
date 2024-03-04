import React from 'react'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


const Heading = ({ title, trigger }: { title: string, trigger: string }) => {


    // useGSAP(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     const heading = new SplitType(`.${trigger} .intro-heading`, { types: "chars" });
    //     gsap.set(".wrapper", { autoAlpha: 1, visibility: 'visible' });
    //     gsap.set(heading.chars, { yPercent: 100 });
    //     const initialAnimation = gsap.to(heading.chars, {
    //         yPercent: 0,
    //         ease: "sine.out",
    //         stagger: { from: "start", amount: 1, ease: "power.out" },
    //         scrollTrigger: {
    //             trigger: `.${trigger}`,
    //             start: "top bottom",
    //         }
    //     });

    // }, {});

    return (
        <div className={`wrapper wrapper-heading overflow-hidden mb-8 invisible text-center `}>
            <p className='  sm:text-[4em]  text-[3em]  font-bold uppercase  intro-heading '>{title}</p>
        </div >
    )
}

export default Heading