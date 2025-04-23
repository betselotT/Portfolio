"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formState);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormState({
      name: "",
      email: "",
      message: "",
    });
  };

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
            <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800 shadow-[0_0_15px_rgba(30,64,175,0.3)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-blue-200 block mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-blue-950/50 border-blue-800 text-blue-100 placeholder:text-blue-400/50 focus-visible:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-blue-200 block mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                      className="bg-blue-950/50 border-blue-800 text-blue-100 placeholder:text-blue-400/50 focus-visible:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-blue-200 block mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      rows={5}
                      className="bg-blue-950/50 border-blue-800 text-blue-100 placeholder:text-blue-400/50 focus-visible:ring-cyan-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
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
                        hello@example.com
                      </a>
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
                          href="#"
                          className="text-blue-300 hover:text-cyan-400 transition-colors"
                        >
                          <Github className="h-6 w-6" />
                          <span className="sr-only">GitHub</span>
                        </a>
                        <a
                          href="#"
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

            <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800 shadow-[0_0_15px_rgba(30,64,175,0.3)] flex-grow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Let&apos;s Work Together
                </h3>
                <p className="text-blue-200 mb-4">
                  I&apos;m currently available for freelance work and open to
                  new opportunities. If you have a project that needs a creative
                  touch, let&apos;s discuss how we can collaborate.
                </p>
                <p className="text-blue-200">
                  Whether you need a complete website, a redesign of an existing
                  one, or help with a specific feature, I&apos;m here to help
                  bring your vision to life.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-blue-300">
            © {new Date().getFullYear()} Betselot Tesfa. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
