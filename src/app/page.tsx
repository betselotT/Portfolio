"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/project-section";
import ExperienceSection from "@/components/experience-section";
import VideosSection from "@/components/video-section";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 `}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            JD
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {["Home", "Projects", "Experience", "Videos"].map((item) => (
              <button
                key={item}
                className={`text-sm uppercase tracking-wider hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:bg-clip-text hover:text-transparent transition-all duration-300 `}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <VideosSection />
      </main>
    </div>
  );
}
