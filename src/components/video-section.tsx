import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const VideosSection = () => {
  const videos = [
    { id: "dQw4w9WgXcQ", title: "Introduction to React" },
    { id: "dQw4w9WgXcQ", title: "Advanced CSS Techniques" },
    { id: "dQw4w9WgXcQ", title: "Building a REST API" },
    { id: "dQw4w9WgXcQ", title: "Mastering Git Workflow" },
  ];

  return (
    <section id="videos" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Featured Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-video rounded-lg overflow-hidden group"
            >
              <Image
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                layout="fill"
                objectFit="cover"
                className="grayscale"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white">
                  {video.title}
                </h3>
              </div>
              <div className="absolute inset-0 border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
