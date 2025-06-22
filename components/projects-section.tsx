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
    title: "BookVerse",
    description:
      "A platform that allows to filter different books coming from Google Books API and also allows to perform CRUD operations on any books of a user's choice after signing up.",
    image: "/books.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "Google Books API",
      "JWT Authentication",
      "Framer Motion",
      "TypeScript",
    ],
    github: "https://github.com/betselotT/BookVerse",
    live: "https://bookverse.betsi.work/",
  },
  {
    title: "E-Commerce App",
    description:
      "A website that users can browse through a list of items they want to purchase.",
    image: "/ecommerce.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/betselotT/wannabe-ecommerce",
    live: "https://wannabe-ecommerce.vercel.app/",
  },
  {
    title: "BLU",
    description:
      "A mental health support website that connects therapists with patients.",
    image: "/blu.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/betselotT/BLU",
    live: "https://betselott.github.io/BLU/",
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-700 text-blue-300 hover:bg-blue-800/30 cursor-pointer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button
                      size="sm"
                      className="bg-blue-700 hover:bg-blue-600 text-white cursor-pointer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
