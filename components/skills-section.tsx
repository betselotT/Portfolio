"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  CodepenIcon as ReactLogo,
  FramerIcon as FramerMotion,
  Database as MongoDB,
} from "lucide-react";

const skills = [
  {
    name: "React",
    icon: ReactLogo,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: () => (
      <svg
        className="w-6 h-6 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
    color: "text-white",
  },
  {
    name: "TypeScript",
    icon: () => (
      <svg
        className="w-6 h-6 text-blue-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
    color: "text-blue-400",
  },
  {
    name: "Tailwind CSS",
    icon: () => (
      <svg
        className="w-6 h-6 text-cyan-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
    color: "text-cyan-400",
  },
  {
    name: "PostgreSQL",
    icon: () => (
      <svg
        className="w-6 h-6 text-sky-600"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.37 0 0 4.924 0 11s5.37 11 12 11 12-4.924 12-11S18.63 0 12 0zm0 20c-4.97 0-9-3.582-9-9s4.03-9 9-9 9 3.582 9 9-4.03 9-9 9z" />
      </svg>
    ),
    color: "text-sky-600",
  },
  {
    name: "Docker",
    icon: () => (
      <svg
        className="w-6 h-6 text-blue-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M4 17h16c-1 2.5-3.5 4-6 4H10c-2.5 0-5-1.5-6-4zM4 13h4v4H4v-4zm5 0h4v4H9v-4zm5 0h4v4h-4v-4zm5 0h2v4h-2v-4zM4 9h4v4H4V9zm5 0h4v4H9V9zm5 0h4v4h-4V9z" />
      </svg>
    ),
    color: "text-blue-500",
  },
  {
    name: "Node.js",
    icon: () => (
      <svg
        className="w-6 h-6 text-green-600"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 .5l10.392 6v11.001l-10.392 6-10.392-6V6.5L12 .5zm0 2.3l-8.196 4.73v9.44L12 21.5l8.196-4.53v-9.44L12 2.8z" />
      </svg>
    ),
    color: "text-green-600",
  },
  {
    name: "Express.js",
    icon: () => (
      <svg
        className="w-6 h-6 text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M2 3h20v18H2V3zm4 4v10h2V7H6zm4 0v10h2V7h-2zm4 0v10h6V7h-6z" />
      </svg>
    ),
    color: "text-gray-300",
  },
  {
    name: "Firebase",
    icon: () => (
      <svg
        className="w-6 h-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3.89 15.672L6.093 0.367l10.608 10.61-3.839 3.839zM12.066 22.316l3.839-3.838 4.688 3.838H12.066zm9.305-3.838l-5.468-4.688 5.468-5.468z" />
      </svg>
    ),
    color: "text-yellow-500",
  },
  {
    name: "NeonDB",
    icon: () => (
      <svg
        className="w-6 h-6 text-green-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
    color: "text-green-500",
  },
  {
    name: "Better Auth",
    icon: () => (
      <svg
        className="w-6 h-6 text-purple-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 16h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V8h8v2z" />
      </svg>
    ),
    color: "text-purple-500",
  },
  {
    name: "MongoDB",
    icon: MongoDB,
    color: "text-green-600",
  },
  // {
  //   name: "Framer Motion",
  //   icon: FramerMotion,
  //   color: "text-purple-400",
  // },
  {
    name: "Redux Toolkit",
    icon: () => (
      <svg
        className="w-6 h-6 text-purple-600"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M16.24 11.51l-2.36-4.32-2.36 4.32H2.24l3.89 7.12 6.11-11.24 6.11 11.24 3.89-7.12h-9.24z" />
      </svg>
    ),
    color: "text-purple-600",
  },
  // {
  //   name: "RTK Query",
  //   icon: () => (
  //     <svg
  //       className="w-6 h-6 text-purple-700"
  //       viewBox="0 0 24 24"
  //       fill="currentColor"
  //     >
  //       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 16h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V8h8v2z" />
  //     </svg>
  //   ),
  //   color: "text-purple-700",
  // },
  {
    name: "Zustand",
    icon: () => (
      <svg
        className="w-6 h-6 text-blue-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.24L19.76 8v8L12 19.76 4.24 16V8L12 4.24z" />
      </svg>
    ),
    color: "text-blue-500",
  },
  {
    name: "Cypress",
    icon: () => (
      <svg
        className="w-6 h-6 text-green-700"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
    color: "text-green-700",
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 inline-block relative">
            <span className="relative z-10">Skills & Technologies</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 opacity-70 rounded-full blur-sm"></span>
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-800 flex flex-col items-center justify-center hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300 group"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-blue-950/50 group-hover:bg-blue-900/50 transition-colors duration-300">
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
              </div>
              <h3 className="text-blue-100 font-medium text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
