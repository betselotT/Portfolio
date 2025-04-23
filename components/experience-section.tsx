"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Building2, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Escalate",
    location: "Addis Ababa",
    period: " 07/2024 – 09/2024",
    responsibilities: [
      "Designed a responsive landing page and built 5+ front-end pages and features that enhanced user experience",
      "Integrated API with 10+ endpoints, using RTK Query.",
      "Reviewed code for quality assurance, ensuring adherence to best practices and high standards",
      "Collaborated with UX/UI designers to create intuitive user interfaces",
    ],
  },
  {
    title: "Endubis Wallet App",
    company: "Endubis Solutions",
    location: "Addis Ababa",
    period: "2024 - present",
    responsibilities: [
      "Created a wallet app that gives blockchain services, now used in 10+ African countries",
      "Integrated RESTful APIs and implemented state management solutions",
      "Optimized web applications for maximum speed and scalability",
      "Led the integration of version control practices among team members which increased our project delivery speed",
    ],
  },
];

export default function ExperienceSection() {
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
    <section id="experience" className="py-20 relative">
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 inline-block relative">
            <span className="relative z-10">Work Experience</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 opacity-70 rounded-full blur-sm"></span>
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            My professional journey and roles I&apos;ve taken on.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/70 via-cyan-400/50 to-blue-500/20 hidden md:block"></div>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 relative`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)] hidden md:block"></div>

                {/* Date badge for mobile */}
                <div className="md:hidden mb-4">
                  <Badge className="bg-blue-800 text-blue-100 px-3 py-1 text-sm">
                    <CalendarDays className="w-3 h-3 mr-1" />
                    {exp.period}
                  </Badge>
                </div>

                <div className="md:w-1/2 flex justify-center items-start">
                  <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800 w-full hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-white">
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-center mt-2 text-blue-300">
                            <Building2 className="w-4 h-4 mr-1" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center mt-1 text-blue-300">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        {/* Date badge for desktop */}
                        <div className="hidden md:block">
                          <Badge className="bg-blue-800 text-blue-100 px-3 py-1">
                            <CalendarDays className="w-3 h-3 mr-1" />
                            {exp.period}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-blue-200">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty div for layout in desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
