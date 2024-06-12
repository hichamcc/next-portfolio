"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
        quote: "Great communication throughout project and was very quick to start project and more importantly completed the project before the deadline.",
        name: "UpWork Client",
        title: "",
    },
    {
        quote: "Hicham did a great job turning the design into a functional website on a tight schedule. He proactively gave input and met my high standards in details and perfection.",
        name: "UpWork Client",
        title: "",
    },
    {
        quote: "Hicham completed the job with 100% accuracy. He is one of the best js developers I have ever met. I will definately work with him in the near future",
        name: "UpWork Client",
        title: "",
    },
    {
        quote: "Great to work with. Very responsive and patient. Good problem solver. Strongly recommend! Was able to create a custom database that was perfect for my business.",
        name: "UpWork Client",
        title: "",
    },
    {
        quote: "Hicham is by FAR the most skilled developer I've worked with. I was in a rush and he very well understood the assignment and right away started developing. Great communication skills, and he was always available for any needs",

        name: "UpWork Client",
        title: "",
    },
];
const testimonials2 = [
    {
        quote: "It was great working with Hicham. He completed the job successfully and on time. He is very responsive and professional",
        name: "UpWork Client",
        title: "",
    },
    {
        quote: "Very responsive, fast, and straight to the point freelancer.I prefer to work with Hicham again in the future",
        name: "UpWork Client",
        title: "",
    },
    {
        quote: "A successful project together, Hicham ability to pay attention to the details and ask questions when needed is very helpful -- I appreciate his effort to work quickly and accurately. We will definitely be continue working together",
        name: "UpWork Client",
        title: "",
    },
    {
        quote: "It was a pleasure to work with Hicham - he fixed our issue in a very short time by thinking outside the box. Communication was respectful and easy. Hope to work with you again",
        name: "UpWork Client",
        title: "",
    }
];



const Testimonials = () => {
    return (
        <div>
            <span className='bg-customBlue mb-4 rounded-full px-8 py-2 hover:cursor-pointer font-bold'>
                TESTIMONIALS
            </span>
            <div className=" rounded-md mt-8 flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />

                <InfiniteMovingCards
                    items={testimonials2}
                    direction="left"
                    speed="slow"
                />
            </div>
        </div>

    )
}

export default Testimonials