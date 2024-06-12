"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { website_1, website_2, website_3, website_4, website_5 } from '../../public'
import Heading from './Heading'

export function Project() {
    const tabs = [
        {
            title: "JobZilla",
            value: "JobZilla",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-customBlue to-blue-300">
                    <p>JobZilla</p>
                    <Image
                        src={website_1.src}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "FitForma",
            value: "FitForma",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-customBlue to-blue-300">
                    <p>FitForma</p>
                    <Image
                        src={website_2.src}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "Memory Archives",
            value: "Memory Archives",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-customBlue to-blue-300">
                    <p>MemoryArchives</p>
                    <Image
                        src={website_3.src}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "BizJotter",
            value: "BizJotter",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-customBlue to-blue-300">
                    <p>BizJotter</p>
                    <Image
                        src={website_4.src}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
        {
            title: "Oasis",
            value: "Oasis",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-customBlue to-blue-300">
                    <p>Oasis</p>
                    <Image
                        src={website_5.src}
                        alt="dummy image"
                        width="1000"
                        height="1000"
                        className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                    />
                </div>
            ),
        },
    ];

    return (
        <section id='Projects' className='four Projects overflow-hidden'>
            <Heading title='Projects' trigger='Projects' />
            <div className="h-[25rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
                <Tabs tabs={tabs} />
            </div>
        </section>
    );
}

const DummyContent = () => {
    return (
        <Image
            src="/linear.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
