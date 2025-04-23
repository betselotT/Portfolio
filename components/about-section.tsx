"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 relative">
      {/* Decorative element */}
      <div className="absolute left-0 top-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute right-0 top-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 inline-block relative">
            <span className="relative z-10">About Me</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 opacity-70 rounded-full blur-sm"></span>
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800 shadow-[0_0_15px_rgba(30,64,175,0.3)]"
          >
            <h3 className="text-xl font-semibold text-blue-100 mb-4">
              Who I Am
            </h3>
            <p className="text-blue-200 mb-4">
              I focus on performance, accessibility, and clean design, ensuring
              that every project delivers a seamless experience across devices.
              I strive to build websites that are not only visually appealing
              but also optimized for speed and usability.
            </p>
            <p className="text-blue-200">
              My journey in web development began 5 years ago, and since then,
              I&apos;ve worked on various projects ranging from small business
              websites to complex web applications. I enjoy the challenge of
              turning design concepts into functional, responsive interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-800 shadow-[0_0_15px_rgba(30,64,175,0.3)]">
                <h3 className="text-xl font-semibold text-blue-100 mb-3">
                  My Goals
                </h3>
                <p className="text-blue-200">
                  To create intuitive and accessible web experiences that solve
                  real-world problems while continuously expanding my technical
                  expertise.
                </p>
              </div>

              <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-800 shadow-[0_0_15px_rgba(30,64,175,0.3)]">
                <h3 className="text-xl font-semibold text-blue-100 mb-3">
                  My Approach
                </h3>
                <p className="text-blue-200">
                  I believe in clean, maintainable code and user-centered
                  design. I approach each project with a focus on performance,
                  accessibility, and responsive design principles.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
