import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceSection = () => {
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
};

export default ExperienceSection;
