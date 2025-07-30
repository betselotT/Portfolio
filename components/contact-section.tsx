"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  MapPin,
} from "lucide-react";
import ContactCard from "./contact-card";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-500/5 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4 inline-block relative">
            <span className="relative z-10">Get In Touch</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 opacity-70 rounded-full blur-sm"></span>
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ContactCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800 shadow-[0_0_15px_rgba(30,64,175,0.3)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-cyan-400 mr-4 h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="text-blue-100 font-medium">Email</h4>
                      <a
                        href="mailto:hello@example.com"
                        className="text-blue-300 hover:text-cyan-400 transition-colors"
                      >
                        betselottesfa9@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-cyan-400 mr-4 h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="text-blue-100 font-medium">Phone</h4>
                      <a
                        href="tel:0969125103"
                        className="text-blue-300 hover:text-cyan-400 transition-colors"
                      >
                        0969125103
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-cyan-400 mr-4 h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="text-blue-100 font-medium">Address</h4>
                      <p className="text-blue-300">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="text-cyan-400 mr-4 h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="text-blue-100 font-medium">
                        Social Media
                      </h4>
                      <div className="flex space-x-4 mt-2">
                        <a
                          href="https://github.com/betselotT"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-cyan-400 transition-colors"
                        >
                          <Github className="h-6 w-6" />
                          <span className="sr-only">GitHub</span>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/betselot-tesfa/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-cyan-400 transition-colors"
                        >
                          <Linkedin className="h-6 w-6" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-blue-300">Made with ❤️ by Betselot Tesfa</p>
        </div>
      </div>
    </section>
  );
}
