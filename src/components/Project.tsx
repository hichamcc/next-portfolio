"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExclamationCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { uiartisan, costmeet, trueform, bsncard, sge, contentops } from '../../public';
import Heading from './Heading';

interface CaseStudy {
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  stack: string[];
}

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  caseStudy?: CaseStudy;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "True Form Elite",
    category: "Full Stack",
    description: "90-day transformation fitness and nutrition platform",
    image: trueform.src,
    link: "https://app.trueformnutrition.com.au/",
    caseStudy: {
      challenge:
        "The client was running their 90-day transformation program entirely through spreadsheets and manual WhatsApp check-ins. Tracking client progress, meal plans, and workout schedules across 50+ active clients was becoming unmanageable and leading to missed follow-ups.",
      solution:
        "Built a full-stack SaaS platform where coaches manage client onboarding, assign personalised programs, and track weekly check-ins in one place. Automated email reminders reduced coach workload by eliminating manual nudges. Clients get a clean dashboard to log their progress and view their plan.",
      results: [
        { metric: "3x", label: "More clients managed per coach" },
        { metric: "80%", label: "Reduction in manual follow-ups" },
        { metric: "40%", label: "Increase in client retention" },
        { metric: "2 wks", label: "From kickoff to live" },
      ],
      stack: ["Laravel", "MySQL", "Tailwind CSS", "DigitalOcean"],
    },
  },
  {
    id: 2,
    title: "UI Artisan",
    category: "Web Design",
    description: "UI component library and design system",
    image: uiartisan.src,
    link: "https://uiartisan.vercel.app/",
  },
  {
    id: 3,
    title: "CostMeet",
    category: "Web App",
    description: "Meeting cost calculator for efficient time management",
    image: costmeet.src,
    link: "https://costmeet.com",
  },
  {
    id: 4,
    title: "BsnCard",
    category: "Web App",
    description: "Digital business cards and networking CRM platform",
    image: bsncard.src,
    link: "https://bsncard.com/",
    caseStudy: {
      challenge:
        "Paper business cards get lost, can't be updated, and provide zero analytics. The client wanted a modern alternative that lets professionals share contact info instantly via NFC or QR, while tracking who viewed their card and when.",
      solution:
        "Built a full digital business card platform with NFC & QR sharing, a personal CRM to manage contacts, and an analytics dashboard showing view counts and engagement. Each user gets a public profile link and can update their info any time without reprinting.",
      results: [
        { metric: "500+", label: "Active users at launch" },
        { metric: "0", label: "Printing costs for users" },
        { metric: "Real-time", label: "Analytics on card views" },
        { metric: "1 tap", label: "Contact sharing via NFC" },
      ],
      stack: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS"],
    },
  },
  {
    id: 5,
    title: "ContentOps",
    category: "Web App",
    description: "Project management dashboard for content operations",
    image: contentops.src,
    link: "#",
  },
  {
    id: 6,
    title: "SGE Prime Contracting",
    category: "Full Stack",
    description: "General contracting and civil construction company in Cochrane, Alberta",
    image: sge.src,
    link: "https://sgeltd.ca/",
  },
];

export function Project() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "case-study">("overview");
  const [currentCategory, setCurrentCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    currentCategory === "All" ? projects : projects.filter((p) => p.category === currentCategory);
  const selectedProject = selectedId ? projects.find((p) => p.id === selectedId) : null;

  const handleOpen = (id: number) => {
    setSelectedId(id);
    setActiveTab("overview");
  };

  return (
    <section id="Projects" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Heading title="Projects" trigger="Projects" />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
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
            onClick={() => handleOpen(project.id)}
            className="relative group cursor-pointer rounded-xl overflow-hidden bg-gray-800 aspect-[4/3]"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={450}
              className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-105"
              priority={project.id <= 3}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-6 w-full">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-500 rounded-full text-white text-sm font-medium">
                    View Project
                  </span>
                  {project.caseStudy && (
                    <span className="px-3 py-1 bg-gray-700/80 rounded-full text-blue-300 text-sm font-medium border border-blue-500/40">
                      Case Study ✦
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[110]"
              onClick={() => setSelectedId(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-[120] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
            >
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 flex-shrink-0">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-gray-600" />
                      <div className="w-3 h-3 rounded-full bg-gray-600" />
                      <div className="w-3 h-3 rounded-full bg-gray-600" />
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setActiveTab("overview")}
                        className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          activeTab === "overview" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
                        }`}
                      >
                        Overview
                      </button>
                      {selectedProject.caseStudy && (
                        <button
                          onClick={() => setActiveTab("case-study")}
                          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            activeTab === "case-study" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
                          }`}
                        >
                          Case Study
                        </button>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50 transition-colors group"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {activeTab === "overview" ? (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.25 }}
                        className="grid lg:grid-cols-2 gap-0 h-full"
                      >
                        {/* Image */}
                        <div className="relative bg-gray-800 flex items-center justify-center p-4 md:p-8">
                          <div className="relative w-full max-w-md lg:max-w-none">
                            <Image
                              src={selectedProject.image}
                              alt={selectedProject.title}
                              width={600}
                              height={400}
                              className="object-contain w-full h-auto rounded-lg shadow-lg"
                              priority
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-blue-400 rounded-tl-lg" />
                            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-blue-400 rounded-tr-lg" />
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-blue-400 rounded-bl-lg" />
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-blue-400 rounded-br-lg" />
                          </div>
                        </div>

                        {/* Details */}
                        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                          <div className="space-y-6">
                            <div>
                              <div className="flex items-center space-x-3 mb-3">
                                <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                                  {selectedProject.category}
                                </span>
                                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
                              </div>
                              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                                {selectedProject.title}
                              </h2>
                            </div>
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold text-blue-400">About This Project</h3>
                              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                {selectedProject.description}
                              </p>
                            </div>
                            <div className="space-y-3">
                              <h3 className="text-lg font-semibold text-blue-400">Key Features</h3>
                              <div className="flex flex-wrap gap-2">
                                {["Responsive Design", "Modern UI", "Performance Optimized"].map((f, i) => (
                                  <span key={i} className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-md border border-gray-600">
                                    {f}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="pt-6 flex flex-col sm:flex-row gap-3">
                            <motion.a
                              href={selectedProject.link}
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
                            {selectedProject.caseStudy && (
                              <motion.button
                                onClick={() => setActiveTab("case-study")}
                                className="px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 transition-colors rounded-lg text-blue-300 font-medium border border-blue-500/40 hover:border-blue-500/70"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Read Case Study
                              </motion.button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="case-study"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="p-6 md:p-10 max-w-4xl mx-auto"
                      >
                        {selectedProject.caseStudy && (
                          <div className="space-y-10">
                            <div>
                              <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                                Case Study
                              </span>
                              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-2">
                                {selectedProject.title}
                              </h2>
                            </div>

                            {/* Results */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {selectedProject.caseStudy.results.map((r, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="text-center p-4 bg-gray-800/60 rounded-xl border border-gray-700"
                                >
                                  <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                                    {r.metric}
                                  </p>
                                  <p className="text-gray-400 text-sm mt-1">{r.label}</p>
                                </motion.div>
                              ))}
                            </div>

                            {/* Challenge */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <ExclamationCircleIcon className="w-6 h-6 text-white flex-shrink-0" />
                                <h3 className="text-xl font-bold text-white">The Challenge</h3>
                              </div>
                              <p className="text-gray-300 leading-relaxed pl-9">
                                {selectedProject.caseStudy.challenge}
                              </p>
                            </div>

                            {/* Solution */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <LightBulbIcon className="w-6 h-6 text-white flex-shrink-0" />
                                <h3 className="text-xl font-bold text-white">The Solution</h3>
                              </div>
                              <p className="text-gray-300 leading-relaxed pl-9">
                                {selectedProject.caseStudy.solution}
                              </p>
                            </div>

                            {/* Stack */}
                            <div className="space-y-3">
                              <h3 className="text-lg font-semibold text-gray-300">Tech Stack</h3>
                              <div className="flex flex-wrap gap-2">
                                {selectedProject.caseStudy.stack.map((tech, i) => (
                                  <span key={i} className="px-3 py-1.5 text-sm bg-gray-700/50 text-gray-200 rounded-lg border border-gray-600">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-4 flex flex-col sm:flex-row gap-3">
                              <motion.a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 rounded-lg text-white font-semibold"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Visit Project
                              </motion.a>
                              <motion.button
                                onClick={() => setSelectedId(null)}
                                className="px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 transition-colors rounded-lg text-gray-300 font-medium border border-gray-600"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Close
                              </motion.button>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
