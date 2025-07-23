'use client'

import React, { useRef, useEffect } from 'react'

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '@/components/Hero';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import Pricing from '@/components/Pricing';

import { Project } from '@/components/Project';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {

  useEffect(() => {
    // Initialize smooth scroll fallback
    if (typeof window !== 'undefined') {
      const { initSmoothScrollFallback } = require('@/lib/smooth-scroll');
      initSmoothScrollFallback();
    }
  }, []);

  return (
    <div >
      <Analytics />
      <ScrollProgress />
      <Header />
      <Navigation />
      <Hero />
      <About />
      <Skills container={''} texts={[]} newRadius={0} />
      <Project />
      <Pricing />
      <Contact />
      <Footer />
      <BackToTop />
    </div>

  )
}
