'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, CodeBracketIcon, BoltIcon } from '@heroicons/react/24/outline';
import Heading from './Heading';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    subtitle: 'Understand before building',
    description:
      "We kick off with a focused call where I learn about your business, your goals, and your biggest pain points. No templates — I ask the right questions so the solution actually fits.",
    details: ['Goals & requirements scoping', 'Timeline & budget alignment', 'Tech stack recommendation', 'Clear project roadmap'],
    icon: <MagnifyingGlassIcon className="w-7 h-7" />,
  },
  {
    number: '02',
    title: 'Build',
    subtitle: 'Ship fast, iterate together',
    description:
      "I design and develop in short cycles, sharing progress early and often. You get visibility without micromanaging — weekly updates, a staging link you can click, and a direct line to me.",
    details: ['Design mockups for approval', 'Iterative development sprints', 'Weekly progress updates', 'Staging environment access'],
    icon: <CodeBracketIcon className="w-7 h-7" />,
  },
  {
    number: '03',
    title: 'Launch',
    subtitle: 'Live and supported',
    description:
      "Go-live is a milestone, not the end. I handle deployment, run final QA, and stay available post-launch to squash any issues fast. You get a handover doc and optional ongoing support.",
    details: ['Production deployment', 'Final QA & performance check', '30-day post-launch support', 'Handover documentation'],
    icon: <BoltIcon className="w-7 h-7" />,
  },
];

const Process = () => {
  const scrollToContact = () => {
    const el = document.getElementById('Contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="Process" className="max-w-[1600px] m-auto py-16 px-4">
      <Heading title="How It Works" trigger="process" />

      <motion.p
        className="text-center text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        A simple, transparent process so you always know what&apos;s happening and what comes next.
      </motion.p>

      {/* Steps */}
      <div className="relative">
        {/* Connecting line — desktop */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent" />

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Number + icon row */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-white">
                  {step.icon}
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 border border-gray-600 text-gray-400 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">{step.number}</p>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <p className="text-gray-300 font-medium mb-3">{step.subtitle}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{step.description}</p>

                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.button
          onClick={scrollToContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
        >
          Start the Conversation
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Process;
