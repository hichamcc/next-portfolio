'use client'

import React, { useRef, useEffect } from 'react'

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '@/components/Hero';


import { Project } from '@/components/Project';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {

  return (
    <div >
      <Analytics />
      <Header />
      <Navigation />
      <Hero />
      <About />
      <Skills container={''} texts={[]} newRadius={0} />
      <Project />
      <Contact />
      <Footer />
      <script src="http://206.81.7.246:8000/widgets/2/embed.js" async></script>

    </div>

  )
}
