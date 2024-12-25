"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "experience", "videos"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black bg-opacity-80" : "bg-transparent"
        }`}
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
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm uppercase tracking-wider hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:bg-clip-text hover:text-transparent transition-all duration-300 ${
                  activeSection === item.toLowerCase()
                    ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    : ""
                }`}
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

function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hi, I'm John Doe.
            <br />I Build Experiences That Inspire.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Crafting modern web experiences with style and precision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-white px-8 py-3 rounded-full transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-white px-8 py-3 rounded-full transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore My Journey
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-12 md:mt-0"
        >
          <Image
            src="/placeholder.svg"
            alt="John Doe"
            width={500}
            height={500}
            className="rounded-full grayscale"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with React and Node.js.",
      image: "/placeholder.svg",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity app with real-time updates using Socket.io.",
      image: "/placeholder.svg",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather app using OpenWeatherMap API and React.",
      image: "/placeholder.svg",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-white/10 transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover grayscale"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveLink}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white text-white px-4 py-2 rounded-full transition-all duration-300"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-white text-white px-4 py-2 rounded-full transition-all duration-300"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      company: "Tech Innovators Inc.",
      role: "Senior Full Stack Developer",
      duration: "2020 - Present",
      description:
        "Led development of scalable web applications using React and Node.js.",
    },
    {
      company: "Digital Solutions LLC",
      role: "Frontend Developer",
      duration: "2018 - 2020",
      description:
        "Developed responsive user interfaces and improved website performance.",
    },
    {
      company: "StartUp Ventures",
      role: "Junior Web Developer",
      duration: "2016 - 2018",
      description:
        "Assisted in building and maintaining various client websites and web applications.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-white before:rounded-full before:z-10"
            >
              <div className="absolute left-2 top-2 bottom-0 w-px bg-gradient-to-b from-white to-transparent"></div>
              <h3 className="text-2xl font-semibold mb-1 text-white">
                {exp.company}
              </h3>
              <p className="text-xl mb-2 text-gray-300">
                {exp.role} | {exp.duration}
              </p>
              <p className="text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideosSection() {
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Introduction to React" },
    { id: "dQw4w9WgXcQ", title: "Advanced CSS Techniques" },
    { id: "dQw4w9WgXcQ", title: "Building a REST API" },
    { id: "dQw4w9WgXcQ", title: "Mastering Git Workflow" },
  ];

  return (
    <section id="videos" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Featured Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-video rounded-lg overflow-hidden group"
            >
              <Image
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                layout="fill"
                objectFit="cover"
                className="grayscale"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white">
                  {video.title}
                </h3>
              </div>
              <div className="absolute inset-0 border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
