"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [currentText, setCurrentText] = useState("");
  const fullText = "Behailu Mefkere";
  const subtitle = "Video Editor & Videographer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="loader mx-auto mb-6"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          {currentText}
          <span className="animate-pulse">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8 text-gray-400"
        >
          <p className="text-sm">Based in Addis Ababa, Ethiopia</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
