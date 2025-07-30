"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-[120px] opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              <span className="block">Hi, I&apos;m</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                Betselot Tesfa
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-blue-200 mb-6 tracking-wider">
              Front-end Web Developer
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-lg">
              I build responsive, interactive websites using Next.js, React, and
              other modern web technologies. With a focus on performance and
              user experience, I create clean and efficient designs that bring
              ideas to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-500 text-white border border-blue-500 shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in Touch
              </Button>
              <Button
                variant="outline"
                className="border-blue-500 text-blue-300 hover:bg-blue-900/30 hover:text-blue-200"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-blue-400/30 shadow-[0_0_30px_rgba(56,189,248,0.3)]">
              <Image
                src="/meow.png"
                alt="Betselot Tesfa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center">
          <span className="text-blue-300 text-sm mb-6">Scroll Down</span>
          <ArrowDown className="text-blue-300 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
