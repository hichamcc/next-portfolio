'use client'

import React, { useRef, useEffect } from 'react'

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '@/components/Hero';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from '@studio-freight/lenis'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])



  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger)

    // ScrollTrigger.create({

    //   trigger: 'section.about ',
    //   markers: false,
    //   start: "top 50%",
    //   end: "bottom 0%",

    //   onEnter: () => {
    //     gsap.to('body', { duration: 1.0, backgroundColor: '#151414', color: '#e0f1f3' })
    //   },

    //   onLeaveBack: () => {
    //     gsap.to('body', { duration: 1.0, backgroundColor: '#e0f1f3', color: '#151414' })
    //   },
    // })




    return () => {

    }
  }, []);

  return (
    <div >

      <Header />
      <Navigation />
      <Hero />
      <About />
      <Skills container={''} texts={[]} newRadius={0} />
      <Projects />
      <Contact />
      <Footer />
    </div>

  )
}
