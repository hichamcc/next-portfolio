'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';

const Pricing = () => {
  const pricingPackages = [
    {
      id: 1,
      title: 'Custom Landing Page',
      price: '$500',
      description: 'Professional landing pages that convert visitors into customers',
      features: [
        'Responsive Design',
        'Modern UI/UX',
        'SEO Optimized',
        'Contact Forms',
        'Fast Loading',
        'Mobile First'
      ],
      highlight: false,
      icon: '🌐'
    },
    {
      id: 2,
      title: 'Custom Dashboard',
      price: '$1,000',
      description: 'Interactive dashboards with real-time data visualization',
      features: [
        'Real-time Analytics',
        'Data Visualization',
        'User Management',
        'Custom Charts',
        'API Integration',
        'Responsive Design'
      ],
      highlight: true,
      icon: '📊'
    },
    {
      id: 3,
      title: 'Custom SaaS',
      price: '$1,500',
      description: 'Full-featured SaaS applications with complete functionality',
      features: [
        'User Authentication',
        'Database Design',
        'Payment Integration',
        'Admin Panel',
        'API Development',
        'Cloud Deployment'
      ],
      highlight: false,
      icon: '🚀'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='Pricing' className='max-w-[1600px] m-auto min-h-[100vh] py-16 px-4'>
      <Heading title='Pricing & Services' trigger='pricing' />
      
      <div className="mt-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package for your project. All prices are starting points and can be customized based on your specific requirements.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pricingPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                pkg.highlight 
                  ? 'bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-2 border-blue-500/50 shadow-blue-500/20' 
                  : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700'
              } hover:shadow-2xl backdrop-blur-sm`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{pkg.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {pkg.title}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 ml-2">starting at</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-blue-400 mb-4">What&apos;s Included:</h4>
                {pkg.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('Contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-blue-500/25'
                    : 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 border border-gray-600 hover:border-gray-500'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Every project is unique. These are starting prices for standard implementations. 
              Complex features, integrations, or custom requirements may adjust the final quote. 
              Let&apos;s discuss your specific needs!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('Contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;