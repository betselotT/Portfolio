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
      "Shadcn UI",
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
    title: "Product Storage",
    description:
      "A responsive full-stack web application for storing and managing products. Users can perform full CRUD operations (Create, Read, Update, Delete) on products, with a clean UI and seamless user experience.",
    image: "/products.jpg",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/betselotT/Products",
    live: "https://products-tf12.onrender.com/",
  },
  {
    title: "My Blog",
    description:
      "A responsive single-page blogging platform where users can register, log in, write posts, and comment on others' posts. It includes features like debounced search, form validation, and a light/dark mode toggle.",
    image: "/blog.png",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Shadcn UI",
      "Firebase",
      "Authentication",
      "TypeScript",
    ],
    github: "https://github.com/betselotT/Blog-SPA",
    live: "https://blog-spa-theta.vercel.app/",
  },
  {
    title: "Flashcards",
    description:
      "A responsive full-stack web application for creating and managing flashcards. Users can create, edit, delete, and study flashcards, with a clean UI and seamless user experience.",
    image: "/flashcards.jpg",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/betselotT/Flashcards",
    live: "https://flashcards-frontend-2ap4.onrender.com/",
  },
  {
    title: "Task Manager",
    description:
      "A web app that helps users organize, track, and manage their daily tasks. Users can create, edit, delete, and mark tasks as complete.",
    image: "/tick.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Firebase",
      "JWT Authentication",
      "TypeScript",
    ],
    github: "https://github.com/betselotT/Task-Manager",
    live: "https://task-manager-black-nine.vercel.app/",
  },
  {
    title: "Ecommerce App",
    description:
      "A sleek and responsive user interface for an online shopping platform. It includes core pages like the homepage, product listing, product details, cart, and checkout.",
    image: "/ecommerce.png",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn UI", "TypeScript"],
    github: "https://github.com/betselotT/wannabe-ecommerce",
    live: "https://wannabe-ecommerce.vercel.app/",
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
