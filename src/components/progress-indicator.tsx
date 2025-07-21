"use client";

import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const sections = ["home", "about", "services", "projects", "contact"];

export function ProgressIndicator({
  currentSection,
  onNavigate,
}: ProgressIndicatorProps) {
  return (
    <motion.div
      className="fixed left-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-[1000]"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {sections.map((section) => (
        <motion.button
          key={section}
          onClick={() => onNavigate(section)}
          className={`relative w-4 h-4 rounded-full transition-all duration-400 cursor-pointer ${
            currentSection === section
              ? "bg-gradient-to-br from-blue-600 to-purple-600 scale-140"
              : "bg-slate-400/20"
          }`}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
              currentSection === section ? "bg-white" : "bg-slate-400/40"
            }`}
            animate={currentSection === section ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Progress line */}
          <motion.div
            className="absolute top-1/2 left-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: currentSection === section ? 80 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Tooltip */}
          <motion.div
            className="absolute left-24 top-1/2 transform -translate-y-1/2 bg-gray-900/90 text-white px-3 py-1 rounded-lg text-sm font-medium capitalize opacity-0 pointer-events-none"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {section}
          </motion.div>
        </motion.button>
      ))}
    </motion.div>
  );
}
