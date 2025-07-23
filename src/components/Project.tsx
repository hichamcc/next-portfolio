"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { website_1, website_2, website_3, website_4, uiartisan, feedblox, costmeet } from '../../public';
import Heading from './Heading';

const projects = [
  {
    id: 1,
    title: "Feedblox",
    category: "Full Stack",
    description: "SaaS applicationc for feebdacks and reviews",
    image: feedblox.src,
    link: "https://feedblox.app"
  },
  {
    id: 2,
    title: "UI Artisan",
    category: "Web Design",
    description: "UI component library and design system",
    image: uiartisan.src,
    link: "https://uiartisan.vercel.app/"
  },
  {
    id: 3,
    title: "CostMeet",
    category: "Web App",
    description: "Meeting cost calculator for efficient time management",
    image: costmeet.src,
    link: "https://costmeet.com"
  },
  {
    id: 4,
    title: "FitForma",
    category: "Web App",
    description: "Fitness tracking and workout planning",
    image: website_2.src,
    link: "#"
  },
  {
    id: 5,
    title: "MemoryArchives",
    category: "Full Stack",
    description: "Digital memory and photo storage",
    image: website_3.src,
    link: "https://www.memoryarchives.world/"
  },
  {
    id: 6,
    title: "JobZilla",
    category: "Full Stack",
    description: "Job search and career platform",
    image: website_1.src,
    link: "#"
  }
];

export function Project() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [currentCategory, setCurrentCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = currentCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === currentCategory);

  return (
    <section id="Projects" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Heading title="Projects" trigger="Projects" />
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${currentCategory === category 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            className="relative group cursor-pointer rounded-xl overflow-hidden bg-gray-800 aspect-[4/3]"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={450}
              className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
              priority={project.id <= 3}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 w-full">
                <motion.h3 
                  className="text-xl font-bold text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {project.description}
                </motion.p>
                <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" w-full items-center gap-2 mt-2 px-6 py-1 bg-blue-500 hover:bg-blue-600 transition-colors rounded-full text-white font-small"
                      >
                        View Project
                </motion.a>

                


              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedId && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[110]"
              onClick={() => setSelectedId(null)}
            />
            
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-[120] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
            >
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50 transition-colors group"
                  >
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="grid lg:grid-cols-2 gap-0 h-full">
                    {/* Image Section */}
                    <div className="relative bg-gray-800 flex items-center justify-center p-4 md:p-8">
                      <div className="relative w-full max-w-md lg:max-w-none">
                        <Image
                          src={projects[selectedId - 1].image}
                          alt={projects[selectedId - 1].title}
                          width={600}
                          height={400}
                          className="object-contain w-full h-auto rounded-lg shadow-lg"
                          priority
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                        {/* Decorative elements */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400 rounded-tl-lg"></div>
                        <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-blue-400 rounded-tr-lg"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-blue-400 rounded-bl-lg"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-blue-400 rounded-br-lg"></div>
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                      <div className="space-y-6">
                        {/* Title and Category */}
                        <div>
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                              {projects[selectedId - 1].category}
                            </span>
                            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                            {projects[selectedId - 1].title}
                          </h2>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-blue-400">About This Project</h3>
                          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                            {projects[selectedId - 1].description}
                          </p>
                        </div>

                        {/* Technologies (placeholder for future enhancement) */}
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold text-blue-400">Key Features</h3>
                          <div className="flex flex-wrap gap-2">
                            {['Responsive Design', 'Modern UI', 'Performance Optimized'].map((feature, index) => (
                              <span key={index} className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-md border border-gray-600">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-6 space-y-4">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <motion.a
                            href={projects[selectedId - 1].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 rounded-lg text-white font-semibold shadow-lg hover:shadow-blue-500/25"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Visit Project
                          </motion.a>
                          <motion.button
                            onClick={() => setSelectedId(null)}
                            className="px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 transition-colors rounded-lg text-gray-300 font-medium border border-gray-600 hover:border-gray-500"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Close
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Project;