"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { website_1, website_2, website_3, website_4, uiartisan, feedblox } from '../../public';
import Heading from './Heading';

const projects = [
  {
    id: 1,
    title: "Feedblox",
    category: "Full Stack",
    description: "SaaS applicationc for feebdacks and reviews",
    image: feedblox.src,
    link: "#"
  },
  {
    id: 2,
    title: "UI Artisan",
    category: "Web Design",
    description: "UI component library and design system",
    image: uiartisan.src,
    link: "#"
  },
  {
    id: 3,
    title: "JobZilla",
    category: "Full Stack",
    description: "Job search and career platform",
    image: website_1.src,
    link: "#"
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
    link: "#"
  },
  {
    id: 6,
    title: "BizJotter",
    category: "Web App",
    description: "Business name generating application",
    image: website_4.src,
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
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
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
                  className="text-gray-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {project.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-40"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              layoutId={`project-${selectedId}`}
              className="fixed inset-4 md:inset-20 z-50 bg-gray-900 rounded-xl overflow-hidden"
            >
              <motion.div className="relative h-full">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal Content */}
                <div className="h-full overflow-y-auto">
                  {/* Project Details */}
                  <div className="relative aspect-video">
                    <Image
                      src={projects[selectedId - 1].image}
                      alt={projects[selectedId - 1].title}
                      width={1200}
                      height={675}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {projects[selectedId - 1].title}
                    </h2>
                    <p className="text-blue-400 mb-4">
                      {projects[selectedId - 1].category}
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {projects[selectedId - 1].description}
                    </p>
                    <div className="mt-6">
                      <a
                        href={projects[selectedId - 1].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-colors rounded-full text-white font-medium"
                      >
                        View Project
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Project;