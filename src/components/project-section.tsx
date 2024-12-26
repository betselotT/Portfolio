import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsSection = () => {
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
};

export default ProjectsSection;
