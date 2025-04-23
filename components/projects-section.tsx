"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales tracking.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop functionality, team assignments, and progress tracking.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A financial tracking application that helps users monitor expenses, set budgets, and visualize spending patterns.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "D3.js",
      "Firebase",
    ],
    github: "#",
    live: "#",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-500/5 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 inline-block relative">
            <span className="relative z-10">Featured Projects</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 opacity-70 rounded-full blur-sm"></span>
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            A selection of my recent work and personal projects.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800 overflow-hidden h-full flex flex-col hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-blue-950/50 text-blue-200 border-blue-700/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-700 text-blue-300 hover:bg-blue-800/30"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-700 hover:bg-blue-600 text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
