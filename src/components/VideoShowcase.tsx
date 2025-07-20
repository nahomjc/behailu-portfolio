"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

export default function VideoShowcase() {
  const handleVideoClick = () => {
    window.open("https://youtu.be/adMETcDfnvI?si=yAHTgtDEKPWNQWWv", "_blank");
  };

  // Extract video ID from YouTube URL
  const videoId = "adMETcDfnvI";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0&showinfo=0&modestbranding=1`;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Video Editing <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Watch a compilation of my best video editing work, showcasing
            various techniques and styles
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Video Container */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video">
              {/* YouTube Embed */}
              <iframe
                src={embedUrl}
                title="Video Editing Showcase"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Video Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Video Editing Compilation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              This showcase features a variety of video editing techniques
              including color grading, motion graphics, transitions, and audio
              synchronization. Each project demonstrates attention to detail and
              creative storytelling.
            </p>
          </motion.div>

          {/* Video Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 mt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">4K</div>
              <div className="text-gray-600 dark:text-gray-400">Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">60fps</div>
              <div className="text-gray-600 dark:text-gray-400">Frame Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">HDR</div>
              <div className="text-gray-600 dark:text-gray-400">
                Color Grading
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleVideoClick}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 mx-auto"
          >
            <Play className="w-5 h-5" />
            <span>Watch More on YouTube</span>
            <ExternalLink className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
