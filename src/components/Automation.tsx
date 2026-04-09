'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Heading from './Heading';

const automationUseCases = [
  {
    icon: '🔗',
    title: 'CRM & Lead Automation',
    description: 'Auto-capture leads from forms, sync to your CRM, and trigger personalized follow-up sequences without lifting a finger.',
  },
  {
    icon: '📧',
    title: 'Email & Notification Workflows',
    description: 'Set up smart email campaigns, Slack alerts, and SMS notifications triggered by user actions or data changes.',
  },
  {
    icon: '📊',
    title: 'Data Sync & Reporting',
    description: 'Connect databases, spreadsheets, and APIs to keep your data in sync and generate automated reports on schedule.',
  },
  {
    icon: '🛒',
    title: 'E-Commerce & Payments',
    description: 'Automate order processing, invoice generation, inventory updates, and payment confirmation workflows.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Pipelines',
    description: 'Integrate AI models to classify, summarize, or respond to content — automatically routed through your business logic.',
  },
  {
    icon: '🔄',
    title: 'Cross-App Integrations',
    description: 'Connect 400+ tools — Airtable, Notion, HubSpot, Stripe, Google Sheets — into one seamless automated system.',
  },
];

const benefits = [
  { stat: '80%', label: 'Less Manual Work' },
  { stat: '3x', label: 'Faster Response Time' },
  { stat: '0', label: 'Human Errors on Repeated Tasks' },
];

const Automation = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="Automation" className="max-w-[1600px] m-auto min-h-[100vh] py-16 px-4">
      <Heading title="Business Automation" trigger="automation" />

      {/* Intro */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Stop wasting time on repetitive tasks. I build custom automation workflows using{' '}
          <span className="text-blue-400 font-semibold">n8n</span>,{' '}
          <span className="text-blue-400 font-semibold">Make</span>, and custom APIs — so your business
          runs on autopilot while you focus on growth.
        </p>
      </motion.div>

      {/* N8N Workflow Image */}
      <motion.div
        className="relative rounded-2xl overflow-hidden border border-gray-700 mb-20 max-w-5xl mx-auto shadow-2xl shadow-blue-900/20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
        <Image
          src="/images/N8N.jpg"
          alt="N8N Automation Workflow Example"
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          <span className="inline-block bg-blue-600/90 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
            Real workflow example — built with n8n
          </span>
        </div>
      </motion.div>

      {/* Benefits Bar */}
      <motion.div
        className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {benefits.map((b, i) => (
          <div
            key={i}
            className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700"
          >
            <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 mb-2">
              {b.stat}
            </p>
            <p className="text-gray-300 text-sm md:text-base">{b.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Use Cases Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {automationUseCases.map((useCase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="text-3xl mb-4">{useCase.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
            <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-10 border border-gray-700 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to automate your business?
        </h3>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Tell me your current manual bottlenecks and I&apos;ll show you how automation can save you
          hours every week.
        </p>
        <motion.button
          onClick={scrollToContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
        >
          Let&apos;s Automate Together
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Automation;
